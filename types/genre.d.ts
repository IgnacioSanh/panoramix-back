interface Genre {
  id: string;
  name: string;
  value: string;
}

type PartialGenre = Omit<Genre, "id">;