import express, { json } from "express";
import { corsMiddleware } from "./middlewares/cors";
import { createEventRouter } from "_routes/events";
import {createGenreRouter} from '_routes/genres';
import { IEventModel, IGenreModel } from "_types/models";

interface CreateAppProps {
	eventsModel: IEventModel;
	genreModel: IGenreModel;
}

export const createApp = ({ eventsModel, genreModel }: CreateAppProps) => {
	const app = express();

	app.use(json());
	app.use(corsMiddleware());
	app.disable("x-powered-by");

	app.use("/events", createEventRouter(eventsModel));
	app.use("/genres", createGenreRouter(genreModel));

	const PORT = process.env.PORT || 4000;

	app.listen(PORT, () => {
		console.log(`Listening on port http://localhost:${PORT}`);
	});
};
