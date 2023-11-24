import { Request, Response } from 'express';
import { AsistenteRepository } from '../../repositories/asistente.repository';
import { CreateAsistenteDto, UpdateAsistenteDto } from '../../domain/dtos';

export class AsistenteController {
  constructor(
    private readonly asistenteRepository: AsistenteRepository,
  ) { }

  public getAsistentes = async (req: Request, res: Response) => {
    const asistentes = await this.asistenteRepository.getAll();
    return res.json(asistentes);
  };

  public getAsistenteById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id)) return res.status(400).json({ error: 'id argument is not a number' });

    try {
      const asistente = await this.asistenteRepository.findById(id);
      res.json(asistente);
    } catch (error) {
      res.status(404).json({ error: `Asistente with id ${id} not found` });
    }
  };

  public createAsistente = async (req: Request, res: Response) => {
    const [error, createAsistenteDto] = CreateAsistenteDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const asistente = await this.asistenteRepository.create(createAsistenteDto!);
    res.json(asistente);
  };

  public updateAsistente = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateAsistenteDto] = UpdateAsistenteDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    try {
      const asistente = await this.asistenteRepository.findById(id);
      const updatedAsistente = await this.asistenteRepository.updateById(updateAsistenteDto!);
      res.json(updatedAsistente);
    } catch (error) {
      res.status(404).json({ error: `Asistente with id ${id} not found` });
    }
  };

  public deleteAsistente = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const deleted = await this.asistenteRepository.deleteById(id);
      res.json(deleted);
    } catch (error) {
      res.status(404).json({ error: `Asistente with id ${id} not found` });
    }
  };
}
