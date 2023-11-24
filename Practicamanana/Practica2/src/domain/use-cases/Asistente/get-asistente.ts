import { AsistenteEntity } from '../../entities/asistente.entity';
import { AsistenteRepository } from '../../repositories/asistente.repository';

export interface GetAsistenteUseCase {
  execute(id: number): Promise<AsistenteEntity>;
}

export class GetAsistente implements GetAsistenteUseCase {

  constructor(
    private readonly repository: AsistenteRepository,
  ) {}

  execute(id: number): Promise<AsistenteEntity> {
    return this.repository.findById(id);
  }

}


