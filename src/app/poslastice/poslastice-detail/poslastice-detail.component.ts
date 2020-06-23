import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PoslasticaService } from '../poslastica.service';
import { Poslastica } from '../../shared/poslastica.model';
import { MaterijalPoslastica } from '../../shared/materijalPoslastica.model';
import { NgForm } from '@angular/forms';
import { Porudzbina } from '../../shared/porudzbina.model';
import { PorudzbinaPoslastica } from '../../shared/porudzbinaPoslastica.model';
import { PorudzbinaService } from '../porudzbina.service';
import { getLocaleDateFormat } from '@angular/common';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-poslastice-detail',
  templateUrl: './poslastice-detail.component.html',
  styleUrls: ['./poslastice-detail.component.css']
})
export class PoslasticeDetailComponent implements OnInit, OnDestroy {


  @ViewChild('f', { static: false }) kolicinaForm: NgForm;

  poslastica: Poslastica;
  id: number;
  porudzbina: Porudzbina;
  idPor: number = null;
  stavka: PorudzbinaPoslastica;
  ulogovan: number;
  subscription: Subscription;
  poslastice: Poslastica[];
  stavke: PorudzbinaPoslastica[];

  constructor(private poslasticaService: PoslasticaService,
              private porudzbinaService: PorudzbinaService,
              private slService: ShoppingListService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.authService.ulogovanJe.subscribe((a: number) => { this.ulogovan = a; });
    this.route.params
    .subscribe(
      (params: Params) => {
        // tslint:disable-next-line:no-string-literal
        this.id = +params['id'];
        this.poslasticaService.getPoslasticaById(this.id).subscribe(poslastica => {
          this.poslastica = poslastica[0];

          console.log('ulogovan ' + this.ulogovan);
        });
      }
    );

  }
  onEditPoslasica(){
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
  onDeletePoslastica(){
    this.poslasticaService.deletePoslMat(this.id).subscribe(a => {console.log(a); } );
    this.poslasticaService.deletePoslastica(this.poslastica.idPoslastica).subscribe(
      a => { this.poslasticaService.poslasticaChanged.next();
    });
    this.poslasticaService.getPoslastice().subscribe(
      (poslastice: Poslastica[]) => {
        this.poslastice = poslastice;
      }
    );
    this.poslasticaService.poslasticaChanged.next(this.poslastice);
    this.router.navigate(['/poslastice']);
  }
  dodajUKorpu(kolForm: NgForm){
    if (this.idPor === null) {
      this.porudzbina = new Porudzbina(0, '2020-02-02' , 0, 1, 1, 0, 'kreirana');
      this.porudzbinaService.addPorudzbina(this.porudzbina).subscribe(por => {
        this.idPor = por[0].idPorudzbina;
        this.slService.idNovePorudzbine.next(this.idPor);
        console.log('prosledjen id ' + por[0]);
        const form = kolForm.value;
        this.slService.addStavka(new PorudzbinaPoslastica(this.idPor, this.id, form.kolicina ));


        console.log('dodato id ' + this.idPor);

      });
      this.slService.getStavkaById(this.idPor).subscribe(
        (stavke: PorudzbinaPoslastica[]) => {
          this.stavke = stavke;
        }
      );

      this.slService.stavkaChanged.next(this.stavke);
    }
    else {
      const form = kolForm.value;
      this.slService.addStavka(new PorudzbinaPoslastica(this.idPor, this.id, form.kolicina ));
      console.log('id else ' + this.idPor);
      this.slService.getStavkaById(this.idPor).subscribe(
        (stavke: PorudzbinaPoslastica[]) => {
          this.stavke = stavke;
        }
      );

      this.slService.stavkaChanged.next(this.stavke);
    }


  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
