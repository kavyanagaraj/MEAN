import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlanTripComponent } from './plan-trip/plan-trip.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PlanDaysComponent } from './plan-days/plan-days.component';
import { AddTravellerComponent } from './add-traveller/add-traveller.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { AgmCoreModule } from '@agm/core';
import {GooglePlaceModule} from 'ng2-google-place-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    PlanTripComponent,
    UserProfileComponent,
    PlanDaysComponent,
    AddTravellerComponent,
    SearchViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    GooglePlaceModule,
    // ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCtce0KR-K3PAciXPYsNlTiMnyiRS4Rrmc'
    })
  ],
  providers: [HttpService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

