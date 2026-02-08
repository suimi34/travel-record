// 実際のDestinationデータで使用される厳密な型（"all"を除く）
export type DestinationTypeValue =
  | "beach"
  | "cultural"
  | "mountain"
  | "city";

export type WeatherTypeValue =
  | "tropical"
  | "temperate"
  | "mediterranean"
  | "cold"
  | "varied";

export interface Destination {
  id: number;
  name: string;
  type: DestinationTypeValue;
  weather: WeatherTypeValue;
  image: string;
  pathName: string;
  population: number;
}

// フィルター用の型（"all"を含む）
export type DestinationType = DestinationTypeValue | "all";
export type WeatherType = WeatherTypeValue | "all";

export interface FilterState {
  typeFilter: DestinationType;
  weatherFilter: WeatherType;
  searchTerm: string;
}
