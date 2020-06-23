import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PoslasticaService } from '../poslastica.service';
import { Poslastica } from '../../shared/poslastica.model';


@Component({
  selector: 'app-poslastica-edit',
  templateUrl: './poslastica-edit.component.html',
  styleUrls: ['./poslastica-edit.component.css']
})
export class PoslasticaEditComponent implements OnInit {

  id: number;
  editMode = false;
  poslasticaForm: FormGroup;
  poslastice: Poslastica[];

  constructor(private route: ActivatedRoute,
              private poslasticaService: PoslasticaService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editMode = params.id != null;
        this.initForm();
        console.log(this.id);
        console.log(this.editMode);

      }
    );

  }
  private initForm() {
    let poslasticaNaziv = '';
    let poslasticaSlikaURL = '';
    let poslasticaCena = '';
    // tslint:disable-next-line:prefer-const
    // let poslasticaSastojci = new FormArray([]);


    if (this.editMode) {
     // const poslastica = ''; // = this.poslasticaService.getPoslasticaById(this.id);
      this.poslasticaService.getPoslasticaById(this.id).subscribe( GETposlastica => {
        console.log(GETposlastica[0]);
        const poslastica = GETposlastica[0];
        poslasticaNaziv = poslastica.nazivPoslastice;
        poslasticaSlikaURL = poslastica.slikaURL;
        poslasticaCena = poslastica.cenaPoslastice ;

        this.poslasticaForm = new FormGroup({
          naziv: new FormControl(poslasticaNaziv, Validators.required),
          slikaURL: new FormControl(poslasticaSlikaURL, Validators.required),
          cena: new FormControl(poslasticaCena, Validators.required)
          // sastojci: poslasticaSastojci

        });
      });

      /*
      if (poslastica.sastojci) {
        // tslint:disable-next-line:prefer-const
        for (let sastojak of poslastica.sastojci) {
          poslasticaSastojci.push(
            new FormGroup({
              vrstaMaterijala: new FormControl(sastojak.vrstaMaterijala, Validators.required),
              potrebnaKolicina: new FormControl(sastojak.potrebnaKolicina,  [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
*/


    }
    this.poslasticaForm = new FormGroup({
        naziv: new FormControl(poslasticaNaziv, Validators.required),
        slikaURL: new FormControl(poslasticaSlikaURL, Validators.required),
        cena: new FormControl(poslasticaCena, Validators.required)
        // sastojci: poslasticaSastojci

      });

  }

  onSubmit() {
   const novaPoslastica = new Poslastica(
      this.poslasticaForm.value.naziv,
      'torta',
      this.poslasticaForm.value.cena,
      1,
      0,
      1,
      1,
      this.poslasticaForm.value.slikaURL

    );
     // preskacem ovo kada  su mi sva polja u formi obavezna i imaju iste nazive u formi i u modelu - sto u ovom primeru nije slucaj
   if (this.editMode) {
     this.poslasticaService.updatePoslastica(this.id, novaPoslastica).subscribe(a => { this.poslasticaService.poslasticaChanged.next(); });
     // this.poslasticaService.updatePoslastica(this.id, this.poslasticaForm.value);

    } else {
      console.log(novaPoslastica);
      this.poslasticaService.addPoslastica(novaPoslastica).subscribe(a => { this.poslasticaService.poslasticaChanged.next(); });
    }
   this.poslasticaService.getPoslastice().subscribe(
    (poslastice: Poslastica[]) => {
      this.poslastice = poslastice;
    }
  );
   this.poslasticaService.poslasticaChanged.next(this.poslastice);

   this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
    // Implementiran je ActivatedRoute tako da ova linija koda vraca na jednu rutu unazad u odnosu natrenutno aktivnu

  }
  onDeleteSastojak(index: number) {
    // (this.poslasticaForm.get('sastojci') as FormArray).removeAt(index);
  }
  onAddSastojak() {
  /*  (this.poslasticaForm.get('sastojci') as FormArray).push(
      new FormGroup({
        vrstaMaterijala: new FormControl(null, Validators.required),
        potrebnaKolicina: new FormControl(null,  [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
*/
  }
  getControl(){
    // return  (this.poslasticaForm.get('sastojci') as FormArray).controls;

    // return (<FormArray>this.reciepeForm.get('ingredients')).controls;
  }

}
