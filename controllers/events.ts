import { IEventModel } from "_types/models";

export class EventsController {
	eventModel: IEventModel;

	constructor(eventModel: IEventModel) {
		this.eventModel = eventModel;
	}

	async getAll() {
		return await this.eventModel.getAll();
	}
}
