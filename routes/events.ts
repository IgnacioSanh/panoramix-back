import { Router } from "express";
import { EventsController } from "_controllers/events";
import { IEventModel } from "_types/models";

export const createEventRouter = (eventModel: IEventModel) => {
	const eventsRouter = Router();

	const eventController = new EventsController(eventModel);

	eventsRouter.get("/", eventController.getAll);

	return eventsRouter;
};
