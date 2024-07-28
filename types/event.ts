import { Venue } from "./venue";

export interface Location {
	lat: number;
	long: number;
	city: string;
	country: string;
}

export interface Event {
	id: string;
	title: string;
	description: string;
	location: Location;
	venue: Venue;
}

export type PartialEvent = Omit<Event, "id">