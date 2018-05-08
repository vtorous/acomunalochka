import { Component, OnInit } from '@angular/core';
import { PAYMENTS } from '../../month-payment-mockup';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit {
  
  payments = PAYMENTS;
  

  monthNames: string[] = [ "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December" ];
    
  getMonthName(n: number) {
      return this.monthNames[n];
  } 


  getMonthHistory(year: number, month: number) {
    var history: { service: string, sum: number }[] = [];

    for (let index = 0; index < this.payments.length; index++) {
      const element = this.payments[index];
      
      if (element.year === year && element.month === month) {
        let obj = {
          service: element.service,
          sum: element.sum,
        }
        history.push(obj);
      }

    }
    console.log(history);
    return history;
  }
  

  constructor() { }

  ngOnInit() {
  }

}
