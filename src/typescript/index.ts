import "..//scss/style.scss";
import { Article } from "./article";
import { jeuxVideo } from "./data/objectTest";
import { loadData } from "./data/loadData";
customElements.define("article-app", Article);

//SELECTORS
let form: HTMLFormElement = document.querySelector("form")!;
//WEB COMPONENTs

//ARRAY // objet

export let listJeux: jeuxVideo[] = [
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

export let game1: jeuxVideo = {
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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loadData();
  form.reset();
});
