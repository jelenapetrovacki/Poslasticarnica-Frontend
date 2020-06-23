import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Porudzbina } from '../shared/porudzbina.model';
import { PorudzbinaPoslastica } from '../shared/porudzbinaPoslastica.model';
import { Stavka } from '../shopping-list/stavka.model';

@Injectable()
export class PorudzbinaService {

   constructor(private http: HttpClient){}

   getPorudzbine(){
    return this.http.get<Porudzbina[]>('http://localhost:8081/api/porudzbina');

   }
   getPorudzbinaById(id: number){
    return this.http.get<Porudzbina>('http://localhost:8081/api/porudzbina/' + id);

   }
   addPorudzbina(porudzbina: Porudzbina){
    return this.http.post<Porudzbina[]>('http://localhost:8081/api/porudzbina', porudzbina);

   }
   updatePorudzbina(id: number, novaPorudzbina: Porudzbina){
    return this.http.put('http://localhost:8081/api/porudzbina/' + id, novaPorudzbina);

   }
   deletePordzbina(id: number){
    return this.http.delete('http://localhost:8081/api/porudzbina/' + id);

   }

}
