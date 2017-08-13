import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-forecast',
    templateUrl: './forecast.component.html',
    styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
    forecast = [];
    @Input() dailyForecast;
    constructor() { }
    iconSize = 'small';
    ngOnInit() {


        this.dailyForecast.data.map((item) => {
            let windBearing = item.windBearing || -1;
            let windBearingString = windBearing < 0 ? '' :
                windBearing < 23  ? 'N' :
                windBearing < 68  ? 'NE' :
                windBearing < 113 ? 'E':
                windBearing < 158 ? 'SE' :
                windBearing < 203 ? 'S' :
                windBearing < 248 ? 'SW' :
                windBearing < 293 ? 'W' :
                windBearing < 338 ? 'NW' :
                                    'N';

            let date = new Date(item.time * 1000);

            let day = {
                time: date.toDateString().slice(0, 10),
                temperatureMax: Math.round(item.temperatureMax),
                temperatureMin: Math.round(item.temperatureMin),
                pressure: Math.round(item.pressure * 0.75),
                summary: item.summary,
                icon: item.icon,
                precipProbability: item.precipProbability,
                windBearing: windBearingString,
                windSpeed: Math.round(item.windSpeed)
            }
            this.forecast.push(day);
        });

        console.log('Daily Forecast:');
        console.log(this.forecast);

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