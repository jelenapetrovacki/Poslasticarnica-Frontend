import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoslasticeComponent } from './poslastice/poslastice.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PoslasticeDetailComponent } from './poslastice/poslastice-detail/poslastice-detail.component';
import { PoslasticaStartComponent } from './poslastice/poslastica-start/poslastica-start.component';
import { PoslasticaEditComponent } from './poslastice/poslastica-edit/poslastica-edit.component';
import { AuthComponent } from './auth/auth.component';
import { DobavljaciComponent } from './dobavljaci/dobavljaci.component';


const routes: Routes = [
  { path: '', redirectTo: '/poslastice', pathMatch: 'full'},
  { path: 'poslastice', component: PoslasticeComponent, children: [
    {path: '', component: PoslasticaStartComponent},
    {path: 'new', component: PoslasticaEditComponent },
    {path: ':id', component: PoslasticeDetailComponent },
    {path: ':id/edit', component: PoslasticaEditComponent }

  ] },
  { path: 'korpa', component: ShoppingListComponent },
  { path: 'registracija', component: AuthComponent },
  { path: 'dobavljaci', component: DobavljaciComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
