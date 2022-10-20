// create custom store for meteo
import { get, writable } from 'svelte/store';
import { search } from './search';

export const meteo = writable(null);

// creer des fonction de recherche de meteo pour une ville api
export const getMeteo = async () => {
  // use city in search store
  const city = get(search);
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f57d30b6bf7574fc3419c4d551175e3f&units=metric&lang=fr`
  );
  const data = await response.json();
  // set dans le store 
  meteo.set(data);
  console.log(data.name);
  console.log(data.main.temp);
  var map = L.map('map', {
    center: [data.coord.lat, data.coord.lon],
    zoom: 13
  });
}