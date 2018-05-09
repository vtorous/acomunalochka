import { Component } from '@angular/core';
import {Injectable} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is test string';
}

@Injectable() export class YearsList { 
  yearsList: number[] = [2015, 2016, 2017, 2018, 2019];
  constructor() { 
    this.yearsList = [2015, 2016, 2017, 2018, 2019];; 
  } 
 
  getMyGlobalVar() { 
    return [2015, 2016, 2017, 2018]; 
  } 
}
