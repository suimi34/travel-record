import { Destination } from "../types";

const SEOUL_IMAGE = "/seoul_korea.jpg";
const KYUFUN_IMAGE = "/kyufun_taiwan.jpg";
const CEBU_IMAGE = "/cebu_philippines.jpg";
const MANILA_IMAGE = "/manila_philippines.jpg";
const VANCOUVER_IMAGE = "/vancouver_canada.jpg";
const SEATTLE_IMAGE = "/seattle_us.jpg";
const PORTLAND_IMAGE = "/portland_us.jpg";
const SAN_FRANCISCO_IMAGE = "/san_francisco_us.jpg";
const SAN_JOSE_IMAGE = "/san_jose_us.jpg";
const LOS_ANGELES_IMAGE = "/los_angeles_us.jpg";
const WASHINGTON_DC_IMAGE = "/washington_dc_us.jpg";
const NEW_YORK_IMAGE = "/new_york_us.jpg";
const BOSTON_IMAGE = "/boston_us.jpg";
const MEXICO_CITY_IMAGE = "/mexico_city_mexico.jpg";
const HABANA_IMAGE = "/habana_cuba.jpg";
const CANCUN_IMAGE = "/cancun_mexico.jpg";
const LONDON_IMAGE = "/london_uk.jpg";
const BRIGHTON_IMAGE = "/brighton_uk.jpg";
const EDINBURGH_IMAGE = "/edinburgh_uk.jpg";
const DUBLIN_IMAGE = "/dublin_ireland.jpg";
const COPENHAGEN_IMAGE = "/copenhagen_denmark.jpg";
const STOCKHOLM_IMAGE = "/stockholm_sweden.jpg";
const HELSINKI_IMAGE = "/helsinki_finland.jpg";

// population は各都市の「都市圏（metropolitan area）」人口で統一している。
// 国ごとに公式の定義を採用（米国=MSA / カナダ=CMA / メキシコ=ZM /
// フィリピン=Metro / 韓国=首都圏 / 英国・アイルランド・北欧=metropolitan area）。
// 各行のコメントに定義名と出典年を記載。Jiufen のみ都市圏の定義が存在しないため村の人口。
export const ALL_DESTINATIONS: Destination[] = [
  {
    id: 1,
    pathName: "Seoul",
    name: "Seoul, Korea",
    type: "city",
    weather: "varied",
    image: SEOUL_IMAGE,
    population: 26043325, // Seoul Capital Area, 2020 census
    coordinates: { lat: 37.5665, lng: 126.978 },
  },
  {
    id: 2,
    pathName: "Jiufen",
    name: "Jiufen, Taiwan",
    type: "beach",
    weather: "tropical",
    image: KYUFUN_IMAGE,
    population: 5500, // Jiufen village (no metro area defined)
    coordinates: { lat: 25.1089, lng: 121.8443 },
  },
  {
    id: 3,
    pathName: "Cebu",
    name: "Cebu, Philippines",
    type: "beach",
    weather: "tropical",
    image: CEBU_IMAGE,
    population: 3207256, // Metro Cebu, 2024 census
    coordinates: { lat: 10.3157, lng: 123.8854 },
  },
  {
    id: 4,
    pathName: "Manila",
    name: "Manila, Philippines",
    type: "beach",
    weather: "tropical",
    image: MANILA_IMAGE,
    population: 14001751, // Metro Manila, 2024 census
    coordinates: { lat: 14.5995, lng: 120.9842 },
  },
  {
    id: 5,
    pathName: "Vancouver",
    name: "Vancouver, Canada",
    type: "city",
    weather: "cold",
    image: VANCOUVER_IMAGE,
    population: 2642825, // Metro Vancouver CMA, 2021 census
    coordinates: { lat: 49.2827, lng: -123.1207 },
  },
  {
    id: 6,
    pathName: "Seattle",
    name: "Seattle, United States",
    type: "city",
    weather: "cold",
    image: SEATTLE_IMAGE,
    population: 4161883, // Seattle-Tacoma-Bellevue MSA, 2025 est.
    coordinates: { lat: 47.6062, lng: -122.3321 },
  },
  {
    id: 7,
    pathName: "Portland",
    name: "Portland, United States",
    type: "city",
    weather: "cold",
    image: PORTLAND_IMAGE,
    population: 2542282, // Portland-Vancouver-Hillsboro MSA, 2025 est.
    coordinates: { lat: 45.5155, lng: -122.6789 },
  },
  {
    id: 8,
    pathName: "SanFrancisco",
    name: "San Francisco, United States",
    type: "city",
    weather: "mediterranean",
    image: SAN_FRANCISCO_IMAGE,
    population: 4630041, // San Francisco-Oakland-Fremont MSA, 2025 est.
    coordinates: { lat: 37.7749, lng: -122.4194 },
  },
  {
    id: 9,
    pathName: "SanJose",
    name: "San Jose, United States",
    type: "city",
    weather: "mediterranean",
    image: SAN_JOSE_IMAGE,
    population: 1984473, // San Jose-Sunnyvale-Santa Clara MSA, 2025 est.
    coordinates: { lat: 37.3382, lng: -121.8863 },
  },
  {
    id: 10,
    pathName: "LosAngeles",
    name: "Los Angeles, United States",
    type: "city",
    weather: "mediterranean",
    image: LOS_ANGELES_IMAGE,
    population: 12844441, // Los Angeles-Long Beach-Anaheim MSA, 2025 est.
    coordinates: { lat: 34.0522, lng: -118.2437 },
  },
  {
    id: 11,
    pathName: "WashingtonDC",
    name: "Washington D.C., United States",
    type: "city",
    weather: "varied",
    image: WASHINGTON_DC_IMAGE,
    population: 6465724, // Washington-Arlington-Alexandria MSA, 2025 est.
    coordinates: { lat: 38.9072, lng: -77.0369 },
  },
  {
    id: 12,
    pathName: "NewYork",
    name: "New York, United States",
    type: "city",
    weather: "varied",
    image: NEW_YORK_IMAGE,
    population: 20112448, // New York-Newark-Jersey City MSA, 2025 est.
    coordinates: { lat: 40.7128, lng: -74.006 },
  },
  {
    id: 13,
    pathName: "Boston",
    name: "Boston, United States",
    type: "city",
    weather: "varied",
    image: BOSTON_IMAGE,
    population: 5034221, // Boston-Cambridge-Newton MSA, 2025 est.
    coordinates: { lat: 42.3601, lng: -71.0589 },
  },
  {
    id: 14,
    pathName: "MexicoCity",
    name: "Mexico City, Mexico",
    type: "city",
    weather: "tropical",
    image: MEXICO_CITY_IMAGE,
    population: 21436911, // Greater Mexico City (ZMVM), 2020 census
    coordinates: { lat: 19.4326, lng: -99.1332 },
  },
  {
    id: 15,
    pathName: "Habana",
    name: "Habana, Cuba",
    type: "city",
    weather: "tropical",
    image: HABANA_IMAGE,
    population: 2156350, // Havana metropolitan area, 2022
    coordinates: { lat: 23.1136, lng: -82.3666 },
  },
  {
    id: 16,
    pathName: "Cancun",
    name: "Cancun, Mexico",
    type: "beach",
    weather: "tropical",
    image: CANCUN_IMAGE,
    population: 1045005, // Cancun metropolitan area, 2020 census
    coordinates: { lat: 21.1619, lng: -86.8515 },
  },
  {
    id: 17,
    pathName: "London",
    name: "London, United Kingdom",
    type: "city",
    weather: "varied",
    image: LONDON_IMAGE,
    population: 15400000, // London metropolitan area, 2026 est.
    coordinates: { lat: 51.5074, lng: -0.1278 },
  },
  {
    id: 18,
    pathName: "Brighton",
    name: "Brighton, United Kingdom",
    type: "city",
    weather: "varied",
    image: BRIGHTON_IMAGE,
    population: 769000, // Brighton metropolitan area, 2024 est.
    coordinates: { lat: 50.8225, lng: -0.1372 },
  },
  {
    id: 19,
    pathName: "Edinburgh",
    name: "Edinburgh, United Kingdom",
    type: "city",
    weather: "varied",
    image: EDINBURGH_IMAGE,
    population: 912490, // Edinburgh metropolitan area, 2020
    coordinates: { lat: 55.9533, lng: -3.1883 },
  },
  {
    id: 20,
    pathName: "Dublin",
    name: "Dublin, Ireland",
    type: "city",
    weather: "varied",
    image: DUBLIN_IMAGE,
    population: 2082605, // Greater Dublin Area, 2022 census
    coordinates: { lat: 53.3498, lng: -6.2603 },
  },
  {
    id: 21,
    pathName: "Copenhagen",
    name: "Copenhagen, Denmark",
    type: "city",
    weather: "cold",
    image: COPENHAGEN_IMAGE,
    population: 2135634, // Copenhagen metropolitan area, 2026-01-01
    coordinates: { lat: 55.6761, lng: 12.5683 },
  },
  {
    id: 22,
    pathName: "Stockholm",
    name: "Stockholm, Sweden",
    type: "city",
    weather: "cold",
    image: STOCKHOLM_IMAGE,
    population: 2480063, // Stockholm metropolitan area, 2025
    coordinates: { lat: 59.3293, lng: 18.0686 },
  },
  {
    id: 23,
    pathName: "Helsinki",
    name: "Helsinki, Finland",
    type: "city",
    weather: "cold",
    image: HELSINKI_IMAGE,
    population: 1623283, // Greater Helsinki metropolitan area
    coordinates: { lat: 60.1699, lng: 24.9384 },
  },
];
