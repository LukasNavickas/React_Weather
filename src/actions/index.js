import axios from 'axios';

const API_KEY = '098cd5adfe0a016f66050ca2f36f2916';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/weather?APPID=${API_KEY}`;
// to keep action types consistant
// const ROOT_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=532d313d6a9ec4ea93eb89696983e369';
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) { // city will be passed by function
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}