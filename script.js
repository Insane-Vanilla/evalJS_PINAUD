
// DECLARER LES JOUEURS //

let player1 = new Player('player1score', true);

let player2 = new Player('player2Score', false);

let playersList = [player1, player2]; 


// LANCER LES DES //


let rolldice = document.getElementById('btn-roll');

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let nbRandom = getRandom(1,6);

document.getElementById('nb1').innerHTML = nbRandom;

rolldice.addEventListener('click', getRandom);



// GARDER LE SCORE POUR LE JOUEUR1 //

//let hold = document.getElementById('hold1');
//function totalScore( current1+random1)





// GARDER LE SCORE POUR LE JOUEUR2 //




// SI LE JOUEUR OBTIENT 1, LE TOUR CHANGE //

if (nbRandom ===1) {
    //tour = autre joueur
//}


//LE JEU S'ARRETE DES QUE LE SCORE EST DE 100 //


//if (hold ===100) {
  //  alert ("Le jeu est terminé, joueur (X) a gagné");
 //   hold1 =0;
// hold2=0;
   // current1=0;
   // current2=0;
//}

