import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListModel } from 'src/app/models/list-model';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-get-one',
  templateUrl: './get-one.component.html',
  styleUrls: ['./get-one.component.scss'],
})
export class GetOneComponent implements OnInit {
  rikishi: ListModel = new ListModel();
  showData: boolean = false;

  constructor(private listService: ListService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.listService.getOneRikishi(this.rikishi.id).subscribe((data) => {
      console.log(data);
      this.showData = !this.showData; //toggle
      this.rikishi = data;
    });
  }
}
