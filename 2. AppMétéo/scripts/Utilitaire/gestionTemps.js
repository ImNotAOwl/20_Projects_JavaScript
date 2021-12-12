const jourSemaine = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];

let dateActuelle = new Date ();
let options = { weekday: 'long' };
let jourAjd = dateActuelle.toLocaleDateString("fr-FR", options);
let indexJour = jourSemaine.indexOf(jourAjd);

let jourSemaineOrdonne = [];

// console.log(jourSemaine, jourAjd);
// console.log(jourSemaine.indexOf(jourAjd));

for (let i = indexJour; i < jourSemaine.length; i++) {
    let j = 0;
    jourSemaineOrdonne[j] = jourSemaine[i];
    
    if (i === jourSemaine.length - 1) {
        for (let k = 0; k < indexJour; k++) {
            
            jourSemaineOrdonne.push(jourSemaine[k]);
            
        }
    }
    j++;
}

jourSemaineOrdonne.push(jourSemaineOrdonne[0]);
// console.log(jourSemaineOrdonne);

export default jourSemaineOrdonne;

