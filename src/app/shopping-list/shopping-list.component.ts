import { Component, OnInit, OnDestroy } from '@angular/core';
import { Poslastica } from '../shared/poslastica.model';
import { ShoppingListService } from './shopping-list.service';
import { Stavka } from './stavka.model';
import { Subscription } from 'rxjs';
import { PorudzbinaPoslastica } from '../shared/porudzbinaPoslastica.model';
import { Korpa } from '../shared/korpa.model';
import { PoslasticaService } from '../poslastice/poslastica.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit, OnDestroy {


  stavke: PorudzbinaPoslastica[];

  subscription: Subscription;

  constructor(private slService: ShoppingListService,
              private poslasticaService: PoslasticaService) { }

  ngOnInit() {

///  this.slService.getStavke().subscribe( (stavke: PorudzbinaPoslastica[]) => {
//    this.stavke = stavke;
//  });

  this.subscription = this.slService.idNovePorudzbine.subscribe(idPor => {
            console.log('id promenjen');
            this.slService.stavkaChanged.subscribe( (stavke: PorudzbinaPoslastica[]) => {

                this.stavke = stavke;

            });
            });






  }
    onEditStavka(index: number) {
         this.slService.startedEditing.next(index);
      }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
      }

}
