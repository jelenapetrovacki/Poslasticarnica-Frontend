export class Materijal {

  public idMaterijal: number;
  public vrstaMaterijala: string;
  public cenaMaterijala: number;
  public kolicinaMaterijala: number;
  public jedinicaMere: string;
  public idDobavljac: number;
  // tabela DOBAVLJAC
  public nazivDobavljaca: string;

  constructor(
    idMaterijal: number,
    vrstaMaterijala: string,
    cenaMaterijala: number,
    kolicinaMaterijala: number,
    jedinicaMere: string,
    idDobavljac: number
  ){
    this.idMaterijal = idMaterijal;
    this.vrstaMaterijala = vrstaMaterijala;
    this.cenaMaterijala = cenaMaterijala;
    this.kolicinaMaterijala = kolicinaMaterijala;
    this.jedinicaMere = jedinicaMere;
    this.idDobavljac = idDobavljac;
  }
}
