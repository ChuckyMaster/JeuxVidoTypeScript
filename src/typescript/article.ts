import { game1 } from "./data/objectTest";

export class Article extends HTMLElement {
  constructor() {
    super();

    console.log(game1);

    this.attachShadow({ mode: "open" });

    let affichJeux: HTMLElement = document.querySelector("#listJeux")!;

    let card: HTMLElement = document.createElement("div");
    card.classList.add("card");
    affichJeux.appendChild(card);
    let div: HTMLDivElement = document.createElement("div");
    let img: HTMLDivElement = document.createElement("img");
    affichJeux.appendChild(div);
    div.appendChild(img);
    img.setAttribute("src", `${game1.image}`);
    let ul: HTMLElement = document.createElement("ul");
    affichJeux.appendChild(ul);
    for (const property in game1) {
      if (property != "image") {
        let li: HTMLElement = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML += `${property} : ${(game1 as any)[property]}`;
      }
    }
    this.shadowRoot!.innerHTML = ` <style> 
      
      ul {
        list-style: none; }
        
        
        img {

          width: 200px

        }
        
        .card {
          display: flex;
          border: 1px solid grey;
          align-items: center;
          margin: 1rem;
          padding: 1rem;
        }</style>`;
    card.appendChild(div);
    card.appendChild(ul);
    this.shadowRoot?.appendChild(card);
  }
}
