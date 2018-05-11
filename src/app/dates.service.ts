import { Injectable } from '@angular/core';

import { Payment, PaymentByCounter, } from '../month-payment';
import { PaymentService } from './payment.service';

@Injectable()
export class DatesService {
  currnetYear: number;
  curentMonth: number;

  payments: (Payment|PaymentByCounter)[];

  yearsList:number[] = [2015, 2016, 2017, 2018];

 
  getYearsList(): number[] {
    console.log(this.yearsList);
    return this.yearsList;
  }
  

  constructor(private paymentService: PaymentService) {
    this.payments = this.paymentService.getPayments();
  }

}
