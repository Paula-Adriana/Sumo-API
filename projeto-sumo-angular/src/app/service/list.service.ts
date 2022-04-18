import { ListModel } from './../models/list-model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

//Listagem geral
getListRikishi() {
  const urlList = `${environment.apiBase}/rikishi`
  return this.http.get<ListModel[]>(urlList);
}

//Adicionando
AddRikishi (listModel: ListModel) {
  const urlAdd = `${environment.apiBase}/rikishi`
  return this.http.post(urlAdd, listModel);
}

//Alterando
UpdateRikishi(listModel: ListModel) {
  const urlUpdate = `${environment.apiBase}/rikishi`
  return this.http.put(urlUpdate, listModel);
}

//Deletando - nao vai
deleteRikishi (id: number) {
  const urlDelete = `${environment.apiBase}/rikishi/${id}`
  return this.http.delete(urlDelete + id);
}

//consultando um - nao vai aidiconar campos que apareceram tb
getOneRikishi (shikona: string) {
  const urlGetOne= `${environment.apiBase}/rikishi/${shikona}`
  return this.http.get(urlGetOne);
}

}
