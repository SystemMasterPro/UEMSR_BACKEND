require('dotenv').config()

const { Configuration, OpenAIApi } = require('openai')

const configuration = new Configuration({
    apiKey: process.env.API_KEY,
});

const main = async () => { 
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "¿Cual es la capital de Ecuador?",
    });

    console.log(completion.data.choices[0].text);
}

main()