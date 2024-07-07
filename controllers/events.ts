import { IEventModel } from "_types/models";
import { Event } from "_types/event";
import { z } from "zod";

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

export class EventsController {
	eventModel: IEventModel;

	constructor(eventModel: IEventModel) {
		this.eventModel = eventModel;
	}

	async getAll(page = 1, itemsPerPage = 10) {
		return await this.eventModel.getAll(page, itemsPerPage);
	}

	async createEvent(event: Omit<Event, "id">) {
		EventSchema.parse(event);
		this.eventModel.create(event);
	}
}
