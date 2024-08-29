import { IGenreModel } from "_types/models";

export class GenreModel implements IGenreModel {
  baseGenres: Genre[] = [
    {
      id: crypto.randomUUID(),
      name: 'Comedy',
      value: 'comedy',
    },
    {
      id: crypto.randomUUID(),
      name: 'Dance',
      value: 'dance',
    },
    {
      id: crypto.randomUUID(),
      name: 'Live Music',
      value: 'live-music',
    },
    {
      id: crypto.randomUUID(),
      name: 'Outdoor',
      value: 'outdoor',
    },
    {
      id: crypto.randomUUID(),
      name: 'Theater',
      value: 'theater',
    },
    {
      id: crypto.randomUUID(),
      name: 'Food and Drink',
      value: 'food-drink',
    },
    {
      id: crypto.randomUUID(),
      name: 'Art Exhibitions',
      value: 'art-exhibitions',
    },
    {
      id: crypto.randomUUID(),
      name: 'Festivals',
      value: 'festivals',
    },
    {
      id: crypto.randomUUID(),
      name: 'Sports',
      value: 'sports',
    },
    {
      id: crypto.randomUUID(),
      name: 'Workshops & Classes',
      value: 'workshops-and-classes',
    },
    {
      id: crypto.randomUUID(),
      name: "Film Screenings",
      value: "film-screenings"
    },
    {
      id: crypto.randomUUID(),
      name: "Nightlife & Parties",
      value: "nightlife-parties"
    },
    {
      id: crypto.randomUUID(),
      name: "Cultural Events",
      value: "cultural-events"
    },
    {
      id: crypto.randomUUID(),
      name: "Family-Friendly",
      value: "family-friendly"
    },
    {
      id: crypto.randomUUID(),
      name: "Charity & Fundraising",
      value: "charity-fundraising"
    }
  ]

  getAll = async () => {
    return Promise.resolve(this.baseGenres);
  } 
}