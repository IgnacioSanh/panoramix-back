import {Request, Response} from 'express';
import {IGenreModel} from '_types/models';

export class GenresController {
  genreModel: IGenreModel;

  constructor(genreModel: IGenreModel) {
    this.genreModel = genreModel;
  }

  getAll = async (_: Request, res: Response) => {
    const genres = await this.genreModel.getAll();
    return res.json(genres);
  }
}