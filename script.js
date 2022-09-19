// Initialisation
newGame();

function rollDice() {
  rnd = getRandom(); // Aléatoire entre 1-6
  rollImg(rnd); // Affiche l'image correspondante au dé sélectionné

  // Gestion du score du dé
  if (rnd === 1) {
    // Dé 1: Change de joueur et enlève score actuel
    changePlayer();
    p1ScoreCurrent = 0;
    p2ScoreCurrent = 0;
    document.getElementById("p1current").innerHTML = p1ScoreCurrent;
    document.getElementById("p2current").innerHTML = p2ScoreCurrent;
  } else {
    // Dé 2-6: Score du dé ajouté au score actuel
    switch (currentPlayer) {
      case 1:
        p1ScoreCurrent += rnd;
        document.getElementById("p1current").innerHTML = p1ScoreCurrent;
        break;
      case 2:
        p2ScoreCurrent += rnd;
        document.getElementById("p2current").innerHTML = p2ScoreCurrent;
        break;
    }
  }
}

function getRandom() {
  // Aléatoire entre 1-6
  return Math.floor(Math.random() * 6) + 1;
}

function hold() {
  // Ajout du score actuel au score global
  switch (currentPlayer) {
    case 1:
      p1ScoreGlobal += p1ScoreCurrent;
      p1ScoreCurrent = 0;
      document.getElementById("p1current").innerHTML = "0";
      document.getElementById("p1global").innerHTML = p1ScoreGlobal;
      break;
    case 2:
      p2ScoreGlobal += p2ScoreCurrent;
      p2ScoreCurrent = 0;
      document.getElementById("p2current").innerHTML = "0";
      document.getElementById("p2global").innerHTML = p2ScoreGlobal;
      break;
  }

  if (p1ScoreGlobal >= 10 || p2ScoreGlobal >= 10) {
    switch (currentPlayer) {
      case 1:
        document.getElementById("player1").innerHTML = "<b>Player 1 Winner</b>";
        break;
      case 2:
        document.getElementById("player2").innerHTML = "<b>Player 2 Winner</b>";
        break;
    }
    document.getElementById("roll").disabled = true;
    document.getElementById("hold").disabled = true;
  } else {
    changePlayer(); // Changement de joueur
  }
}

function changePlayer() {
  // Changement de joueur
  var p1 = document.getElementById("player1");
  var p2 = document.getElementById("player2");
  switch (currentPlayer) {
    case 1:
      currentPlayer = 2;
      p1.innerHTML = "Player 1";
      p2.innerHTML = "<b>Player 2</b>";
      break;
    case 2:
      currentPlayer = 1;
      p1.innerHTML = "<b>Player 1</b>";
      p2.innerHTML = "Player 2";
      break;
  }
}

function newGame() {
  // (Ré)Initialisation du jeu
  currentPlayer = 1;
  p1ScoreGlobal = 0;
  p2ScoreGlobal = 0;
  p1ScoreCurrent = 0;
  p2ScoreCurrent = 0;
  rnd = 0;
  document.getElementById("player1").innerHTML = "<b>Player 1</b>";
  document.getElementById("player2").innerHTML = "Player 2";
  document.getElementById("p1current").innerHTML = "0";
  document.getElementById("p1global").innerHTML = "0";
  document.getElementById("p2current").innerHTML = "0";
  document.getElementById("p2global").innerHTML = "0";
  document.getElementById("roll").disabled = false;
  document.getElementById("hold").disabled = false;
  rollImg(rnd);
}

function rollImg() {
  // Affiche l'image correspondante au dé sélectionné
  var rollElement = document.getElementById("rollNumber"); // Emplacement de l'image du dé
  switch (rnd) {
    case 0:
      rollElement.innerHTML =
        '<img src="Images/dEmpty.png" alt="Lancez de dé" width="200" height="200">';
      break;
    case 1:
      rollElement.innerHTML =
        '<img src="Images/d1.png" alt="1" width="200" height="200">';
      break;
    case 2:
      rollElement.innerHTML =
        '<img src="Images/d2.png" alt="2" width="200" height="200">';
      break;
    case 3:
      rollElement.innerHTML =
        '<img src="Images/d3.png" alt="3" width="200" height="200">';
      break;
    case 4:
      rollElement.innerHTML =
        '<img src="Images/d4.png" alt="4" width="200" height="200">';
      break;
    case 5:
      rollElement.innerHTML =
        '<img src="Images/d5.png" alt="5" width="200" height="200">';
      break;
    case 6:
      rollElement.innerHTML =
        '<img src="Images/d6.png" alt="6" width="200" height="200">';
      break;
  }
}
