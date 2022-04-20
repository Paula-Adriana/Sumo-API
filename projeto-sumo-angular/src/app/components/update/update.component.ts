import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListModel } from 'src/app/models/list-model';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  rikishi: ListModel =  new ListModel();
  id !: number;
  okInsert: boolean = false;

  constructor(private listService: ListService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
  }

  onSubmit() {
    this.listService.UpdateRikishi(this.rikishi).subscribe((rikishi) => {
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
