import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gost } from '../shared/gost.model';
import { Radnik } from '../shared/radnik.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService{

  ulogovanJe = new BehaviorSubject<number>(0);
  // 0 niko nije ulogovan
  // 1 je GOST
  // 2 je RADNIK
  constructor(private http: HttpClient){}

  getAllGost(){
    return this.http.get<Gost[]>('http://localhost:8081/api/gost');
  }

  getAllRadnik(){
    return this.http.get<Radnik[]>('http://localhost:8081/api/radnik');
  }
  getGostById(id: number){
    return this.http.get<Gost>('http://localhost:8081/api/gost/' + id);
  }

  getRadnikById(id: number){
    return this.http.get<Radnik>('http://localhost:8081/api/radnik/' + id);
  }

  postGost(gost: Gost){
    return this.http.post('http://localhost:8081/api/gost', gost);
  }

  postRadnik(radnik: Radnik){
    return this.http.post('http://localhost:8081/api/radnik', radnik);

  }
  logout(){
    this.ulogovanJe.next(0);
  }
}
