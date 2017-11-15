import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import {FilterPipe, SortByPipe} from './filters/pipes'


@NgModule({
  declarations: [
    AppComponent,
    StarsComponent,
    StarDetailComponent,
    MessagesComponent,
    DashboardComponent,
    FilterPipe, SortByPipe
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
