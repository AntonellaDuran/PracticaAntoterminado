import { Router } from 'express';
import { AsistenteController } from './controller';
import { AsistenteDatasourceImpl } from '../../infraestructure/datasource/asistente.datasource.impl';
import { AsistenteRepositoryImpl } from '../../infraestructure/repositories/asistente.repository.impl';

export class AsistenteRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new AsistenteDatasourceImpl();
    const asistenteRepository = new AsistenteRepositoryImpl(datasource);
    const asistenteController = new AsistenteController(asistenteRepository);

    router.get('/', asistenteController.getAsistentes);
    router.get('/:id', asistenteController.getAsistenteById);
    
    router.post('/', asistenteController.createAsistente);
    router.put('/:id', asistenteController.updateAsistente);
    router.delete('/:id', asistenteController.deleteAsistente);

    return router;
  }

}
