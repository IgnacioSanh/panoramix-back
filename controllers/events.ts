import { Request, Response } from "express";
import { IEventModel } from "_types/models";
import { PartialEvent } from "_types/event";
import { validateEvent, validatePartialEvent } from "_schemas/events";

interface GetAllQueryProps {
	page?: number;
	itemsPerPage?: number;
}

export class EventsController {
	eventModel: IEventModel;

	constructor(eventModel: IEventModel) {
		this.eventModel = eventModel;
	}

	getAll = async (
		req: Request<{}, {}, {}, GetAllQueryProps>,
		res: Response
	) => {
		const { page = 1, itemsPerPage = 10 } = req.query;
		const events = await this.eventModel.getAll(page, itemsPerPage);
		return res.json(events);
	};

	getById = async (req: Request<{id: string}>, res: Response) => {
		const event = await this.eventModel.getById(req.params.id);
		if (event) {
			return res.json(event);
		}
		return res.status(404).send('Not found');
	}

	create = async (req: Request<{}, {}, PartialEvent>, res: Response) => {
		const event = req.body;
		const {success, error} = validateEvent(event);
		if (success) {
			const createdEvent = await this.eventModel.create(event);
			return res.json(createdEvent);
		}
		return res.status(400).json(error);
	}

	delete = async (req: Request<{id: string}>, res: Response) => {
		const id = req.params.id;
		const event = await this.eventModel.getById(id);
		if (!event) {
			return res.status(400).json({error: "The specified event doesn't exists"})
		}
		await this.eventModel.delete(id);
		return res.json(event);
	}

	update = async (req: Request<{id: string}, {}, Partial<PartialEvent>>, res: Response) => {
		const id = req.params.id;
		const updatedData = req.body;

		// Validate data
		const {success, error} = validatePartialEvent(updatedData);
		if (!success) {
			return res.status(400).json(error);
		}

		const event = await this.eventModel.getById(id);
		if (!event) {
			return res.status(400).json({error: "The searched event id doesn't exist. Try with PUT method"});
		}
		const updatedEvent = await this.eventModel.update(id, updatedData);
		return res.json(updatedEvent);
	}
}
