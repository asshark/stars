import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

//import { StarsListComponent } from './stars/stars-list/stars-list.component';
//import { StarDetailComponent } from './stars/star-detail/star-detail.component';
//import { StarService } from './star-service/star.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message-service/message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FilterPipe, SortByPipe, FilterByTagPipe, FilterByFirstLetterPipe,TimesPipe} from './filters/pipes';
import { StarSearchComponent } from './star-search/star-search.component'

import { CookieService } from 'ngx-cookie-service';
import { StarRatingComponent } from './cmn/star-rating/star-rating.component';
import { StarTaggingComponent } from './cmn/star-tagging/star-tagging.component';
import { StarReportComponent } from './star-report/star-report.component';
import { StarDeletingComponent } from './cmn/star-deleting/star-deleting.component';
import { CoreModule }       from './core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CoreModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
  //  StarsListComponent,
  // StarDetailComponent,
    MessagesComponent,
    DashboardComponent,
    FilterPipe, SortByPipe, FilterByTagPipe, FilterByFirstLetterPipe, TimesPipe, 
    StarSearchComponent, 
    StarRatingComponent, StarTaggingComponent, StarReportComponent, StarDeletingComponent
  ],

  providers: [MessageService, CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
