import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListModel } from 'src/app/models/list-model';

import { ListService } from './../../service/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  rikishi$ = new Observable<ListModel[]>();
  rikishi: ListModel = new ListModel();


  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.ListRikishi();
  }

  ListRikishi() {
    this.rikishi$ = this.listService.getListRikishi();
  }

}
