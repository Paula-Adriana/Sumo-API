import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Rikishi } from './../model/rikishi';
import { RikishiService } from './../services/rikishi.service';


@Component({
  selector: 'app-rikishi',
  templateUrl: './rikishi.component.html',
  styleUrls: ['./rikishi.component.scss']
})
export class RikishiComponent implements OnInit {

  rikishi$: Observable<Rikishi[]>;

  displayedColumns = ['shikona', 'heya', 'posRank', 'favoriteGrip'];

  //injeção do serviço
  constructor(
    private RikishiService: RikishiService,
    public dialog: MatDialog
    ) {
    this.rikishi$ = this.RikishiService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar listagem!');
        return of([])
      })

    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

}

