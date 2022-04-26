import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { ListModel } from './../models/list-model';


@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private http: HttpClient) {}

  //Listagem geral
  getListRikishi() {
    const urlList = `${environment.apiBase}/rikishi`;
    return this.http.get<ListModel[]>(urlList);
  }

  //Adicionando
  AddRikishi(listModel: ListModel) {
    const urlAdd = `${environment.apiBase}/rikishi`;
    return this.http.post(urlAdd, listModel);
  }

  //Alterando
  UpdateRikishi(listModel: ListModel) {
    const urlUpdate = `${environment.apiBase}/rikishi/${listModel.id}`;
    return this.http.put(urlUpdate, listModel);
  }

  //Deletando
  deleteRikishi(id?: number) {
    const urlDelete = `${environment.apiBase}/rikishi/${id}`;
    return this.http.delete(urlDelete);
  }

  //consultando um rikishi po id
  getOneRikishi(id?: number) {
    const urlGetOne = `${environment.apiBase}/rikishi/${id}`;
    return this.http.get(urlGetOne);
  }

}
