import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarsComponent }      from './stars/stars.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { StarDetailComponent }  from './star-detail/star-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: StarDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'stars', component: StarsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 

  
}
