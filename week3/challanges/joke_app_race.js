/*
CHALLENGE 1: Multi-Promise Handling

1.1 - Core App: 
Create a terminal app that pulls one joke from each of these APIs & only shows them all when everything has finished loading:
- https://sv443.net/jokeapi 
- https://github.com/15Dkatz/official_joke_api?ref=apilist.fun
- https://icanhazdadjoke.com/api

You should be able to use "Promise.all" to handle this cleanly & display 3 jokes all at the same time!

1.2 - Joke Race:
Modify the app so that it uses "Promise.race" to return the first joke that comes back from any of the APIs. Only show one joke! 


*/

const fetch = require('node-fetch');
  s
var jokeList = [fetch("https://sv443.net/jokeapi/category/Programming"), fetch("https://icanhazdadjoke.com/slack")]
    Promise.race(jokeList)
        .then(res => res.json())
        .then(data => {
        if (data.joke)
            return console.log(data.joke)
            else {
                return console.log(data.attachments[0].text)
            }
        })
        .catch(err => console.log(err));
