import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodayComponent} from './today/today.component';
import {MenuListComponent} from './menu-list/menu-list.component';
import {NewItemComponent} from './new-item/new-item.component';

const routes: Routes = [
  {path: '', redirectTo: '/todays', pathMatch: 'full'},
  {path: 'todays', component: TodayComponent},
  {path: 'change-menu', component: MenuListComponent},
  {path: 'new-item', component: NewItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
