import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CurrentMonthTabComponent } from './components/current-month-tab/current-month-tab.component';
import { HomeComponent } from './components/home/home.component';
import { NextMonthTabComponent } from './components/next-month-tab/next-month-tab.component';
import { PrevMonthTabComponent } from './components/prev-month-tab/prev-month-tab.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'calender',
    component:CalendarComponent,
    pathMatch:'full'
  },
  {
    path:'about',
    component:AboutComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
