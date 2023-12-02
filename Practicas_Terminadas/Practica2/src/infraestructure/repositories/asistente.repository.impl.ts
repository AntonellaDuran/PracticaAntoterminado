import { CreateAsistenteDto, AsistenteDatasource, AsistenteEntity, AsistenteRepository, UpdateAsistenteDto } from '../../domain';

export class AsistenteRepositoryImpl implements AsistenteRepository {

  constructor(
    private readonly datasource: AsistenteDatasource,
  ) { }

  create(createAsistenteDTO: CreateAsistenteDto): Promise<AsistenteEntity> {
    return this.datasource.create(createAsistenteDTO);
  }

  getAll(): Promise<AsistenteEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<AsistenteEntity> {
    return this.datasource.findById(id);
  }

  updateById(updateAsistenteDto: UpdateAsistenteDto): Promise<AsistenteEntity> {
    return this.datasource.updateById(updateAsistenteDto);
  }

  deleteById(id: number): Promise<AsistenteEntity> {
    return this.datasource.deleteById(id);
  }

}
