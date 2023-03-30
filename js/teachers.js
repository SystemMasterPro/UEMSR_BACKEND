// const fetch = require("node-fetch")

// require('dotenv').config()

fetch("https://yujlpvpwopbgtpigmuji.supabase.co/rest/v1/docentes?select=*", {
    method: "GET",
    headers: {
    Content: "application/json",
    apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1amxwdnB3b3BiZ3RwaWdtdWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk3NjQ4MjIsImV4cCI6MTk5NTM0MDgyMn0.pnPUvzoSKQVu8IDUGBAA-LxP_8Ke3MQFXmt4pusrf7c',
    Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1amxwdnB3b3BiZ3RwaWdtdWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk3NjQ4MjIsImV4cCI6MTk5NTM0MDgyMn0.pnPUvzoSKQVu8IDUGBAA-LxP_8Ke3MQFXmt4pusrf7c'   
    }
})
    .then(response => response.json())
    .then(data =>  viewData(data))
    .catch(err => console.log(err))

const viewData = (data) => { 
    let body = '';
    for (let i = 0; i < data.length; i++) {
        body += `<h1>${data[i].name}</h1> <h2>${data[i].rol}</h2>`
    }
    document.getElementById('items').innerHTML = body;
}
