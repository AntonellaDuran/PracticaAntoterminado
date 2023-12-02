import { Router } from 'express';

import { asistenteRoutes } from './Asistente/routes';



export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/asistente', asistente.routes );
    
    
    return router;
  }


}

