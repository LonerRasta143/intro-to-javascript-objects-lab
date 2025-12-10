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
const starter = pokemon.find(p => p.starter === true); game.party.push(starter);

//Excercise 5

const fireType = pokemon.find(p => p.type === "fire"); 
const highHp = pokemon.find(p => p.hp > 80); 
const waterType = pokemon.find(p => p.type === "water"); 
game.party.push(fireType, highHp, waterType);
game.party.push('charmander')


//Excercise 6
for(let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].difficulty < 3){
        game.gyms[i].completed = true;
    }
}
//Excercise 7
const starterIndex = game.party.findIndex(p => p.starter); 
const starterPokemon = game.party[starterIndex]; 
const evolved = pokemon.find(p => p.number === starter.number + 1); 
game.party.splice(starterIndex, 1, evolved);

//Excercise 8
game.party.forEach(p => console.log(p.name)) 

//Exercise9
pokemon.filter(p => p.starter).forEach(p => console.log(p.name)) 

//Excercise 10
game.catchPokemon = function (pokemonObj) {
    this.party.push(pokemonObj);
};
const electricType = pokemon.find(p => p.type === "electric"); 
game.catchPokemon(electricType);

//Excercise 11
game.catchPokemon = function (pokemonObj) {
    this.party.push(pokemonObj);


const ballItem = this.items.find(i => i.name.includes("ball"));
    if(ballItem){
        ballItem.quantity = ballItem.quantity - 1;
    };
    console.log(ballItem.quantity);
}

//Excercise 12

for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].difficulty < 6) {
        game.gyms[i].completed = true;
    }
}

//Excercise 13

game.gymstatus = function() {
    const gymTally ={ completed: 0, incomplete: 0};

    this.gyms.forEach(gym => {
        if(gym.completes){
            gymTally.completed++;
        } 
        else{gymTally.incomplete++;

        }
    });

    console.log(gymTally);
}

//Excercise 14

game.partyCount = function() {
    return this.party.length;
};

console.log(game.partyCount())


//Excercise 15

for(let gym of game.gyms){
    if (gym.difficulty <8){
        gym.completed = true
    }
}

//Excercie 16

console.log(game)