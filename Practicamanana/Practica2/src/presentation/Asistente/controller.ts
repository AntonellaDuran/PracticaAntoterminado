import { Request, Response } from 'express';
import { CreateAsistenteDto, UpdateAsistenteDto } from '../../domain/dtos';
import { CreateAsistente, DeleteAsistente, GetAsistente, GetAsistentes, AsistenteRepository, UpdateAsistente } from '../../domain';

export class AsistenteController {

  //* DI
  constructor(
    private readonly asistenteRepository: AsistenteRepository,
  ) { }

  public getAsistentes = (req: Request, res: Response) => {

    new GetAsistentes(this.asistenteRepository)
      .execute()
      .then(asistentes => res.json(asistentes))
      .catch(error => res.status(400).json({ error }));

  };

  public getAsistenteById = (req: Request, res: Response) => {
    const id = +req.params.id;

    new GetAsistente(this.asistenteRepository)
      .execute(id)
      .then(asistente => res.json(asistente))
      .catch(error => res.status(400).json({ error }));

  };

  public createAsistente = (req: Request, res: Response) => {
    const [error, createAsistenteDto] = CreateAsistenteDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateAsistente(this.asistenteRepository)
      .execute(createAsistenteDto!)
      .then(asistente => res.json(asistente))
      .catch(error => res.status(400).json({ error }));

  };

  public updateAsistente = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateAsistenteDto] = UpdateAsistenteDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    new UpdateAsistente(this.asistenteRepository)
      .execute(updateAsistenteDto!)
      .then(asistente => res.json(asistente))
      .catch(error => res.status(400).json({ error }));

  };

  public deleteAsistente = (req: Request, res: Response) => {
    const id = +req.params.id;

    new DeleteAsistente(this.asistenteRepository)
      .execute(id)
      .then(asistente => res.json(asistente))
      .catch(error => res.status(400).json({ error }));

  };
}
