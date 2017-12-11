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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomInterceptor } from './star-service/star.service';
//import { TagInputModule } from 'ng2-tag-input';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed! 
//import { CommonModule } from '@angular/common/src/common_module';

@NgModule({
  declarations: [
    AppComponent,
    StarsComponent,
    StarDetailComponent,
    MessagesComponent,
    DashboardComponent,
    FilterPipe, SortByPipe, FilterByTagPipe, FilterByFirstLetterPipe, TimesPipe, StarSearchComponent
  ],
  imports: [
    //TagInputModule, BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StarService, MessageService
    //, {provide: HTTP_INTERCEPTORS,
    //useClass: CustomInterceptor,
    //multi: true }
],
  bootstrap: [AppComponent]
})
export class AppModule {
  

 }
