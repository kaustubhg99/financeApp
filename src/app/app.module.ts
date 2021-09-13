import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { DwbDetailsComponent } from './components/dwb-details/dwb-details.component';
import { CurrentMonthTabComponent } from './components/current-month-tab/current-month-tab.component';
import { PrevMonthTabComponent } from './components/prev-month-tab/prev-month-tab.component';
import { NextMonthTabComponent } from './components/next-month-tab/next-month-tab.component';
import { AboutComponent } from './components/about/about.component';
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TransactionsComponent,
    DwbDetailsComponent,
    CurrentMonthTabComponent,
    PrevMonthTabComponent,
    NextMonthTabComponent,
    AboutComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
