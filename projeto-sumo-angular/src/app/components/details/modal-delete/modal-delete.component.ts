import { ListService } from './../../../service/list.service';
import { ListModel } from 'src/app/models/list-model';
import { Component, Input, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss'],
})
export class ModalDeleteComponent implements OnInit {
  private routeSub: Subscription = new Subscription();

  @Input()
  rikishiDel = new ListModel({});

  @Input()
  statusDelete = new Subject<boolean>();

  constructor(private service: ListService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.service.getOneRikishi(params['id']).subscribe((data) => {
        this.rikishiDel = data;
      });
    });
  }

  cancelDelete() {
    this.rikishiDel = new ListModel({});
  }

  delete(id?: number) {
    if (!id) {
      return;
    }
    this.routeSub = this.route.params.subscribe((params) => {
      this.service.deleteRikishi(params['id']).subscribe((data) => {
        console.log(data);

        if (data) {
          console.log('Registro excluído!');
          this.rikishiDel = new ListModel({});
          this.statusDelete.next(true);
        } else {
          this.rikishiDel = new ListModel({});
          this.statusDelete.next(false);
        }
      });
    });
  }
}
