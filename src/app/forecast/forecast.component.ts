import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-forecast',
    templateUrl: './forecast.component.html',
    styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
    public forecast = [];
    private iconSize = 'small';
    @Input() dailyForecast;

    constructor() { }
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
                precipProbability: Math.round(item.precipProbability*100),
                windBearing: windBearingString,
                windSpeed: Math.round(item.windSpeed)
            }
            this.forecast.push(day);
        });

    }
}