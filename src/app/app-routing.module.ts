import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarsComponent }      from './stars/stars.component';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { StarDetailComponent }  from './star-detail/star-detail.component';
import { StarSearchComponent }  from './star-search/star-search.component';
import { StarReportComponent }      from './star-report/star-report.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: StarDetailComponent },
  //{ path: 'search/:searchBy', component: StarSearchComponent },
  { path: 'dashboard', component: DashboardComponent, data: [{reportType: 'TOP'}] },
  { path: 'starsnew', component: DashboardComponent, data: [{reportType: 'NEW'}] },
  { path: 'starsmod', component: DashboardComponent, data: [{reportType: 'MOD'}] },
  { path: 'stars', component: StarsComponent },
  { path: 'search', component: StarSearchComponent },
  { path: 'report', component: StarReportComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 

  
}
