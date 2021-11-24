import { jeuxVideo } from "../classes";

// export type jeuxVideo = {
//   nom: string;
//   genre: string;
//   editeur: string;
//   pegi: number;
//   anneeSortie: number;
//   multijoueur: boolean;
//   enligne: boolean;
//   image: URL;
// };

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
