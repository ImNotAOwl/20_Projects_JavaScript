let boxQst = document.querySelectorAll(".box_qst");
let btnEnvoie = document.getElementById("btn_envoyer");
let btnRadio = document.querySelectorAll('input[type="radio"]');

let divResultat = document.querySelector(".resultat");

let listeResultat = ['napoleon', 'juillet', '395', 'ljubljana', '4m'];

let noteAffiche = document.getElementById("note");
let aideAffiche = document.getElementById("aide");

btnEnvoie.addEventListener('click', verif);

let reponse = [];
let i = 0;

btnRadio.forEach((elem, key) => {
    if (elem.checked === true) {
        reponse[i] = elem.value;
        i++;
    }
})

boxQst.forEach((elem, key) => {
    elem.addEventListener("change", function (e) {
        let item = e.target.value;

        reponse[key] = item;
        boxQst[key].classList.remove("correct");
        boxQst[key].classList.remove("false");
    })
})

function verif() {
    let totalCorrect = 0;

    reponse.forEach((elem, i) => {
        if (elem === listeResultat[i]) {
            totalCorrect++;
            boxQst[i].classList.remove("correct");
            boxQst[i].classList.add("correct");

        } else {
            boxQst[i].classList.remove("false");
            boxQst[i].classList.add("false");
        }
    });
    
    afficheResultat(totalCorrect);
    supprClassList ();
}


function afficheResultat (nbBonneReponse) {
    let titreResultat = document.querySelector(".resultat").children[0];

    switch (nbBonneReponse) {
        case 0:
            aideAffiche.innerHTML = "Retentez une autre réponse dans la case rouge, puis re-validez !";
            titreResultat.innerHTML = "👎 Peux mieux faire ! 👎";
            break;
        case 1:
            aideAffiche.innerHTML = "Retentez une autre réponse dans la case rouge, puis re-validez !";
            titreResultat.innerHTML = "😭 Peux mieux faire ! 😭";
            break;
        case 2:
            aideAffiche.innerHTML = "Retentez une autre réponse dans la case rouge, puis re-validez !";
            titreResultat.innerHTML = "👀 Il reste quelques erreurs. 😭";
            break;
        case 3:
            aideAffiche.innerHTML = "Retentez une autre réponse dans la case rouge, puis re-validez !";
            titreResultat.innerHTML = "✨ Encore un effort ... 👀";
            break;
        case 4:
            aideAffiche.innerHTML = "Retentez une autre réponse dans la case rouge, puis re-validez !";
            titreResultat.innerHTML = "✨ Vous y êtes presque ! ✨";
            break;
        default:
            titreResultat.innerHTML = "✔️ Bravo, c'est un sans faute ! ✔️";
            
            boxQst.forEach((elem) => {
                elem.classList.toggle("tout_juste");
            })

            divResultat.classList.toggle("tout_juste");

            aideAffiche.innerHTML = "";
            break;
    }
    noteAffiche.innerHTML = `${nbBonneReponse}/5`;
}

function supprClassList () {
    divResultat.addEventListener("animationend", function () {
        divResultat.classList.remove("tout_juste");

        boxQst.forEach((elem) => {
            elem.classList.remove("tout_juste");
        })
    })
}
