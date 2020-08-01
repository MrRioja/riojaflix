const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8000'
  : 'https://riojaflix.herokuapp.com';

export default URL_BACKEND;
