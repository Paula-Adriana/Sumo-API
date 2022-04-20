import { Component, OnInit } from '@angular/core';
import { ListModel } from 'src/app/models/list-model';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  rikishi: ListModel = new ListModel();
  okInsert: boolean = false;

  constructor(private listService: ListService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.rikishi);
    this.saveRikishi();
  }

  saveRikishi() {
    this.listService.AddRikishi(this.rikishi).subscribe((rikishi) => {
      console.log(rikishi);
      if (!(this.rikishi.shikona == 'undefined')) {
        this.okInsert = true;

        setTimeout(() => {
          this.okInsert = false;
          this.rikishi = new ListModel();
        }, 3000);
      }
    });
  }
}
