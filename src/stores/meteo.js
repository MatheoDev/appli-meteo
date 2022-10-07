// create custom store for meteo
import { get, writable } from 'svelte/store';
import { search } from './search';

export const meteo = writable(null);

// creer des fonction de recherche de meteo pour une ville api
export const getMeteo = async () => {
  // use city in search store
  const city = get(search);
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cbede3d17e4e69d258d7071e2f53732b`
  );
  const data = await response.json();
  // set dans le store 
  meteo.set(data);
}