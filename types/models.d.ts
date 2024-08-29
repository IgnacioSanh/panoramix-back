import { Event, PartialEvent } from "./event";

interface BaseModel<T> {
	getAll: (page?: number, itemsPerPage?: number) => Promise<T[]>;
	getById: (id: string) => Promise<T | undefined>;
}

interface IEventModel extends BaseModel<Event> {
	create: (event: PartialEvent) => Promise<Event>;
	delete: (id: string) => Promise<void>;
	update: (id: string, event: Partial<PartialEvent>) => Promise<Event>;
}

interface IGenreModel {
	getAll: () => Promise<Genre[]>;
}