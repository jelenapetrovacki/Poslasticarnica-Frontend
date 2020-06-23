import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoslasticeComponent } from './poslastice/poslastice.component';
import { HeaderComponent } from './header/header.component';
import { PoslasticeListComponent } from './poslastice/poslastice-list/poslastice-list.component';
import { PoslasticeItemComponent } from './poslastice/poslastice-list/poslastice-item/poslastice-item.component';
import { PoslasticeDetailComponent } from './poslastice/poslastice-detail/poslastice-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { PoslasticaStartComponent } from './poslastice/poslastica-start/poslastica-start.component';
import { PoslasticaEditComponent } from './poslastice/poslastica-edit/poslastica-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { PoslasticaService } from './poslastice/poslastica.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { PorudzbinaService } from './poslastice/porudzbina.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PorudzbineComponent } from './porudzbine/porudzbine.component';
import { DobavljaciComponent } from './dobavljaci/dobavljaci.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DobavljaciService } from './dobavljaci/dobavljaci.service';
@NgModule({
  declarations: [
    AppComponent,
    PoslasticeComponent,
    HeaderComponent,
    PoslasticeListComponent,
    PoslasticeItemComponent,
    PoslasticeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    PoslasticaStartComponent,
    PoslasticaEditComponent,
    AuthComponent,
    PorudzbineComponent,
    DobavljaciComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [ShoppingListService, PoslasticaService, AuthService, PorudzbinaService, DobavljaciService],
  bootstrap: [AppComponent]
})
export class AppModule { }
