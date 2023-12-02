import { CreateAsistenteDto } from '../../dtos';
import { AsistenteEntity } from '../../entities/asistente.entity';
import { AsistenteRepository } from '../../repositories/asistente.repository';

export interface CreateAsistenteUseCase {
  execute(dto: CreateAsistenteDto): Promise<AsistenteEntity>;
}

export class CreateAsistente implements CreateAsistenteUseCase {

  constructor(
    private readonly repository: AsistenteRepository,
  ) {}

  execute(dto: CreateAsistenteDto): Promise<AsistenteEntity> {
    return this.repository.create(dto);
  }

}

