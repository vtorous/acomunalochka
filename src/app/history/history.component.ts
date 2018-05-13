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
  
  // payments = PAYMENTS;
  payments: (Payment|PaymentByCounter)[];
  curencyString: string;

  yearsList: number[];
  
  date: Date = new Date();
  
  currentMonth = this.date.getMonth();
  currentYear = this.date.getFullYear();
  
  monthHistory = this.getMonthHistory(this.currentYear, this.currentMonth);
  totalMonthSum = this.getMonthTotalSum(this.currentYear, this.currentMonth);

//----------------------------------------------------------------------------------------------
  getMonthHistory(year: number, month: number) : { service: string, sum: number }[] {
    
    var monthHistory: { service: string, sum: number }[] = [];
    this.payments = this.paymentService.getPayments();

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

  //----------------------------------------------------------------------------------------------
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

  
  constructor(private paymentService: PaymentService,
              private datesService: DatesService){
  }
    
  //----------------------------------------------------------------------------------------------
  getPayments(): void {
    this.payments = this.paymentService.getPayments();
  } 

  ngOnInit() {
    this.yearsList = this.datesService.getYearsList();
    this.curencyString = this.paymentService.getCurencyString();  
    console.log(this.yearsList);
  }

}
