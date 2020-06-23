import { Gost } from './gost.model';

export class Porudzbina{

  public idPorudzbina: number;
  public dostava: number;
  public rokIsporuke: string;
  public iznos: number;
  public idRacun: number;
  public idGost: number;
  // iz tabele gost:
  public imeGost: string;
  public przGost: string;
  public adresaGost: string;
  public grad: string;
  public kontaktGost: string;
  public emailGost: string;
  //
  public zaOdmah: number;
  public statusPorudzbine: string;

  constructor(
     dostava: number,
     rokIsporuke: string,
     iznos: number,
     idRacun: number,
     idGost: number,
     zaOdmah: number,
     statusPorudzbine: string


  ){

    this.dostava = dostava;
    this.rokIsporuke = rokIsporuke;
    this.iznos = iznos;
    this.idRacun = idRacun;
    this.idGost = idGost;
    this.zaOdmah = zaOdmah;
    this.statusPorudzbine = statusPorudzbine;

  }

}
