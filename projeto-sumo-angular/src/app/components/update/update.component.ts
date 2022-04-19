import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListModel } from 'src/app/models/list-model';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  rikishi: ListModel =  new ListModel;


  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.listService.UpdateRikishi(this.rikishi.id).subscribe(data => {
      console.log(data);
    });
  }
}
