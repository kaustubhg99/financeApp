import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  transactionModalActive = {
    'display':'none'
  };
  flag = false;
  constructor() { }

  ngOnInit(): void {
  }

  openNewTransaction(toggle:String){
    console.log("called");
    
    if (toggle =="open") {
      this.transactionModalActive.display= "flex";
    } else if(toggle =="close"){
      this.transactionModalActive.display= "none";
    }
  }
}
