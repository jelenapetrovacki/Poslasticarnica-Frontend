import { Poslastica } from '../shared/poslastica.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Korpa } from '../shared/korpa.model';
import { MaterijalPoslastica } from '../shared/materijalposlastica.model';



@Injectable()
export class PoslasticaService {

poslasticaChanged = new Subject<Poslastica[]>();
private korpa: Korpa[];
korpaChanged = new Subject<Korpa[]>();
constructor(private http: HttpClient){}

  addPoslastica(poslastica: Poslastica) {
    return this.http
    .post('http://localhost:8081/api/poslastica', poslastica);
  }

  updatePoslastica(id: number, novaPoslastica: Poslastica) {
    return this.http
    .put('http://localhost:8081/api/poslastica/' + id, novaPoslastica);
  }

  deletePoslastica(id: number) {
    return this.http
    .delete('http://localhost:8081/api/poslastica/' + id);

  }
  getPoslastice() {
    return this.http.get<Poslastica[]>('http://localhost:8081/api/poslastica');
  }
  getPoslasticaById(id: number) {
    return this.http
    .get<Poslastica>('http://localhost:8081/api/poslastica/' + id);
  }
  getPoslMatById(id: number) {
    return this.http
    .get<MaterijalPoslastica>('http://localhost:8081/api/materijalPoslastica/' + id);
  }
  deletePoslMat(id: number) {
    return this.http
    .delete('http://localhost:8081/api/materijalPoslastica/' + id);
   }
   addKorpa(id: number, naziv: string, kolicina: number) {
      this.korpa.push(new Korpa (id, naziv, kolicina));
      this.korpaChanged.next(this.korpa.slice());
   }
   getKorpa() {
    return this.korpa.slice();
 }


}
