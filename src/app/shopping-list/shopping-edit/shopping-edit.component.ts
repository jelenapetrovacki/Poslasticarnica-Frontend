import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Stavka } from '../stavka.model';
import { PorudzbinaPoslastica } from '../../shared/porudzbinaPoslastica.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: PorudzbinaPoslastica;
  stavke: PorudzbinaPoslastica[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing
    .subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.slService.getStavkaById(index).subscribe(
          (stavka: PorudzbinaPoslastica[]) => {
            this.editedItem = stavka[0];

          }
        );
        this.slForm.setValue({
            proizvod: this.editedItem.nazivPoslastice,
            kolicina: this.editedItem.kolicina
        });

      }

    );
  }
  onDeleteStavka(){
    this.slService.deleteStavka(this.editedItemIndex).subscribe();
    this.slService.getStavkaById(this.slService.idNovePorudzbine.value).subscribe(
      (stavke: PorudzbinaPoslastica[]) =>
       { this.stavke = stavke; }
    );
    this.slService.stavkaChanged.next(this.stavke);
    this.onClear();
  }
  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }
  onSubmit(form: NgForm) {
    const value = form.value;
  /*  const novaStavka = new PorudzbinaPoslastica(value.proizvod, value.kolicina);
    if (this.editMode) {
      this.slService.updateStavka(this.editedItemIndex, novaStavka);
    } else {
      this.slService.addStavka(novaStavka);
    }
    this.editMode = false;*/
    form.reset();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
