//ARRAY//

const GameCollection = [

    {
        name: "Minecraft",
        devStudio: "Mojang Studio",
        releaseYear: "2011",
        picture: "./minecraft.png",
        cote: "Metacritic: 93/100",
        nombreVente: "Vendu à plus de 200 millions d'exemplaires",
        genre: ["sandbox", "survie"],
    },

    {
        name: "Rust",
        devStudio: "Facepunch Studios",
        releaseYear: "2013",
        picture: "./rust.jpg",
        cote: "metacritic: 83/100",
        nombreVente: "Vendu à plus de 10 millions d'exemplaires",
        genre: ["action", "aventure", "survie"],

    },
    {
        name: "Ark",
        devStudio: "Studio Wildcard",
        releaseYear: "2017",
        picture: "./ARK.jpg",
        cote: "metacritic: 70/100",
        nombreVente: "Vendu à plus de 20 millions d'exemplaires",
        genre: ["action", "aventure", "survie"],
    },
    {

        name: "The forest",
        devStudio: "Endnight Games",
        releaseYear: "2018",
        picture: "./forest.jpg",
        cote: "metacritic: 86/100",
        nombreVente: "Vendu à plus de 5 millions d'exemplaires",
        genre: ["horreur", "survie"],
    },
    {
        name: "DayZ",
        devStudio: " Bohemia Interactive",
        releaseYear: "2013",
        picture: "./dayz.jpg",
        cote: "metacritic: 61/100",
        nombreVente: "Vendu à plus de 4 millions d'exemplaires",
        genre: ["action", "survie"],
    },
    {
        name: "Don't Starve",
        devStudio: "Klei Entertainment",
        releaseYear: "2013",
        picture: "./dontstarve.jpg",
        cote: "metacritic: 89/100",
        nombreVente: "Vendu à plus de 5 millions d'exemplaires",
        genre: ["action", "aventure", "survie"],
    },
    {
        name: "7Days to Die",
        devStudio: "The Fun Pimps",
        releaseYear: "2013",
        picture: "./7days.png",
        cote: "metacritic: 60/100",
        nombreVente: "Vendu à plus de 4 millions d'exemplaires",
        genre: ["action", "horreur", "survie"],
    },
    {
        name: "Subnautica",
        devStudio: "Unknown Worlds Entertainment",
        releaseYear: "2018",
        picture: "./subnautica.png",
        cote: "metacritic: 87/100",
        nombreVente: "Vendu à plus de 5 millions d'exemplaires",
        genre: ["aventure","survie"],
    },
    {
        name: "H1Z1",
        devStudio: "Daybreak Game Company",
        releaseYear: "2015",
        picture: "./h1z1.jpg",
        cote: "metacritic: 70/100",
        nombreVente: "Vendu à plus de 10 millions d'exemplaires",
        genre: ["action", "survie"],
    },
    {
        name: "Conan Exiles",
        devStudio: "Funcom",
        releaseYear: "2018",
        picture: "./conanexiles.jpg",
        cote: "metacritic: 68/100",
        nombreVente: "Vendu à plus de 3 millions d'exemplaires",
        genre: ["action", "aventure", "survie"],
    },

];

//BOUCLE , CREATEELEMENT et APPENDCHILD//

GameCollection.forEach((game) => {

    const maincard = document.querySelector('body');

    let sectCard = document.createElement('section');

    let cardDiv = document.createElement('div');
    cardDiv.setAttribute("class", "card");

    //Header div//
    let headerDiv = document.createElement('div');


    let imageGame = document.createElement('img');
    imageGame.setAttribute('src', game.picture);

    let titleGame = document.createElement('p');
    let ntitleGame = document.createTextNode(game.name);

    let authorGame = document.createElement('p');
    let studioGame = document.createTextNode(game.devStudio);

    //Content Div//
    let contentDiv = document.createElement('div');

    let textDescriptionGame = document.createElement('p');
    let releaseYearGame = document.createTextNode(game.releaseYear);

    let ratingscoreGame = document.createElement('p');
    let scoreGame = document.createTextNode(game.cote);

    let salesGames = document.createElement('p');
    let nombreSalesGame = document.createTextNode(game.nombreVente);

    let genreGame = document.createElement('p');
    let genreCategoryGame = document.createTextNode(game.genre);


    maincard.appendChild(sectCard);
    sectCard.appendChild(cardDiv);
    cardDiv.appendChild(headerDiv);
    //Header div//
    headerDiv.appendChild(imageGame);
    headerDiv.appendChild(titleGame);
    titleGame.appendChild(ntitleGame);
    headerDiv.appendChild(authorGame);
    authorGame.appendChild(studioGame);
    cardDiv.appendChild(contentDiv);
    //Content Div//
    contentDiv.appendChild(genreGame);
    genreGame.appendChild(genreCategoryGame);
    contentDiv.appendChild(textDescriptionGame);
    textDescriptionGame.appendChild(releaseYearGame);
    contentDiv.appendChild(ratingscoreGame);
    ratingscoreGame.appendChild(scoreGame);
    contentDiv.appendChild(salesGames);
    salesGames.appendChild(nombreSalesGame);


    //STYLE//
    //MAINCARD//
    maincard.style.display = "flex";
    maincard.style.flexWrap = "wrap";
    maincard.style.justifyContent = "space-around";
    maincard.style.gap = "25px";

    //SECTCARD//
    sectCard.style.alignContent = "center";
    sectCard.style.textAlign = "center";
    sectCard.style.marginBottom = "40px";

    //CARDDIV//
    cardDiv.style.boxShadow = "10px 10px 5px 0 rgba(0, 0, 0, 0.5)";
    cardDiv.style.alignItems = "center";
    cardDiv.style.backgroundColor = "#3A435E";
    cardDiv.style.borderRadius = "10px";
    cardDiv.style.overflow = "hidden";
    cardDiv.style.alignItems = "center";

    //HEADERDIV//
    imageGame.style.width = "320px";
    imageGame.style.height = "450px";
    imageGame.style.padding = "20px 20px 10px 20px";
    imageGame.style.borderRadius = "25px";
    imageGame.style.objectFit = "cover";

    //TITLEGAME//
    titleGame.style.fontSize = "50px";
    titleGame.style.fontWeight = "700";
    titleGame.style.fontFamily = "VT323, monospace";
    
    //TIME//
    textDescriptionGame.style.fontWeight = "700";
    textDescriptionGame.style.fontSize = "20px";
    textDescriptionGame.style.letterSpacing = "6px";
    
    //AUTHOR//
    authorGame.style.letterSpacing = "3px";
    authorGame.style.fontWeight = "600";
    authorGame.style.fontFamily = "VT323, monospace";
    authorGame.style.fontSize = "25px";
    
    //CONTENTV//
    contentDiv.style.marginBottom= "20px";
    contentDiv.style.textAlign ="center";
    contentDiv.style.fontFamily = "VT323, monospace";
    contentDiv.style.fontSize = "20px";
   

});













