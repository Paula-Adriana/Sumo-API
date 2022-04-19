import { Component, OnInit } from '@angular/core';
import { ListModel } from 'src/app/models/list-model';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

 rikishi: ListModel =  new ListModel;


  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.listService.deleteRikishi(this.rikishi.id).subscribe(data => {
      console.log(data)
    });
    
  }
}
