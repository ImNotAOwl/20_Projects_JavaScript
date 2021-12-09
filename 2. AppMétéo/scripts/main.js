const CLEAPI = '1e3cf9a7765889c14606311460599dec';

const temps = document.querySelector(".temps");
const temperature = document.querySelector(".temperature");
const localisation = document.querySelector(".localisation");

let resultatsAPI;

let jourHeure = document.querySelectorAll(".heure");
let jourTempe = document.querySelectorAll(".tempe");

let jourSemainePro = document.querySelectorAll(".jour");
let tempeSemainePro = document.querySelectorAll(".temp_semaine_pro");

const imageInfo = document.querySelector("img");

// console.log(jourHeure, jourTempe, jourSemainePro, tempeSemainePro);

// console.log(`${new Date(1639134000*1000).toLocaleDateString("fr-FR", {weekday: 'short'})}h`);

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {

        // console.log(position);
        let longitude = position.coords.longitude;
        let latitude = position.coords.latitude;
        AppelAPI(longitude, latitude);

    }, () => {
        alert(`Vous avez refusé la géolocalisation, l'application ne peut pas fonctionner, veuillez l'activer...`)
    })
}

function AppelAPI(long, lat) {

    // fetch() permet de faire une requete HTTP vers l'API 
    // fetch() est une promesse
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${CLEAPI}`)
        .then((reponse) => {
            return reponse.json();
        })
        .then((data) => {
            console.log(data);
            resultatsAPI = data;

            temps.innerText = resultatsAPI.current.weather[0].description;
            temperature.innerText = `${Math.trunc(resultatsAPI.current.temp)}°`;
            localisation.innerText = resultatsAPI.timezone;

            let heureAPI = resultatsAPI.hourly;
            let jourAPI = resultatsAPI.daily;
            let j = 0;

            // On affiche les températures toutes les 3h. //

            jourHeure.forEach((elem, key) => {
                let heureJournee = new Date(heureAPI[j].dt*1000).getUTCHours();
                
                elem.innerText = `${heureJournee}h`;
                jourTempe[key].innerText = `${Math.trunc(heureAPI[j].temp)}°`;

                j += 3;
            });

            // On affiche les prévisions pour la semaine prochaine //

            jourSemainePro.forEach((elem, key) => {
                let jourSemaine = new Date(jourAPI[key+1].dt*1000).toLocaleDateString("fr-FR", {weekday: 'short'});

                elem.innerText = jourSemaine;
                tempeSemainePro[key].innerText = `${Math.trunc(jourAPI[key+1].temp.day)}°`;
            });

            let nomSVG = resultatsAPI.current.weather[0].icon.charAt(2);

            if (nomSVG == "n") {
                imageInfo.src = `./ressources/nuit/${resultatsAPI.current.weather[0].icon}.svg`
            } else {
                imageInfo.src = `./ressources/jour/${resultatsAPI.current.weather[0].icon}.svg`
            }
        })
}