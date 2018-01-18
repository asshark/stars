import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarsComponent }       from './stars.component';
import { StarsListComponent }   from './stars-list/stars-list.component';
import { StarDetailComponent } from './star-detail/star-detail.component';
import { DashboardComponent } from './stars-dasboard/dashboard.component';

const routes: Routes = [
  { 
    path: '',  component: StarsComponent,
    children: [
      { path: 'top', component: DashboardComponent, data: [{reportType: 'TOP'}] },
      { path: 'new', component: DashboardComponent, data: [{reportType: 'NEW'}] },
      { path: 'mod', component: DashboardComponent, data: [{reportType: 'MOD'}] },
      { path: '',    component: StarsListComponent },
      { path: ':id', component: StarDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(
    routes
  )],
  exports: [RouterModule]
})
export class StarsRoutingModule {}
