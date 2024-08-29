import { Venue } from "./venue";

export interface Location {
	lat: number;
	long: number;
}

export interface Event {
	id: string;
	title: string;
	description: string;
	eventDate: Date;
	venue: Venue;
	category: string[]; // Should be from an enum
	isFree: boolean; // Default to true
	tags?: string[];
	gallery?: string[];
	confirmed_assistants?: number;
	organizerId?: string; // Should be an ID.
}

export type PartialEvent = Omit<Event, "id">