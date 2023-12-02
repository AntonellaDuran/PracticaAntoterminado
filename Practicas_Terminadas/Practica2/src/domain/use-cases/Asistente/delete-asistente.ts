import { AsistenteEntity } from '../../entities/asistente.entity';
import { AsistenteRepository } from '../../repositories/asistente.repository';

export interface DeleteAsistenteUseCase {
  execute(id: number): Promise<AsistenteEntity>;
}

export class DeleteAsistente implements DeleteAsistenteUseCase {

  constructor(
    private readonly repository: AsistenteRepository,
  ) {}

  execute(id: number): Promise<AsistenteEntity> {
    return this.repository.deleteById(id);
  }

}


