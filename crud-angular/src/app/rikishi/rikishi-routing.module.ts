import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RikishiComponent } from './rikishi/rikishi.component';

const routes: Routes = [
  { path: '', component: RikishiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RikishiRoutingModule { }
