import { createApp } from "./index";
import { EventModel } from "_models/local-file-system/event";
import { GenreModel } from "_models/local-file-system/genre";

const eventsModel = new EventModel();
const genreModel = new GenreModel();

createApp({ eventsModel, genreModel });
