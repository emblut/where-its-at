import axios from 'axios';

function fetchEvents() {
  return axios.get('https://santosnr6.github.io/Data/events.json');
}

export default fetchEvents;
