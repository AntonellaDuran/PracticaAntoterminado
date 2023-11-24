import { UpdateAsistenteDto } from '../../dtos';
import { AsistenteEntity } from '../../entities/asistente.entity';
import { AsistenteRepository } from '../../repositories/asistente.repository';

export interface UpdateAsistenteUseCase {
  execute(dto: UpdateAsistenteDto): Promise<AsistenteEntity>;
}

export class UpdateAsistente implements UpdateAsistenteUseCase {

  constructor(
    private readonly repository: AsistenteRepository,
  ) {}

  execute(dto: UpdateAsistenteDto): Promise<AsistenteEntity> {
    return this.repository.updateById(dto);
  }

}


