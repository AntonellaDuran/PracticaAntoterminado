import { prisma } from '../../data/postgres';
import { CreateAsistenteDto, AsistenteDatasource, AsistenteEntity, UpdateAsistenteDto } from '../../domain';

export class AsistenteDatasourceImpl implements AsistenteDatasource {

  async create(createAsistenteDTO: CreateAsistenteDto): Promise<AsistenteEntity> {
    const asistente = await prisma.asistente.create({
      data: createAsistenteDTO!
    });

    return AsistenteEntity.fromObject(asistente);
  }

  async getAll(): Promise<AsistenteEntity[]> {
    const asistentes = await prisma.asistente.findMany();
    return asistentes.map(asistente => AsistenteEntity.fromObject(asistente));
  }

  async findById(id: number): Promise<AsistenteEntity> {
    const asistente = await prisma.asistente.findFirst({
      where: { id }
    });

    if (!asistente) throw `Asistente with id ${id} not found`;
    return AsistenteEntity.fromObject(asistente);
  }

  async updateById(updateAsistenteDto: UpdateAsistenteDto): Promise<AsistenteEntity> {
    await this.findById(updateAsistenteDto.id);

    const updatedAsistente = await prisma.asistente.update({
      where: { id: updateAsistenteDto.id },
      data: updateAsistenteDto!.values
    });

    return AsistenteEntity.fromObject(updatedAsistente);
  }

  async deleteById(id: number): Promise<AsistenteEntity> {
    await this.findById(id);
    const deleted = await prisma.asistente.delete({
      where: { id }
    });

    return AsistenteEntity.fromObject(deleted);
  }

}
