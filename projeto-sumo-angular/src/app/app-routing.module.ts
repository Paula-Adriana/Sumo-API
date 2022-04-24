import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { ListComponent } from './components/list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetOneComponent } from './components/get-one/get-one.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {path: 'home', component: ListComponent},
  {path: 'Update', component: UpdateComponent},
  {path: 'Create', component: CreateComponent},
  {path: 'FindRikishi', component: GetOneComponent},
  {path: 'Details/:id', component: DetailsComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
