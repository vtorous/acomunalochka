import { Injectable } from '@angular/core';

import { Payment, PaymentByCounter, } from '../month-payment';
import { PaymentService } from './payment.service';

@Injectable()
export class DatesService {
  currnetYear: number;
  curentMonth: number;

  payments: (Payment|PaymentByCounter)[];

  yearsList:number[] = [];
  monthList:number[] = [];

  //------------------------------------------------------------------------
  // return list of years where exist data about payments
  getYearsList(): number[] {
    this.yearsList = [];
    for (let index = 0; index < this.payments.length; index++) {
      const element = this.payments[index];
      
      if (!this.yearsList.includes(element.year)) {
        this.yearsList.push(element.year);
      }
    }
    
    return this.yearsList.sort();
  }

  //------------------------------------------------------------------------
  // return ordered list of month where exist data about payments
  getMonthList(year: number): number[] {
   
    this.monthList = [];
    
    for (let index = 0; index < this.payments.length; index++) {
      const element = this.payments[index];
      if ( !this.monthList.includes(element.month) && element.year == year) {
        this.monthList.push(element.month);
      }
    }
    
    return this.monthList.sort();
  }




  constructor(private paymentService: PaymentService) {
    this.payments = this.paymentService.getPayments();
  }

}
