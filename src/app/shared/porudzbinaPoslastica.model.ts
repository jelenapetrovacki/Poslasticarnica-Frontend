export class PorudzbinaPoslastica {
// iz tabele PORUDZBINA
  public idPorudzbina: number;
  public dostava: boolean;
  public rokIsporuke: Date;
  public iznos: number;

  public idGost: number;
  // iz tabele gost:
  public imeGost: string;
  public przGost: string;
  public adresaGost: string;
  public grad: string;
  public kontaktGost: string;
  public emailGost: string;
  //
  public zaOdmah: boolean;
  public statusPorudzbine: string;
// iz tabele POSLASTICA
  public idPoslastica: number;
  public nazivPoslastice: string;
  public cenaPoslastice: number;
// iz PORUDZBINA_POSLASTICA
  public kolicina: number;
  public idPorPosl: number;

  constructor(
    idPorudzbina: number,
    idPoslastica: number,
    kolicina: number


  ){
    this.idPorudzbina = idPorudzbina;
    this.idPoslastica = idPoslastica;
    this.kolicina = kolicina;

  }
}
