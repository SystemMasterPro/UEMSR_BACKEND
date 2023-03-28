const fetch = require("node-fetch");
require('dotenv').config()
fetch(process.env.url_api+"docentes?select=*", {
    method: "GET",
    headers: {
    Content: "application/json",
    apikey:process.env.apikey,
    Authorization:process.env.Authorization    
    }
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))