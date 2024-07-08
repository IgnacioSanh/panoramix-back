import { Request, Response } from "express";
import { z } from "zod";
import { IEventModel } from "_types/models";
import { Event } from "_types/event";

const EventSchema = z.object({
	title: z.string({
		required_error: "Title is required",
	}),
	location: z.object({
		lat: z.number(),
		long: z.number(),
		city: z.string(),
		country: z.string(),
	}),
	venue: z.object({}),
});

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

	async createEvent(event: Omit<Event, "id">) {
		EventSchema.parse(event);
		this.eventModel.create(event);
	}
}
