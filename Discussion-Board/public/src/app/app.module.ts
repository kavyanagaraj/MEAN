import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddtopicComponent } from './addtopic/addtopic.component';
import { UserpageComponent } from './userpage/userpage.component';
import { TopicdetailsComponent } from './topicdetails/topicdetails.component';
import { LoginComponent } from './login/login.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddtopicComponent,
    UserpageComponent,
    TopicdetailsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

