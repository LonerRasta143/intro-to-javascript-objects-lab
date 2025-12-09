const pokemon = require('./data.js');

const game = {
    party: [],
    gyms: [
        { location: "Pewter City", completed: false, difficulty: 1 },
        { location: "Cerulean City", completed: false, difficulty: 2 },
        { location: "Vermilion City", completed: false, difficulty: 3 },
        { location: "Celadon City", completed: false, difficulty: 4 },
        { location: "Fuchsia City", completed: false, difficulty: 5 },
        { location: "Saffron City", completed: false, difficulty: 6 },
        { location: "Cinnabar Island", completed: false, difficulty: 7 },
        { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
        { name: "potion", quantity: 4 },
        { name: "pokeball", quantity: 8 },
        { name: "rare candy", quantity: 99 },
    ],
    
   
}

//Excercise 3

game.difficulty = "Medium";

//Excercise 1
//console.dir(pokemon, { maxArrayLength: null })

//Excercise 2
//console.log(game)

//Excercise 4
const starterPokemon = pokemon.find(p=> p.name === "Pikachu" );
game.party.push(starterPokemon);

//Excercise 5

const bulbasaur= pokemon.find(p=> p.name=== "Bulbasaur");
const squirtle= pokemon.find(p => p.name === "Squirtle");
const charmander= pokemon.find(p=> p.name=== "Charmander");
game.party.push(bulbasaur)
game.party.push(squirtle)
game.party.push(charmander)


//Excercise 6
for(let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].difficulty < 3){
        game.gyms[i].completed = true;
    }
}
//Excercise 7
const starterIndex = game.party.findIndex(p => p.starter)
const evolvedPokemon = pokemon.find(p => p.number === 1) 
game.party.splice(starterIndex, 1, evolvedPokemon)

//Excercise 8
game.party.forEach(p => console.log(p.name)) 

//Exercise9
pokemon.filter(p => p.starter).forEach(p => console.log(p.name)) 

//Excercise 10
game.catchPokemon = function (pokemonObj) {
    this.party.push(pokemonObj);
};