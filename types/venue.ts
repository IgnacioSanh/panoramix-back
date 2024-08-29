import { Location } from "./event";

export interface Venue {
	id: string;
	name: string;
	type: string;
	address: string;
	city: string;
	country: string;
	location?: Location; // No se si deberia ir
}
