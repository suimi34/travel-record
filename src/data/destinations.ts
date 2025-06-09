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
  },
  {
    id: 2,
    pathName: "Jiufen",
    name: "Jiufen, Taiwan",
    type: "beach",
    weather: "tropical",
    image: KYUFUN_IMAGE,
    population: 5500,
  },
  {
    id: 3,
    pathName: "Cebu",
    name: "Cebu, Philippines",
    type: "beach",
    weather: "tropical",
    image: CEBU_IMAGE,
    population: 922611,
  },
  {
    id: 4,
    pathName: "Manila",
    name: "Manila, Philippines",
    type: "beach",
    weather: "tropical",
    image: MANILA_IMAGE,
    population: 13484462,
  },
  {
    id: 5,
    pathName: "Vancouver",
    name: "Vancouver, Canada",
    type: "city",
    weather: "cold",
    image: VANCOUVER_IMAGE,
    population: 2426160,
  },
  {
    id: 6,
    pathName: "Seattle",
    name: "Seattle, United States",
    type: "city",
    weather: "cold",
    image: SEATTLE_IMAGE,
    population: 3979845,
  },
  {
    id: 7,
    pathName: "Portland",
    name: "Portland, United States",
    type: "city",
    weather: "cold",
    image: PORTLAND_IMAGE,
    population: 2512859,
  },
  {
    id: 8,
    pathName: "SanFrancisco",
    name: "San Francisco, United States",
    type: "city",
    weather: "mediterranean",
    image: SAN_FRANCISCO_IMAGE,
    population: 4749008,
  },
  {
    id: 9,
    pathName: "SanJose",
    name: "San Jose, United States",
    type: "city",
    weather: "mediterranean",
    image: SAN_JOSE_IMAGE,
    population: 2000468,
  },
  {
    id: 10,
    pathName: "LosAngels",
    name: "Los Angels, United States",
    type: "city",
    weather: "mediterranean",
    image: LOS_ANGELS_IMAGE,
    population: 12997353,
  },
  {
    id: 11,
    pathName: "WashingtonDC",
    name: "Washington D.C., United States",
    type: "city",
    weather: "varied",
    image: WASHINGTON_DC_IMAGE,
    population: 6385162,
  },
  {
    id: 12,
    pathName: "NewYork",
    name: "New York, United States",
    type: "city",
    weather: "varied",
    image: NEW_YORK_IMAGE,
    population: 20140470,
  },
  {
    id: 13,
    pathName: "Boston",
    name: "Boston, United States",
    type: "city",
    weather: "varied",
    image: BOSTON_IMAGE,
    population: 4919179,
  },
  {
    id: 14,
    pathName: "MexicoCity",
    name: "Mexico City, Mexico",
    type: "city",
    weather: "tropical",
    image: MEXICO_CITY_IMAGE,
    population: 21804515,
  },
  {
    id: 15,
    pathName: "Habana",
    name: "Habana, Cuba",
    type: "city",
    weather: "tropical",
    image: HABANA_IMAGE,
    population: 2132183,
  },
  {
    id: 16,
    pathName: "Cancun",
    name: "Cancun, Mexico",
    type: "beach",
    weather: "tropical",
    image: CANCUN_IMAGE,
    population: 888797,
  },
];
