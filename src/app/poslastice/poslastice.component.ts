import { Component, OnInit } from '@angular/core';
import { PoslasticaService } from './poslastica.service';

@Component({
  selector: 'app-poslastice',
  templateUrl: './poslastice.component.html',
  styleUrls: ['./poslastice.component.css'],
 // providers: [PoslasticaService]
  // sve komponente unutar ove deleistu instancu servisa
  // cim napustim neku od ovih komponeti instanca je izgubljena
  // da bih imala istu instancu servisa do god je app pokrenuta, servis moram ubaciti u providers u app.module
})
export class PoslasticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
