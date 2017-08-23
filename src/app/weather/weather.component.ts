import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

    @Input() currentWeather;
    public iconSize = 'large';
    public weather = null
    constructor() { }
    ngOnInit() {
         let windBearing = this.currentWeather.windBearing || -1;
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
     
        this.weather = {
            temperature: Math.round(this.currentWeather.temperature),
            icon: this.currentWeather.icon,
            summary: this.currentWeather.summary,
            time: this.currentWeather.time,
            windBearing: windBearingString,
            windSpeed: Math.round(this.currentWeather.windSpeed),
            pressure: Math.round(this.currentWeather.pressure * 0.75)
        }
    }
}

