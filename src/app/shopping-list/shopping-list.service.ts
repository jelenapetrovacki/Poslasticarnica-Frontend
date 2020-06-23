import { Subject, BehaviorSubject } from 'rxjs';
import { Stavka } from './stavka.model';
import { HttpClient } from '@angular/common/http';
import { PorudzbinaPoslastica } from '../shared/porudzbinaPoslastica.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService{
  idNovePorudzbine = new BehaviorSubject<number>(null);
  startedEditing = new Subject<number>();
  stavkaChanged = new BehaviorSubject<PorudzbinaPoslastica[]>(null);
  constructor(private http: HttpClient) {}
/*
  private stavke: Stavka[] = [
                  new Stavka(1, 1),
                  new Stavka(2, 1)
                ];
 */
getStavke(){
  return this.http.get<PorudzbinaPoslastica[]>('http://localhost:8081/api/stavka');

 }
 getStavkaById(id: number){
  return this.http.get<PorudzbinaPoslastica[]>('http://localhost:8081/api/stavka/' + id);

 }
 addStavka(stavka: PorudzbinaPoslastica){
  return this.http.post('http://localhost:8081/api/stavka', stavka);

 }
 updateStavka(id: number, stavka: PorudzbinaPoslastica){
  return this.http.put('http://localhost:8081/api/stavka/' + id, stavka);

 }
 deleteStavka(id: number){
  return this.http.delete('http://localhost:8081/api/stavka/' + id);

 }

}
