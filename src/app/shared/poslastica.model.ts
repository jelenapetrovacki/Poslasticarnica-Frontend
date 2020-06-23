export class Poslastica {
  public idPoslastica: number;
  public nazivPoslastice: string;
  public vrstaPoslastice: string;
  public cenaPoslastice: number;
  public kolicinaDostupnih: number;
  public dostupna: number;
  public personalizovana: number;
  public idRadnik: number;
  public slikaURL: string;

  constructor(nazivPoslastice: string, vrstaPoslastice: string, cenaPoslastice: number,
              dostupna: number, personalizovana: number,
              kolicinaDostupnih: number, idRadnik: number, slikaURL: string) {

    this.nazivPoslastice = nazivPoslastice;
    this.vrstaPoslastice = vrstaPoslastice;
    this.cenaPoslastice = cenaPoslastice;
    this.kolicinaDostupnih = kolicinaDostupnih;
    this.dostupna = dostupna;
    this.personalizovana = personalizovana;
    this.idRadnik = idRadnik;
    this.slikaURL = slikaURL;

  }
}
