// FONCTION D'INITALISATION //

start();


// LIER LES BOUTONS AUX FONCTIONS //

document.getElementById('btn-newgame').onclick = start;
document.getElementById('btn-roll').onclick = rolldice;
document.getElementById('btn-hold').onclick = holdscore;


// AU DEMARRAGE DU JEU - COMPTEURS A ZERO //

function start() {
    currentPlayer = 1;
    document.getElementById('point2').style.display = "none";
    document.getElementById('left').style.backgroundColor = "#D5FDFF";
    score = 0 ;
    roundPlayer1= 0;
    document.getElementById('nb1').textContent = roundPlayer1;
    globalPlayer1= 0;
    document.getElementById('global1').textContent = globalPlayer1;
    roundPlayer2= 0;
    document.getElementById('nb2').textContent = roundPlayer2;
    globalPlayer2= 0;
    document.getElementById('global2').textContent = globalPlayer2;
};


// LANCER LES DES //

function rolldice() {

    // sortir un nombre aléatoire
    let nbRandom = Math.floor(Math.random() * 6) + 1;
    // faire apparaître face du dés correspondante
    document.getElementById("dice").src="./dices/" + nbRandom +".png";

    // si le joueur 1 sort un nombre supérieur à 1 :
    if ((currentPlayer == 1) && (nbRandom > 1)) {
        // cette valeur s'ajoute à son round, qui s'affiche ensuite:
        roundPlayer1 = roundPlayer1 + nbRandom;
        document.getElementById('nb1').textContent = roundPlayer1;
        // définition de l'interface :
        document.getElementById('point2').style.display = "none";
        document.getElementById('left').style.backgroundColor = "#D5FDFF";

    // si le joueur 1 sort 1 :
    } else if ((currentPlayer == 1)&&(nbRandom == 1)) {
        // son score est à zéro, et s'affiche :
        roundPlayer1=0;
        document.getElementById('nb1').textContent = roundPlayer1;
        // le tour change : 
        currentPlayer = currentPlayer +1 ;
        nextround();

    // si le joueur 2 sort un nombre supérieur à 1 :
    } else if ((currentPlayer == 2) && (nbRandom >1)) {
        // cette valeur s'ajoute à son round, qui s'affiche ensuite:
        roundPlayer2 = roundPlayer2 + nbRandom; 
        document.getElementById('nb2').textContent = roundPlayer2;
        // définition de l'interface :
        document.getElementById('point1').style.display = "none"; 
        document.getElementById('right').style.backgroundColor = "#D5FDFF";
    
    // si le joueur 2 sort 1 :
    } else if ((currentPlayer ==2) && (nbRandom === 1 )) {
        // son score est à zéro, et s'affiche :
        roundPlayer2 = 0;
        document.getElementById('nb2').textContent = roundPlayer2;
        // le tour change : 
        currentPlayer = currentPlayer - 1 ;
        nextround();
    }
}


// GARDER LE SCORE EN CLIQUANT SUR HOLD

function holdscore () {

    // si le joueur 1 a un score inférieur à 100 :
    if ((currentPlayer == 1) && (globalPlayer1 + roundPlayer1 < 100)) {
        // il garde le score courant qui s'ajoute à son score total, et cela s'affiche :
        globalPlayer1 = globalPlayer1 + roundPlayer1;
        document.getElementById('global1').textContent = globalPlayer1;
        // le compteur du score courant est remis à zéro :  
        roundPlayer1 = 0 ;
        document.getElementById('nb1').textContent = roundPlayer1;
        // le tour change
        currentPlayer = currentPlayer + 1 ; 
        nextround();

    // si le joueur 1  a un score total supérieur ou égal à 100 :
    } else if ((currentPlayer == 1) && (globalPlayer1 + roundPlayer1 >= 100)) {
        // il a gagné la partie et un message s'affiche :
        currentPlayer = 1 ; 
        alert("Le jeu est terminé, joueur 1 a gagné");
        start();

    // si le joueur 2 a un score inférieur à 100 :
    } else if ((currentPlayer == 2) && (globalPlayer2 + roundPlayer2 < 100)){
        // il garde le score courant qui s'ajoute à son score total, et cela s'affiche :
        globalPlayer2 = globalPlayer2 + roundPlayer2 ;
        document.getElementById('global2').textContent = globalPlayer2;
        // le compteur du score courant est remis à zéro :  
        roundPlayer2 = 0;
        document.getElementById('nb2').textContent = roundPlayer2;
        // le tour change : 
        currentPlayer = currentPlayer - 1 ;
        nextround();

    // si le joueur 2  a un score total supérieur ou égal à 100 :
    } else if ((currentPlayer == 2) && (globalPlayer2 + roundPlayer2 >= 100)) {
        // il a gagné la partie et un message s'affiche :
        currentPlayer = 2 ; 
        alert("Le jeu est terminé, le joueur 2 a gagné");
        start();
    }
}

// CHANGEMENT DE JOUEUR //

function nextround(){

    // si tour au joueur 1 : 
    if (currentPlayer==1) {
        // définition de l'interface : 
        document.getElementById('point2').style.display = "none"; 
        document.getElementById('left').style.backgroundColor = "#D5FDFF";
        document.getElementById('right').style.backgroundColor = "white";
        // et compteur round à zéro qui s'affiche : 
        roundPlayer1 = 0;
        document.getElementById('nb1').textContent= roundPlayer1;

    // si tour au joueur 2 : 
    } else if (currentPlayer == 2) {
        // définition de l'interface : 
        document.getElementById('point1').style.display = "none"; 
        document.getElementById('right').style.backgroundColor = "#D5FDFF";
        document.getElementById('left').style.backgroundColor = "white";
        // et compteur round à zéro qui s'affiche : 
        roundPlayer2 = 0;
        document.getElementById('nb2').textContent= roundPlayer2;
  }
}