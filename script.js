//récupération du fichier JSON
const reponse = await fetch("games.json");
const games = await reponse.json();


function genererGames(games) {

  for (let i = 0; i < games.length; i++) {
    const categories = document.querySelector(".categories");
    const filters = document.querySelector(".filters");

    const article = games[i];
    // Récupération de l'élément du DOM qui accueillera les fiches de jeux
    const divCard = document.querySelector(".card-wrapper");

    // Création d’une balise dédiée à un jeu
    const gameElement = document.createElement("article");
    // Création des balises
    const titleElement = document.createElement("p");
    titleElement.innerText =`Titre: ${article.title}`;
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    const consoleElement = document.createElement("p");
    consoleElement.innerText = `Console: ${article.console}`;
    const anneeElement = document.createElement("p");
    anneeElement.innerText =`Année: ${article.annee}`;
    const genreElement = document.createElement("p");
    genreElement.innerText =`Genre: ${article.genre}`;
    const prixElement = document.createElement("p");
    prixElement.innerText =`Prix: ${article.prix}€`;

    const dispoElement = document.createElement("p");
    let etatDispo = article.dispo;
    if (etatDispo) {
        dispoElement.classList.add("en-stock");
        dispoElement.innerText = "En stock";
      }
    else {
      dispoElement.classList.add("hors-stock");
      dispoElement.innerText = "En rupture de stock";
    };

    //const cardGames = document.querySelector(".card-infos");

    // On rattache la balise article a la section Fiches
    divCard.appendChild(gameElement);
    // On rattache l’image à pieceElement (la balise article)

      gameElement.appendChild(imageElement);
      gameElement.appendChild(titleElement);
      gameElement.appendChild(consoleElement);
      gameElement.appendChild(anneeElement);
      gameElement.appendChild(genreElement);
      gameElement.appendChild(prixElement);
      gameElement.appendChild(dispoElement);

    }
  }
// premier affichage de la page web !
  genererGames(games);



let filterPriceDown = document.querySelector("#filter-price-down");
filterPriceDown.addEventListener("click", function () {
  const gameListDown = Array.from(games)
  gameListDown.sort(function (a, b) {
    return a.prix - b.prix;
  });
  document.querySelector(".card-wrapper").innerHTML = "";
  genererGames(gameListDown);

});

let filterPriceUp = document.querySelector("#filter-price-up");
filterPriceUp.addEventListener("click", function () {
  const gameListUp = Array.from(games)
  gameListUp.sort(function (a, b) {
    return b.prix - a.prix;
  });
  document.querySelector(".card-wrapper").innerHTML = "";
  genererGames(gameListUp);
});

let filterDispo = document.querySelector("#filter-dispo");
filterDispo.addEventListener("click", function () {
  const gamesDispo = games.filter(function (games) {
    return games.dispo != false ;
  });
  document.querySelector(".card-wrapper").innerHTML = "";
  genererGames(gamesDispo);
});


let filterShowAll = document.querySelector("#filter-showall");
filterShowAll.addEventListener("click", function (){
  document.querySelector(".card-wrapper").innerHTML = "";
  genererGames(games);
});


let filterGenesis = document.querySelector("#categories-genesis");
filterGenesis.addEventListener("click", function (){
  const catGenesis = games.filter(function (games) {
    return games.console === "Genesis";
  })
  document.querySelector(".card-wrapper").innerHTML = "";
  genererGames(catGenesis);
});

let filterSuperFamicom = document.querySelector("#categories-superfamicom");
filterSuperFamicom.addEventListener("click", function (){
  const catSuperFamicom = games.filter(function (games) {
    return games.console === "Super Famicom";
  })
  document.querySelector(".card-wrapper").innerHTML = "";
  genererGames(catSuperFamicom);
});

let filterNintendo64 = document.querySelector("#categories-nintendo64");
filterNintendo64.addEventListener("click", function (){
  const catNintendo64 = games.filter(function (games) {
    return games.console === "Nintendo 64";
  })
  document.querySelector(".card-wrapper").innerHTML = "";
  genererGames(catNintendo64);
});

let filterPs1 = document.querySelector("#categories-ps1");
filterPs1.addEventListener("click", function (){
  const catPs1 = games.filter(function (games) {
    return games.console === "PS1";
  })
  document.querySelector(".card-wrapper").innerHTML = "";
  genererGames(catPs1);
});
