export class MaterijalPoslastica {

  public idMatPosl: number;
  public idMaterijal: number;
  public idPoslastica: number;
  public potrebnaKolicina: number;
  public deoPoslastice: string;
  public dozvoljenaIzmena: boolean;
  // tabela MATERIJAL
  public vrstaMaterijala: string;
  public jedinicaMere: string;
  // tabela POSLASTICA
  public nazivPoslastice: string;
  public cenaPoslastice: number;
  public slikaURL: string;

  constructor(
     idMatPosl: number,
     idMaterijal: number,
     idPoslastica: number,
     potrebnaKolicina: number,
     deoPoslastice: string,
     dozvoljenaIzmena: boolean,
  ){
    this.idMatPosl = idMatPosl;
    this.idMaterijal = idMaterijal;
    this.idPoslastica = idPoslastica;
    this.potrebnaKolicina = potrebnaKolicina;
    this.deoPoslastice = deoPoslastice;
    this.dozvoljenaIzmena = dozvoljenaIzmena;
  }
}
