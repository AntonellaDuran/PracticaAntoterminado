import { Router } from 'express';

import {  AsistenteRoutes  } from './Asistente/routes';

export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/asistente', AsistenteRoutes.routes );


    
    return router;
  }


}

