let boxQst = document.querySelectorAll(".box_qst");
let btnEnvoie = document.getElementById("btn_envoyer");
let btnRadio = document.querySelectorAll('input[type="radio"]');

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
    let titreResultat = document.querySelector(".resultat").children[0];

    reponse.forEach((elem, key) => {
        switch (elem) {
            case "napoleon":
                totalCorrect++;
                boxQst[key].classList.remove("correct");
                boxQst[key].classList.toggle("correct");
                break;
            case "juillet":
                totalCorrect++;
                boxQst[key].classList.remove("correct");
                boxQst[key].classList.toggle("correct");
                break;
            case 395:
                totalCorrect++;
                boxQst[key].classList.remove("correct");
                boxQst[key].classList.toggle("correct");
                break;
            case "ljubljana":
                totalCorrect++;
                boxQst[key].classList.remove("correct");
                boxQst[key].classList.toggle("correct");
                break;
            case "4m":
                totalCorrect++;
                boxQst[key].classList.remove("correct");
                boxQst[key].classList.toggle("correct");
                break;
            default:
                boxQst[key].classList.remove("false");
                boxQst[key].classList.toggle("false");
                break;
        };
    });

    switch (totalCorrect) {
        case 0:
            aideAffiche.innerHTML = `Retentez une autre réponse dans la case rouge, puis re-validez !`;
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
            aideAffiche.innerHTML = " ";
            break;
    }

    noteAffiche.innerHTML = `${totalCorrect}/5`;
}

