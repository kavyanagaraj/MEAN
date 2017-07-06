import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlanTripComponent } from './plan-trip/plan-trip.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PlanDaysComponent } from './plan-days/plan-days.component';
import { AddTravellerComponent } from './add-traveller/add-traveller.component';
import { SearchViewComponent } from './search-view/search-view.component';

const routes: Routes = [
    { path: '', pathMatch:'full', redirectTo:'/login'},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard',component: DashboardComponent },
    { path: 'logout',redirectTo:'login'},
    { path: 'search',component: SearchViewComponent },
    { path: 'user',component: UserProfileComponent },
  // { path: 'poll/:id', component: PollComponent },
    { path: 'createtrip',component: PlanTripComponent, 
      children : [
        {path: 'planday',component: PlanDaysComponent}, 
        {path: 'addtraveller',component: AddTravellerComponent},
      ] },
    { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
