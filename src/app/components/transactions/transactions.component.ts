import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  prevMonthTab = {
    'display':'none', 
  };

  currecurrentMonthTab = {
    'display':'block', 
  };

  nextMonthTab = {
    'display':'none', 
  };

  constructor() { }

  ngOnInit(): void {
  }

  openTab(month: String){
   
    console.log("Tab is open "+month);
   
    if (month=="currentMonth") {
      this.currecurrentMonthTab.display = "block"
      this.prevMonthTab.display = "none";
      this.nextMonthTab.display = "none";
    } else if (month=="prevMonth"){
      this.currecurrentMonthTab.display = "none"
      this.prevMonthTab.display = "block";
      this.nextMonthTab.display = "none";
    }else if (month=="nextMonth"){
      this.currecurrentMonthTab.display = "none"
      this.prevMonthTab.display = "none";
      this.nextMonthTab.display = "block";
    }else{
      this.currecurrentMonthTab.display = "block"
      this.prevMonthTab.display = "none";
      this.nextMonthTab.display = "none";
    }
  }

}
