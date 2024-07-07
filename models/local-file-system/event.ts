import { Event } from "_types/event";
import { IEventModel } from "_types/models";
import { createId } from "_utils/uuid";

export class EventModel implements IEventModel {
	baseEvents: Event[] = [
		{
			id: "11",
			description: "description",
			location: {
				city: "City",
				country: "CL",
				lat: 1.2312,
				long: 3.231,
			},
			title: "Base event",
			venue: {
				id: "1",
				name: "Venue",
				type: "aaa",
			},
		},
	];

	async create(event: Omit<Event, "id">) {
		const newEvent: Event = {
			...event,
			id: createId(),
		};
		this.baseEvents.push(newEvent);
		return Promise.resolve(newEvent);
	}

	async getById(id: string) {
		return Promise.resolve(
			this.baseEvents.find((event) => event.id === id)
		);
	}

	async getAll(page = 1, itemsPerPage = 10) {
		return Promise.resolve(
			this.baseEvents.slice(
				(page - 1) * itemsPerPage,
				page * itemsPerPage
			)
		);
	}
}
