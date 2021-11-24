export class jeuxVideo {
  public nom: string;
  public genre: string;
  public editeur: string;
  public pegi: number;
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

export interface Jeux {
  name: string;
  genre: string;
  editeur: string;
  pegi: number;
  anneeSortie: number;
  multijoueur: boolean;
  enligne: boolean;
  image: URL;
  editMode: boolean;
}
