import { Component, OnInit } from '@angular/core';
import { ListModel } from 'src/app/models/list-model';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  rikishi: ListModel =  new ListModel();

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  saveRikishi(){
    this.listService.AddRikishi(this.rikishi).subscribe(data => {
      console.log(data);
    })
  }

onSubmit() {
  console.log(this.rikishi);
  this.saveRikishi()
}

}
