const champsRecherche = document.getElementById('champs_recherche');

let allPokemon = [];
let tableauFin = [];


function fetchPokemonBase() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(reponse => reponse.json())
    .then((allPoke) => {
        // console.log(allPoke);
        allPoke.results.forEach((pokemon) => {
            fetchPokemonComplet(pokemon);
        })

    })
}

fetchPokemonBase();

function fetchPokemonComplet(pokemon) {
    let objPokemonFull = {};
    let url = pokemon.url;
    let nameP = pokemon.name;

    fetch(url)
    .then(reponse => reponse.json())
    .then((pokeDate) => {
        objPokemonFull.pic =  pokeDate.sprites.front_default;
        objPokemonFull.type = pokeDate.types[0].type.name;

        // console.log(pokeDate);
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${nameP}`)
        .then(reponse => reponse.json())
        .then((pokeData) => {
                // console.log(pokeData);
                objPokemonFull.name = pokeData.names[4].name;
                allPokemon.push(objPokemonFull);

                if(allPokemon.length === 151){
                    console.log(allPokemon);
                }
        })
    })
}










champsRecherche.addEventListener('input', (e) => {
    
    if (e.target.value != "") {
        e.target.parentNode.classList.add("active_input");     
    } else if(e.target.value === ""){
        e.target.parentNode.classList.remove("active_input");     
    }
})




