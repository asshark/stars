import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarSearchComponent }  from './star-search/star-search.component';
import { StarReportComponent }      from './star-report/star-report.component';

const routes: Routes = [
  { path: '', redirectTo: '/stars/top', pathMatch: 'full' },
  { path: 'stars', loadChildren: 'app/stars/stars.module#StarsModule' },
  { path: 'search', component: StarSearchComponent },
  { path: 'report', component: StarReportComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(
    routes
    //,{ enableTracing: true } // <-- debugging purposes only
  ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 

  
}
