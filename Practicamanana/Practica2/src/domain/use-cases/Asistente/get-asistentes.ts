import { AsistenteEntity } from '../../entities/asistente.entity';
import { AsistenteRepository } from '../../repositories/asistente.repository';

export interface GetAsistentesUseCase {
  execute(): Promise<AsistenteEntity[]>;
}

export class GetAsistentes implements GetAsistentesUseCase {

  constructor(
    private readonly repository: AsistenteRepository,
  ) {}

  execute(): Promise<AsistenteEntity[]> {
    return this.repository.getAll();
  }

}

