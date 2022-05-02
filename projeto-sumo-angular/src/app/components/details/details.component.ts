import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Subject } from 'rxjs';
import { ListModel } from 'src/app/models/list-model';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  rikishi: ListModel = new ListModel({});
  private routeSub: Subscription = new Subscription();

  rikishiDel = new ListModel({});
  monitoraStatusDelete$ = new Subject<boolean>();

  constructor(
    private listService: ListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //details
    this.routeSub = this.route.params.subscribe((params) => {
      this.listService.getOneRikishi(params['id']).subscribe((data) => {
        this.rikishi = data;
      });
    });
  }

  // delRikishi() {
  //   this.routeSub = this.route.params.subscribe((params) => {
  //     this.listService.deleteRikishi(params['id']).subscribe((data) => {
  //       console.log(data);
  //     });
  //   });
  // }

  deleteConfirm(rikishi: ListModel){
    if(rikishi){
      this.rikishiDel = rikishi;
      console.log(rikishi)
    }
  }
}
