import { Component, OnInit  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Gost } from '../shared/gost.model';
import { Radnik } from '../shared/radnik.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  isLoginMode = true;
  gost: Gost;
  radnik: Radnik;
  ulogovanGost = false;
  ulogovanRadnik = false;
  error: string = null;

  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    const emailUlogovanog = form.value.email;
    const passUlogovanog = form.value.password;

    // form.reset();

    // LOGIN

    if ( this.isLoginMode ) {
      this.authService.getAllGost().subscribe(gosti =>
      {


        gosti.forEach(gost => {
          if (gost.emailGost != null && gost.emailGost === emailUlogovanog) {
            if (gost.passwordGost === passUlogovanog) {
              this.ulogovanGost = true;
              this.authService.ulogovanJe.next(1); // 1 je gost

              this.router.navigate(['poslastice']);
              console.log('ulogovan je gost');


            }

          }
          else {
              this.ulogovanGost = false;
              this.error = 'Uneli ste pogresne podatke';
            //  this.authService.ulogovanJe.next(0); // 0 - niko nije ulogovan

          }
        });
      });

      this.authService.getAllRadnik().subscribe(radnici =>
        {

           radnici.forEach(radnik => {
            if (radnik.emailRadnik != null && radnik.emailRadnik === emailUlogovanog) {
              if (radnik.passwordRadnik === passUlogovanog) {
                this.ulogovanRadnik = true;
                this.authService.ulogovanJe.next(2); // 2 je RADNIK

                this.router.navigate(['poslastice']);
                console.log('ulogovan je radnik');

                // sad nekako uvedem Subject i obvastim ostale komponente da je u pitanju RADNIK,
                // i naspram toga mu dodelim/ zabranim elemente
              }

            }
            else {
                this.ulogovanRadnik = false;
                this.error = 'Uneli ste pogresne podatke';
              //  this.authService.ulogovanJe.next(0);

            }
          });

        });

      if (this.ulogovanGost === false && this.ulogovanRadnik === false) {
        console.log('Ne postoji u bazi');
        this.error = 'Ne postoji nalog sa unetom email adresom';

          // pop up prozor da uneta email adresa nije odgovarajuca
      }

    }
    else if ( !this.isLoginMode ){
      this.gost = new Gost(form.value.ime, form.value.prezime,
         form.value.adresa, form.value.grad, form.value.kontakt, form.value.email, form.value.password);
      this.authService.postGost(this.gost).subscribe();
      this.authService.ulogovanJe.next(1); // 1 je gost

      this.router.navigate(['poslastice']);
      console.log('Nalog kreiran');

    }
    // REGISTER


  }

}
