import { ListModel } from './../models/list-model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



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
UpdateRikishi(id?: number) {
  const urlUpdate = `${environment.apiBase}/rikishi/${id}`
  return this.http.put(urlUpdate, ListModel);
}

//Deletando
deleteRikishi (id?: number) {
  const urlDelete = `${environment.apiBase}/rikishi/${id}`
  return this.http.delete(urlDelete);
}

//consultando um rikishi po id
getOneRikishi (id?: number) {
  const urlGetOne= `${environment.apiBase}/rikishi/${id}`
  console.log(urlGetOne)
  return this.http.get(urlGetOne);
}

}
