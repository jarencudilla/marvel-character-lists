require("dotenv").config();
var md5 = require('md5');
const axios = require('axios');
const URL =  "https://gateway.marvel.com:";
const PORT = process.env.PORT || 443
const PUBLIC_KEY = process.env.MARVEL_KEY;
const PRIVATE_KEY = process.env.ANOTHER_MARVEL_KEY;
// const API_KEY = PRIVATE_KEY + PUBLIC_KEY;
const charURL = "/v1/public/characters?";
const TS = new Date().getTime();

console.log(TS);
console.log(PUBLIC_KEY);

var stringToHash = TS + PRIVATE_KEY + PUBLIC_KEY;
var hash = md5(stringToHash);

var data = "wolverine";


axios
  .get(URL + PORT + charURL + 'ts=' + TS +'&apikey=' + PUBLIC_KEY + '&hash=' + hash )
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });

