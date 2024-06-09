import express, { json } from "express";
import { corsMiddleware } from "./middlewares/cors";
import { createEventRouter } from "_routes/events";
import { IEventModel } from "_types/models";

interface CreateAppProps {
	eventsModel: IEventModel;
}

export const createApp = ({ eventsModel }: CreateAppProps) => {
	const app = express();

	app.use(json());
	app.use(corsMiddleware());
	app.disable("x-powered-by");

	app.use("/events", createEventRouter(eventsModel));

	const PORT = process.env.PORT || 4000;

	app.listen(PORT, () => {
		console.log(`Listening on port http://localhost:${PORT}`);
	});
};
