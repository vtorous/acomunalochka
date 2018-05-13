import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

import { Payment, PaymentByCounter, } from '../../month-payment';
import { PaymentService } from '../payment.service';
import { DatesService } from '../dates.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [ PaymentService,
                DatesService],
})

export class HistoryComponent implements OnInit {
  
  
  payments: (Payment|PaymentByCounter)[];
  curencyString: string;

  yearsList: number[];
  monthList: number[];
  
  date: Date = new Date();
  
  currentMonth: number;
  currentYear: number; 
  monthHistory;
  totalMonthSum;
 
  

//----------------------------------------------------------------------------------------------
  getMonthHistory(year: number, month: number) : { service: string, sum: number }[] {
    
    var monthHistory: { service: string, sum: number }[] = [];
    
    this.payments = this.paymentService.getPayments();

    for (let index = 0; index < this.payments.length; index++) {
      const element = this.payments[index];
      
      if (element.year == year && element.month == month) {
        let obj = {
          service: element.service,
          sum: element.sum,
        }
        monthHistory.push(obj);
      }

    }

    return monthHistory;
  }

  //----------------------------------------------------------------------------------------------
  getMonthTotalSum (year: number, month: number): number {
    let sum = 0;
    
    for (let index = 0; index < this.payments.length; index++) {
      const element = this.payments[index];
      
      if (element.year == year && element.month == month) {
        sum += element.sum;
      }
    }    
    
    return sum;
  }

  
  constructor(private paymentService: PaymentService,
              private datesService: DatesService){
  }
    
  //----------------------------------------------------------------------------------------------
  getPayments(): void {
    this.payments = this.paymentService.getPayments();
  } 
  
  //----------------------------------------------------------------------------------------------
  onChange(): void {
    console.log("Someone has changed select field");
    // this.totalMonthSum = this.getMonthTotalSum(this.currentYear, this.currentMonth);
    this.monthHistory = this.getMonthHistory(this.currentYear, this.currentMonth);

    this.monthList = this.datesService.getMonthList(this.currentYear);

    console.log(this.yearsList);
    console.log(this.monthList);
    console.log(this.currentYear);
    console.log(this.monthHistory);
    // console.log(this.monthHistory);

    
  }

  ngOnInit() {

    this.currentMonth = this.date.getMonth();
    this.currentYear = this.date.getFullYear();
  
    this.monthHistory = this.getMonthHistory(this.currentYear, this.currentMonth);
    this.totalMonthSum = this.getMonthTotalSum(this.currentYear, this.currentMonth);
    this.yearsList = this.datesService.getYearsList();
    this.monthList = this.datesService.getMonthList(this.currentYear);

    console.log(this.yearsList);
    console.log(this.monthList);
    console.log(this.currentYear);
    console.log(this.monthHistory);

    this.curencyString = this.paymentService.getCurencyString();  
  }

}
