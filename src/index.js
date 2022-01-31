require("dotenv").config();
var md5 = require('md5');
const axios = require('axios');
const URL =  "https://gateway.marvel.com:";
const PORT = process.env.PORT || 443
const PUBLIC_KEY = process.env.MARVEL_KEY;
const PRIVATE_KEY = process.env.ANOTHER_MARVEL_KEY;
const SH_API_TOKEN = process.env.SH_API_TOKEN;
const SH_URL=`https://superheroapi.com/api/${SH_API_TOKEN}`;
const charURL = "/v1/public/characters?";
const TS = new Date().getTime();

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// console.log(TS);
// console.log(PUBLIC_KEY);

var stringToHash = TS + PRIVATE_KEY + PUBLIC_KEY;
var hash = md5(stringToHash);

rl.question('Enter a Marvel Character:',  char => {
  console.log(`searching entries for ${char}`)
  rl.close()
})

axios
  // .get(URL + PORT + charURL + 'ts=' + TS +'&apikey=' + PUBLIC_KEY + '&hash=' + hash + '&name=' + char)
  .get(SH_URL + char)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
