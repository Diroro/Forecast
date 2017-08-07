import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

    @Input() dailyForecast;
  constructor() { }

  ngOnInit() {
         console.log('Daily Forecast:');
        console.log(this.dailyForecast);
  }

}


// apparentTemperature
// :
// 19.88   // in celcey degrees
// cloudCover
// :  покрытие облаками в процентах
// 0.27
// dewPoint точка росы??
// :
// 14.99
// humidity  туманность
// :
// 0.73
// icon
// :
// "partly-cloudy-day"
// ozone
// :
// 285.89  
// precipIntensity
// :
// 0
// precipProbability
// :
// 0
// pressure
// :
// 1016.06
// summary
// :
// "Partly Cloudy"
// temperature
// :
// 19.88
// time
// :
// 1502092013
// uvIndex
// :
// 4
// visibility
// :
// 10.01
// windBearing
// :
// 347
// windGust
// :
// 5.32
// windSpeed
// :
// 2.99