const champsRecherche = document.getElementById('champs_recherche');

function fetchPokemonBase() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(reponse => reponse.json())
    .then((allPoke) => {
        console.log(allPoke);
    })
}

fetchPokemonBase();












champsRecherche.addEventListener('input', (e) => {
    
    if (e.target.value != "") {
        e.target.parentNode.classList.add("active_input");     
    } else if(e.target.value === ""){
        e.target.parentNode.classList.remove("active_input");     
    }
})




