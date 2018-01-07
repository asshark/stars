import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StarsComponent } from './stars/stars.component';
import { StarDetailComponent } from './star-detail/star-detail.component';
import { StarService } from './star-service/star.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message-service/message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FilterPipe, SortByPipe, FilterByTagPipe, FilterByFirstLetterPipe,TimesPipe} from './filters/pipes';
import { StarSearchComponent } from './star-search/star-search.component'
//import { HTTP_INTERCEPTORS } from '@angular/common/http';
//import { CustomInterceptor } from './star-service/star.service';
import { CookieService } from 'ngx-cookie-service';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { StarTaggingComponent } from './star-tagging/star-tagging.component';
import { StarReportComponent } from './star-report/star-report.component';
import { StarDeletingComponent } from './star-deleting/star-deleting.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    StarsComponent,
    StarDetailComponent,
    MessagesComponent,
    DashboardComponent,
    FilterPipe, SortByPipe, FilterByTagPipe, FilterByFirstLetterPipe, TimesPipe, 
    StarSearchComponent, 
    StarRatingComponent, StarTaggingComponent, StarReportComponent, StarDeletingComponent
  ],

  providers: [StarService, MessageService, CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
