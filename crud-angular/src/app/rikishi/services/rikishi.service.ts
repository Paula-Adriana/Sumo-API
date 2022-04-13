import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { environment } from './../../../environments/environment';
import { Rikishi } from './../model/rikishi';



@Injectable({
  providedIn: 'root'
})

export class RikishiService {

  //injecao do httpClient
  constructor(private httpClient: HttpClient) { }

  //método que retorna uma lista de rikishi
  list() {
    const urlList = `${environment.API}/rikishi`
     return this.httpClient.get<Rikishi[]>(urlList)
     .pipe(
       first(),
       //delay(2000) //teste spinner
      // tap(Rikishi => console.log(Rikishi)) //teste de erro no console
     ); //<> generics do java
  }
}
