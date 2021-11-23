import { jeuxVideo } from "./objectTest";
import { listJeux } from "../index";

export function loadData(): void {
  let objectGame: jeuxVideo = {
    nom: (document.querySelector("input[name=nom]") as HTMLInputElement).value,
    genre: (document.querySelector("input[name=genre]") as HTMLInputElement)
      .value,
    editeur: (document.querySelector("input[name=editeur]") as HTMLInputElement)
      .value,
    pegi: (document.querySelector("input[name=pegi]") as HTMLInputElement)
      .value,
    anneeSortie: (
      document.querySelector("input[name=annee]") as HTMLInputElement
    ).value,
    multijoueur: (
      document.querySelector("input[name=en ligne]") as HTMLInputElement
    ).value,
    enligne: (document.querySelector("input[name=pegi]") as HTMLInputElement)
      .value,
    image: (document.querySelector("input[name=image]") as HTMLInputElement)
      .value,
  };

  listJeux.push(objectGame);
}
