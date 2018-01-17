import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarsComponent }       from './stars.component';
import { StarDetailComponent } from './star-detail/star-detail.component';
import { StarsListComponent }   from './stars-list/stars-list.component';
import { StarsRoutingModule }   from './stars-routing.module';

@NgModule({
  imports: [
    StarsRoutingModule
  ],
  declarations: [StarsComponent,StarDetailComponent,StarsListComponent],
  providers: []
})
export class StarsModule { }
