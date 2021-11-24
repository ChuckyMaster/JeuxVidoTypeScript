import "..//scss/style.scss";
import { Article } from "./article";
import { jeuxVideo } from "./classes";
import { loadData } from "./data/loadData";
import { Jeux } from "./classes";
// customElements.define("article-app", Article);

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

//FUNCTION

//Display list

// const displayGame = () => {
//   const listNode: HTMLElement[] = listJeux.map(
//     (jeux: jeuxVideo, index: number) => {
//       if (jeux.editMode) {
//         return createEditMode(jeux, index);
//       } else {
//         return createArticle(jeux, index);
//       }
//     }
//   );
// };

//createArticle

export const createArticle = (jeux: jeuxVideo): HTMLElement => {
  const affichJeux: HTMLElement = document.querySelector("#listJeux")!;

  const card: HTMLElement = document.createElement("div");
  card.classList.add("card");
  affichJeux.appendChild(card);
  const div: HTMLDivElement = document.createElement("div");
  const img: HTMLDivElement = document.createElement("img");
  affichJeux.appendChild(div);
  div.appendChild(img);
  img.setAttribute("src", `${jeux.image}`);
  const ul: HTMLElement = document.createElement("ul");
  affichJeux.appendChild(ul);

  const btnedit: HTMLButtonElement = document.createElement("button");
  btnedit.innerHTML = "EDIT";
  const btnSupp: HTMLButtonElement = document.createElement("button");
  btnSupp.innerHTML = "DELETE";

  //  BUTTON DELETE

  btnSupp.addEventListener("click", (event: MouseEvent) => {
    event.stopPropagation();
  });

  //BUTTON EDIT

  btnedit.addEventListener("click", (event: MouseEvent) => {
    event.stopPropagation();
  });

  ul.appendChild(btnedit);
  ul.appendChild(btnSupp);
  for (const property in jeux) {
    if (property != "image") {
      let li: HTMLElement = document.createElement("li");
      ul.appendChild(li);
      li.innerHTML += `${property} : ${(jeux as any)[property]}`;
    }
  }
  return card;
};

//createEdit

// const createEditMode = (jeux: jeuxVideo, index: number): HTMLElement => {};

// mini Function delete / supp / toggle

// const deleteGame = (index: number): void => {
//   listJeux.splice(index, 1);
//   displayGame();
// };

// const addGame = (game: jeuxVideo): void => {
//   listJeux.push(game);
// };

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loadData();
  loadData();
});
