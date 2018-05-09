import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-month-history-detail',
  templateUrl: './month-history-detail.component.html',
  styleUrls: ['./month-history-detail.component.css']
})
export class MonthHistoryDetailComponent implements OnInit {
  
  @Input() year: number;
  @Input() month: string;
  @Input() totalMonthSum: number;
  @Input() monthHistory: {service: string, sum: number}[];
  
  constructor() { }

  ngOnInit() {
    console.log(this.monthHistory);
  }

}
