
// CONSTRUIRE LES JOUEURS //

class Player {
    constructor (id, roundScore, globalScore, turn) {
    this.id = id;
    this.roundScore = 0;
    this.globalScore = 0;
    this.turn = turn; 
}
}

let player1 = new Player('1', roundScore1, globalScore1, false);

let player2 = new Player('2', roundScore2, globalScore2, false);

let playersList = [player1, player2]; 


// FAIRE JOUER LES JOUEURS UN PAR UN //

let currentPlayer;

let firstTurn = 0;

for (let i=0 ; i <= playersList.length ; i++)

let leftBackground = document.querySelector('#left');
let rightBackground = document.querySelector('#right');

if (playersList[0]) {
    leftBackground.backgroundColor = rgb(211, 211, 211);
}

if (playerList[1]) {
    rightBackground.backgroundColor = rgb(211, 211, 211);
}



// LANCER LES DES //



function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


document.getElementById('nb1').innerHTML = nbRandom;

rolldice.addEventListener('click', getRandom);


function play() {

    if (firstTurn === 0) {
        player = player1;
        player.turn = true
    }

   if (currentPlayer.turn == true) {
    let rolldice = document.getElementById('btn-roll');
    document.getElementById('nb1').innerHTML = nbRandom;
    rolldice.addEventListener('click', getRandom);
    currentPlayer.currentScore += nbRandom;
   }

    // SI UN JOUEUR OBTIENT 1, LE TOUR CHANGE //

    if (nbRandom ===1) {
        currentPlayer.turn = false;

        if (currentPlayer.id = player1.id) {
            currentPlayer = player2;
            firstTurn++;
        } else {currentPlayer = player1;
                firstTurn++}
    } 

    //LE JEU S'ARRETE DES QUE LE SCORE EST DE 100 //
    if (globalScore1===100) {
    alert ("Le jeu est terminé, joueur 1 a gagné");
    }
    if (globalScore2===100) {
    alert ("Le jeu est terminé, joueur 2 a gagné");
    }

}
  


// GARDER LE SCORE POUR LE JOUEUR1 ET DONNER LE TOUR AU JOUEUR2 //

let round = document.getElementById('hold1');

function globalScore( currentScore + nbRandom);





// GARDER LE SCORE POUR LE JOUEUR2 ET DONNER LE TOUR AU JOUEUR1//









// RECOMMENCER LE JEU

let newGame = document.querySelector('#newgame');

newGame.addEventListener('click', resetGame);

function resetGame() {
    firstTurn = 0;
    player1= new Player ("globalScore1", false);
    player2= new Player ("globalScore2", false);
    play();
};
