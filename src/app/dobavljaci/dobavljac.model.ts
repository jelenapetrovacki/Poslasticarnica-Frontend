export class Dobavljac{

  public idDobavljac: number;
  public nazivDobavljaca: string;
  public kontaktDobavljaca: string;

  constructor(
    nazivDobavljaca: string,
    kontaktDobavljaca: string

  ){
    this.nazivDobavljaca = nazivDobavljaca;
    this.kontaktDobavljaca = kontaktDobavljaca;
  }
}
