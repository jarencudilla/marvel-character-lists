const axios = require('axios');
const URL =  'https://gateway.marvel.com:';
const port = 443;
const apiKey = 'd73076c29232a459b9583e1f5e511316';
const charURL = '/v1/public/characters?'




axios
  .get(URL + port + charURL + 'apikey=' + apiKey)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });