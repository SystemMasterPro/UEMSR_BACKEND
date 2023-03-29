// const fetch = require("node-fetch")
import fetch from 'node-fetch'

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
    .then(data => console.log(data))
    .catch(err => console.log(err))

const viewData = (data) => { 
    console.log(data);
    let body = '';
    for (let i = 0; i < data.length; i++) {
        body += `<h1>${data[i].name}</h1>`
        console.log(data[i].name);
    }
    document.getElementById('data').innerHTML = body;
}