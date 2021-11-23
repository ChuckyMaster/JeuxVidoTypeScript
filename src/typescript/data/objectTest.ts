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

export class jeuxVideo {
  public nom: string;
  public genre: string;
  public editeur: string;
  public pegi: number | string;
  public anneeSortie: number | string;
  public multijoueur: boolean;
  public enligne: boolean;
  public image: URL;

  constructor(
    nom: string,
    genre: string,
    editeur: string,
    pegi: number,
    anneeSortie: number,
    multijoueur: boolean,
    enligne: boolean,
    image: URL
  ) {
    this.nom = nom;
    this.genre = genre;
    this.editeur = editeur;
    this.pegi = pegi;
    this.anneeSortie = anneeSortie;
    this.multijoueur = multijoueur;
    this.enligne = enligne;
    this.image = image;
  }
}

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
