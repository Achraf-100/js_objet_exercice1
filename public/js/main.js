// // Exo1

// // Perso1

// let perso1 = {
//     nom : 'Maanaoui',
//     prenom : 'Achraf',
//     age : '22 ans',
//     taille : '1m81'
// }
// console.log(perso1);

// // Exo2

// // Perso2

// let perso2 = {
//         nom : 'Roronoa',
//         prenom : 'Zoro',
//         age : '21 ans',
//         taille : '1m82'
//     }

// console.log(perso2);

// // Perso3

// let perso3 = {
//     nom : perso1.nom,
//     prenom : perso1.prenom,
//     age : perso1.age,
//     taille : perso1.taille
//     }
    
// console.log(perso3);

// // Exo4

// // Perso4

// let perso4 = {
//     nom : 'Vinsmoke',
//     prenom : 'Sanji',

//     saluer (){
//         console.log(`Salut ${perso2.prenom} , moi c'est ${this.prenom} , comment tu vas ?`);
//     }
    
// }
// perso4.saluer();
// console.log(perso4);

// // Exo5

// // perso5

// let perso5 = {
//     nom : 'Portgas D',
//     prenom : 'Ace',

//     presentation (){
//         console.log(`Salut, moi c'est ${this.nom} ${this.prenom}`);
//     }
    
// }
// perso5.presentation();
// console.log(perso5);

// // Exo6

// // perso6

// let perso6 = {
//     nom : 'Law',

//     changer (){
//         let question = prompt('Voulez vous changer d age ? (oui ou non) ');
//         if (question == 'oui') {
//             let question2 = prompt('Tres bien donner moi votre age')
//             alert(`${this.nom} a ${question2}`)
//         } else {
//             alert('okay bha casse toi mec');
//         }
//     }
// }

// perso6.changer();
// console.log(perso6);

// Exo7

// perso7,8,9

// let perso7 = {
//     nom:'Barbe Blanche',
//     age:'72 ans'
// }
// let perso8 = {
//     nom:'Marco',
//     age:'45 ans'
// }
// let perso9 = {
//     nom:'Vista',
//     age:'43 ans'
// }
// let voleur = {
//     usurpation (perso7) {
//         this.nom = perso7.nom,
//         this.age = perso7.age
//     }
// }

// voleur.usurpation(perso7);
// console.log(voleur);

// Exo8

// perso10,11

let francois = {
    nom : 'francois',
    panier: ['pain'],
    derober(a){
        for (let i = 0; i < 2; i++) {
            let product = prompt(`Que voulez vous dérober ? \n ${sergio.panier}`)   
            this.panier.push(product);
            a.panier = a.panier.filter( (el) => {
                return el != product
            })
        }
    }
}

let sergio = {
    nom : 'sergio',
    panier : ["jambon", "ail", "baguette", "kiwi"]
}

francois.derober(sergio)
console.log(francois);
console.log(sergio);
