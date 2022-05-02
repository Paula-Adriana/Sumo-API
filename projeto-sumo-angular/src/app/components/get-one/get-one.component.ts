import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListModel } from 'src/app/models/list-model';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-get-one',
  templateUrl: './get-one.component.html',
  styleUrls: ['./get-one.component.scss'],
})
export class GetOneComponent implements OnInit {
  rikishi: ListModel = new ListModel({});
  showData: boolean = false;
  id !: number;

  constructor(private listService: ListService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
  }

  onSubmit() {
    this.listService.getOneRikishi(this.rikishi.id).subscribe((data) => {
      console.log(data);
      this.showData = !this.showData; //toggle
      this.rikishi = data;
    });
  }
}
