export class Gost{
  public idGost: number;
  public imeGost: string;
  public przGost: string;
  public adresaGost: string;
  public grad: string;
  public kontaktGost: string;
  public emailGost: string;
  public passwordGost: string;

  constructor(

     imeGost: string,
     przGost: string,
     adresaGost: string,
     grad: string,
     kontaktGost: string,
     emailGost: string,
     passwordGost: string


  ){

    this.imeGost = imeGost;
    this.przGost = przGost;
    this.adresaGost = adresaGost;
    this.grad = grad;
    this.kontaktGost = kontaktGost;
    this.emailGost = emailGost;
    this.passwordGost = passwordGost;
  }
}
