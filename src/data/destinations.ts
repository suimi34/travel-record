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
const LOS_ANGELS_IMAGE = "/los_angels_us.jpg";
const WASHINGTON_DC_IMAGE = "/washington_dc_us.jpg";
const NEW_YORK_IMAGE = "/new_york_us.jpg";
const BOSTON_IMAGE = "/boston_us.jpg";
const MEXICO_CITY_IMAGE = "/mexico_city_mexico.jpg";
const HABANA_IMAGE = "/habana_cuba.jpg";
const CANCUN_IMAGE = "/cancun_mexico.jpg";

export const ALL_DESTINATIONS: Destination[] = [
  {
    id: 1,
    pathName: "Seoul",
    name: "Seoul, Korea",
    type: "city",
    weather: "varied",
    image: SEOUL_IMAGE,
    population: 9720846,
    coordinates: { lat: 37.5665, lng: 126.978 },
  },
  {
    id: 2,
    pathName: "Jiufen",
    name: "Jiufen, Taiwan",
    type: "beach",
    weather: "tropical",
    image: KYUFUN_IMAGE,
    population: 5500,
    coordinates: { lat: 25.1089, lng: 121.8443 },
  },
  {
    id: 3,
    pathName: "Cebu",
    name: "Cebu, Philippines",
    type: "beach",
    weather: "tropical",
    image: CEBU_IMAGE,
    population: 922611,
    coordinates: { lat: 10.3157, lng: 123.8854 },
  },
  {
    id: 4,
    pathName: "Manila",
    name: "Manila, Philippines",
    type: "beach",
    weather: "tropical",
    image: MANILA_IMAGE,
    population: 13484462,
    coordinates: { lat: 14.5995, lng: 120.9842 },
  },
  {
    id: 5,
    pathName: "Vancouver",
    name: "Vancouver, Canada",
    type: "city",
    weather: "cold",
    image: VANCOUVER_IMAGE,
    population: 2426160,
    coordinates: { lat: 49.2827, lng: -123.1207 },
  },
  {
    id: 6,
    pathName: "Seattle",
    name: "Seattle, United States",
    type: "city",
    weather: "cold",
    image: SEATTLE_IMAGE,
    population: 3979845,
    coordinates: { lat: 47.6062, lng: -122.3321 },
  },
  {
    id: 7,
    pathName: "Portland",
    name: "Portland, United States",
    type: "city",
    weather: "cold",
    image: PORTLAND_IMAGE,
    population: 2512859,
    coordinates: { lat: 45.5155, lng: -122.6789 },
  },
  {
    id: 8,
    pathName: "SanFrancisco",
    name: "San Francisco, United States",
    type: "city",
    weather: "mediterranean",
    image: SAN_FRANCISCO_IMAGE,
    population: 4749008,
    coordinates: { lat: 37.7749, lng: -122.4194 },
  },
  {
    id: 9,
    pathName: "SanJose",
    name: "San Jose, United States",
    type: "city",
    weather: "mediterranean",
    image: SAN_JOSE_IMAGE,
    population: 2000468,
    coordinates: { lat: 37.3382, lng: -121.8863 },
  },
  {
    id: 10,
    pathName: "LosAngels",
    name: "Los Angels, United States",
    type: "city",
    weather: "mediterranean",
    image: LOS_ANGELS_IMAGE,
    population: 12997353,
    coordinates: { lat: 34.0522, lng: -118.2437 },
  },
  {
    id: 11,
    pathName: "WashingtonDC",
    name: "Washington D.C., United States",
    type: "city",
    weather: "varied",
    image: WASHINGTON_DC_IMAGE,
    population: 6385162,
    coordinates: { lat: 38.9072, lng: -77.0369 },
  },
  {
    id: 12,
    pathName: "NewYork",
    name: "New York, United States",
    type: "city",
    weather: "varied",
    image: NEW_YORK_IMAGE,
    population: 20140470,
    coordinates: { lat: 40.7128, lng: -74.006 },
  },
  {
    id: 13,
    pathName: "Boston",
    name: "Boston, United States",
    type: "city",
    weather: "varied",
    image: BOSTON_IMAGE,
    population: 4919179,
    coordinates: { lat: 42.3601, lng: -71.0589 },
  },
  {
    id: 14,
    pathName: "MexicoCity",
    name: "Mexico City, Mexico",
    type: "city",
    weather: "tropical",
    image: MEXICO_CITY_IMAGE,
    population: 21804515,
    coordinates: { lat: 19.4326, lng: -99.1332 },
  },
  {
    id: 15,
    pathName: "Habana",
    name: "Habana, Cuba",
    type: "city",
    weather: "tropical",
    image: HABANA_IMAGE,
    population: 2132183,
    coordinates: { lat: 23.1136, lng: -82.3666 },
  },
  {
    id: 16,
    pathName: "Cancun",
    name: "Cancun, Mexico",
    type: "beach",
    weather: "tropical",
    image: CANCUN_IMAGE,
    population: 888797,
    coordinates: { lat: 21.1619, lng: -86.8515 },
  },
];
