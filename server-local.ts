import { createApp } from "./index";
import { EventModel } from "./models/local-file-system/event";

const eventsModel = new EventModel();

createApp({ eventsModel });
