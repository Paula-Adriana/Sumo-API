import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetOneComponent } from './components/get-one/get-one.component';

const routes: Routes = [
  {path: 'List', component: ListComponent},
  {path: 'home', component: HomeComponent},
  {path: 'Delete', component: DeleteComponent},
  {path: 'Update', component: UpdateComponent},
  {path: 'Create', component: CreateComponent},
  {path: 'Pesquisar', component: GetOneComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
