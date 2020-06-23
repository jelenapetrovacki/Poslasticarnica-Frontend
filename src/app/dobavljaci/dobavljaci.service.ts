import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dobavljac } from './dobavljac.model';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class DobavljaciService{


  constructor(private http: HttpClient) {}

  getDobavljaci() {
    return this.http.get<Dobavljac[]>('http://localhost:8081/api/dobavljac');
  }

}
