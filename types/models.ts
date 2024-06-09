import { Event } from "./event";

export interface IMovieModel {
	getAll: () => Promise<void>;
}

export interface BaseModel<T> {
	getAll: () => Promise<T[]>;
	getById: () => Promise<T | null>;
}

export interface IEventModel extends BaseModel<Event> {
	create: (event: Omit<Event, "id">) => Promise<Event>;
}
