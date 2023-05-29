import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.scss']
})
export class WeatherDashboardComponent {
    constructor() {
      this.stringsArray = [
        'this is one option',
        'this is another',
        'this is made with the ngFor loop'
      ]
    }
    stringsArray: string[] = [];
    ifStatement =  'this is one of the ifs';
    flipIfStatement() {
      if(this.ifStatement = 'this is one of the ifs')
        this.ifStatement = 'this is the other ifs';
      else if(this.ifStatement = 'this is the other ifs')
        this.ifStatement = 'this is one of the ifs';
    }
}
