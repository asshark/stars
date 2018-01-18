import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { StarsComponent }       from './stars.component';
import { StarDetailComponent } from './star-detail/star-detail.component';
import { StarsListComponent }   from './stars-list/stars-list.component';
import { DashboardComponent } from './stars-dasboard/dashboard.component';
import { StarsRoutingModule }   from './stars-routing.module';

import { StarRatingComponent } from '../cmn/star-rating/star-rating.component';
import { StarTaggingComponent } from '../cmn/star-tagging/star-tagging.component';
import { StarDeletingComponent } from '../cmn/star-deleting/star-deleting.component';


import {FilterPipe, SortByPipe, FilterByTagPipe, FilterByFirstLetterPipe,TimesPipe} from '../filters/pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StarsRoutingModule
  ],
  declarations: [StarsComponent, StarDetailComponent, StarsListComponent, DashboardComponent,
    FilterPipe, SortByPipe, FilterByTagPipe, FilterByFirstLetterPipe, TimesPipe, 
    StarRatingComponent, StarTaggingComponent, StarDeletingComponent],
  providers: []
})
export class StarsModule { }
