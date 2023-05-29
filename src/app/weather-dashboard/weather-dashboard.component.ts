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
}
