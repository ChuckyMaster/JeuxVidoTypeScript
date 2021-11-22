import "..//scss/style.scss";

//SELECTORS

//WEB COMPONENT

//TYPE jeux video
type jeuxVideo = {
  nom: string;
  genre: string;
  editeur: string;
  pegi: number;
  anneeSortie: number;
  multijoueur: boolean;
  enligne: boolean;
  image: URL;
};

//ARRAY // objet

let listJeux: jeuxVideo[] = [
  {
    nom: "Mortal kombat",
    genre: "combat",
    editeur: "je sais pas la honte",
    pegi: 12,
    anneeSortie: 1895,
    multijoueur: true,
    enligne: true,
    image: new URL(
      "https://upload.wikimedia.org/wikipedia/fr/thumb/e/e4/Mortal_Kombat_II_Logo.svg/1200px-Mortal_Kombat_II_Logo.svg.png"
    ),
  },
];

let game1: jeuxVideo = {
  nom: "Mortal kombat",
  genre: "combat",
  editeur: "je sais pas la honte",
  pegi: 12,
  anneeSortie: 1895,
  multijoueur: true,
  enligne: true,
  image: new URL(
    "https://upload.wikimedia.org/wikipedia/fr/thumb/e/e4/Mortal_Kombat_II_Logo.svg/1200px-Mortal_Kombat_II_Logo.svg.png"
  ),
};

//FUNCTION

function display(list: jeuxVideo) {
  let affichJeux: HTMLElement = document.querySelector("#listJeux");
  let ul: HTMLElement = document.createElement("ul");
  affichJeux.appendChild(ul);
  for (const property in list) {
    if (property != "image") {
      let li: HTMLElement = document.createElement("li");
      ul.appendChild(li);

      li.innerHTML += `${property} : ${list[property]}`;
    }
  }
}

display(game1);
