import { Event, PartialEvent } from "_types/event";
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
		const start = (page - 1) * itemsPerPage;
		const end = start + itemsPerPage;
		return Promise.resolve(this.baseEvents.slice(start, end));
	}

	async delete(id: string) {
		this.baseEvents = this.baseEvents.filter(event => id !== event.id);
		return Promise.resolve();
	}

	async update(id: string, partialEvent: Partial<PartialEvent>) {
		const updatedEvent = {
			...this.baseEvents.find(event => event.id === id),
			...partialEvent,
		} as Event
		this.baseEvents = this.baseEvents.filter(event => event.id !== id);
		this.baseEvents.push(updatedEvent);
		return Promise.resolve(updatedEvent);
	}
}
