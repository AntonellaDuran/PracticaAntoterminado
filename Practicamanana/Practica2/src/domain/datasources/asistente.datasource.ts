import { CreateAsistenteDto, UpdateAsistenteDto } from '../dtos';
import { AsistenteEntity } from '../entities/asistente.entity';

export abstract class AsistenteDatasource {

  abstract create(createAsistenteDto: CreateAsistenteDto): Promise<AsistenteEntity>;

  abstract getAll(): Promise<AsistenteEntity[]>;

  abstract findById(id: number): Promise<AsistenteEntity>;
  abstract updateById(updateAsistenteDto: UpdateAsistenteDto): Promise<AsistenteEntity>;
  abstract deleteById(id: number): Promise<AsistenteEntity>;

}