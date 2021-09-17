import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateDetailComponent } from './core/feature/create-detail/create-detail.component';  
import { EditDetailComponent } from './core/feature/edit-detail/edit-detail.component'; 
import { ListDetailsComponent } from './core/feature/list-details/list-details.component'; 

const routes: Routes = [

  { path: 'listItems', component: ListDetailsComponent},
  { path: 'editItem', component: EditDetailComponent},
  { path: 'createItem', component: CreateDetailComponent},

  //{ path: '**', pathMatch: 'full', redirectTo: 'dashboard'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
