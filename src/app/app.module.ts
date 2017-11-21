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
import {FilterPipe, SortByPipe, FilterByTagPipe, FilterByFirstLetterPipe} from './filters/pipes';
import { StarSearchComponent } from './star-search/star-search.component'


@NgModule({
  declarations: [
    AppComponent,
    StarsComponent,
    StarDetailComponent,
    MessagesComponent,
    DashboardComponent,
    FilterPipe, SortByPipe, FilterByTagPipe, FilterByFirstLetterPipe, StarSearchComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StarService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
  

 }
