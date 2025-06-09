export interface Destination {
  id: number;
  name: string;
  type: string;
  weather: string;
  image: string;
  pathName: string;
  population: number;
}

export type DestinationType =
  | "beach"
  | "cultural"
  | "mountain"
  | "city"
  | "all";
export type WeatherType =
  | "tropical"
  | "temperate"
  | "mediterranean"
  | "cold"
  | "varied"
  | "all";

export interface FilterState {
  typeFilter: DestinationType;
  weatherFilter: WeatherType;
  searchTerm: string;
}
