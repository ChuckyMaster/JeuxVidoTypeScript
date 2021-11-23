import { jeuxVideo } from "./objectTest";
import { listJeux } from "../index";

export function loadData(): void {
  let objectGame = new jeuxVideo(
    (document.querySelector("input[name=nom]") as HTMLInputElement).value,
    (document.querySelector("input[name=genre]") as HTMLInputElement).value,
    (document.querySelector("input[name=editeur]") as HTMLInputElement).value,
    (document.querySelector("input[name=pegi]") as HTMLInputElement).value,
    (document.querySelector("input[name=annee]") as HTMLInputElement).value,
    (
      document.querySelector("input[name=multijoueur]") as HTMLInputElement
    ).value,
    (document.querySelector("input[name=en ligne]") as HTMLInputElement).value,
    (document.querySelector("input[name=image]") as HTMLInputElement).value
  );

  listJeux.push(objectGame);
}

// document.querySelector<HTMLInputElement>("input[name=pegi]")
