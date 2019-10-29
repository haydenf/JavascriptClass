const fetch = require("node-fetch");

const chuckJokes = async () => {
    let jokes = [];
    // anything that returns a promise, can be awaited in the async function
    let joke1 = await fetch ("https://api.chucknorris.io/jokes/random");
    let joke1Data = await joke1.json();
    jokes.push(joke1Data.value);
    let joke2 = await fetch ("https://api.chucknorris.io/jokes/random");
    let joke2Data = await joke2.json();
    jokes.push(joke2Data.value);
    let joke3 = await fetch ("https://api.chucknorris.io/jokes/random");
    let joke3Data = await joke3.json();
    jokes.push(joke3Data.value);
    let joke4 = await fetch ("https://api.chucknorris.io/jokes/random");
    let joke4Data = await joke4.json();
    jokes.push(joke4Data.value);

    return jokes;
}

chuckJokes()
    .then(j => console.log(j))
    .catch(err => console.log(err));