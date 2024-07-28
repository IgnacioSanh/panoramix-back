import { z } from "zod";
import { PartialEvent } from "_types/event";

const EventSchema = z.object({
	title: z.string({
		required_error: "Title is required",
	}),
	description: z.string().optional(),
	location: z.object({
		lat: z.number(),
		long: z.number(),
		city: z.string(),
		country: z.string(),
	})
}).strict();

export const validateEvent = (event: PartialEvent) => {
  return EventSchema.safeParse(event);
}

export const validatePartialEvent = (event: Partial<PartialEvent>) => {
	return EventSchema.partial().safeParse(event);
}