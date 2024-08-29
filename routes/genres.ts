import { Router } from "express";
import { IGenreModel } from "_types/models";
import { GenresController } from "_controllers/genres";

export const createGenreRouter = (genreModel: IGenreModel) => {
	const genresRouter = Router();

	const genreController = new GenresController(genreModel);

	genresRouter.get("/", genreController.getAll);

	return genresRouter;
};
