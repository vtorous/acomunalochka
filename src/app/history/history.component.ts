import { Component, OnInit } from '@angular/core';
import { PAYMENTS } from '../../month-payment-mockup';
import { YearsList } from '../app.component';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit {
  
  payments = PAYMENTS;

  date: Date = new Date();
  
  currentMonth = this.date.getMonth();
  currentYear = this.date.getFullYear();
  
  monthHistory = this.getMonthHistory(this.currentYear, this.currentMonth);
  totalMonthSum = this.getMonthTotalSum(this.currentYear, this.currentMonth);
  
  y:YearsList = new YearsList();
  // yearList = y.getYearList();
  console.log(y);
  


  getMonthHistory(year: number, month: number) : { service: string, sum: number }[] {

    var monthHistory: { service: string, sum: number }[] = [];

    for (let index = 0; index < this.payments.length; index++) {
      const element = this.payments[index];
      
      if (element.year === year && element.month === month) {
        let obj = {
          service: element.service,
          sum: element.sum,
        }
        monthHistory.push(obj);
      }
    }
    return monthHistory;
  }

  getMonthTotalSum (year: number, month: number): number {
    let sum = 0;

    for (let index = 0; index < this.payments.length; index++) {
      const element = this.payments[index];
      
      if (element.year === year && element.month === month) {
        sum += element.sum;
      }
    }    

    return sum;
  }

  constructor() { }

  ngOnInit() {
    console.log(this.y);
  }

}
