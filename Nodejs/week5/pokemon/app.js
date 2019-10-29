// server initialization:
const express = require('express');
const port = 3000;
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const fetch = require('node-fetch')

// server middleware:
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


// server middleware:
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// let urlToVisit = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 808)}`;



async function getRandomPokemon() {
    // let amount = 0;
    let pokemonArr = []
    for (var i = 0; i < 6; i++){
    let urlToVisit = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 808)}`;
    let data    = await fetch(urlToVisit)
    let result  = await data.json();
    let pokemonName = result.name;
    let pokemonSprite = result.sprites.front_default;
    let weight  =   result.weight;
    let height  =   result.height;
    pokemonArr.push({pokemonName, pokemonSprite, weight, height})
   
    




  
    // for (let pokemon in pokemonArr)
    // {
    // let name    =   result.name;
    // let picture =   result.sprites.front_default;
    // let type    =   result.types[0].type.name;
    // let weight  =   result.weight;
    // let height  =   result.height;
    // pokemonOb      = {name, picture, type, weight, height};
    // }
};
      console.log(pokemonArr)
    //   console.log(pokemonOb)
    //   console.log(pokemonArr)
    return pokemonArr;
    
}
// routing: 
app.get('/', async (req, res) => {
    const pokeArr = await getRandomPokemon();

    

    // call or run other code here


    res.render('index', {
        pokemonArr:pokeArr

    })
});


// message for when the server boots up:
app.listen(port, () => {
    console.log(`server started on localhost:${port}!`)
});
