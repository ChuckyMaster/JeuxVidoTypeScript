import { jeuxVideo } from "../classes";
import { listJeux } from "../index";
import { createArticle } from "../index";

let form: HTMLFormElement = document.querySelector("form")!;

export function loadData(): void {
  let objectGame = new jeuxVideo(
    (document.querySelector("input[name=nom]") as HTMLInputElement).value,
    (document.querySelector("input[name=genre]") as HTMLInputElement).value,
    (document.querySelector("input[name=editeur]") as HTMLInputElement).value,
    (
      document.querySelector("input[name=pegi]") as HTMLInputElement
    ).valueAsNumber,
    (
      document.querySelector("input[name=annee]") as HTMLInputElement
    ).valueAsNumber,
    (
      document.querySelector("input[name=multijoueur]") as HTMLInputElement
    ).checked,
    (
      document.querySelector("input[name=en ligne]") as HTMLInputElement
    ).checked,
    new URL(
      (document.querySelector("input[name=image]") as HTMLInputElement).value
    )
  );

  listJeux.push(objectGame);
  form.reset();
  createArticle(objectGame);
}

// document.querySelector<HTMLInputElement>("input[name=pegi]")
