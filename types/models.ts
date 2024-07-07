import { Event } from "./event";

export interface BaseModel<T> {
	getAll: (page?: number, itemsPerPage?: number) => Promise<T[]>;
	getById: (id: string) => Promise<T | undefined>;
}

export interface IEventModel extends BaseModel<Event> {
	create: (event: Omit<Event, "id">) => Promise<Event>;
}
