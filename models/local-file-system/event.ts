import { Event } from "_types/event";
import { IEventModel } from "_types/models";
import { JSONFilePreset } from "lowdb/node";
import { Low } from "lowdb";

export class EventModel {
	private _db: Low<Event[]> = {} as Low<Event[]>;
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

	constructor() {
		JSONFilePreset<Event[]>("events.json", this.baseEvents).then((db) => {
			this._db = db;
		});
	}

	async getAll() {
		await this._db.read();
	}
}
