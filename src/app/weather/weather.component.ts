import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

    @Input() currentWeather;
    iconSize = 'large';
    weather;
    constructor() { }
    ngOnInit() {
        let windBearing = this.currentWeather.windBearing || -1;
        let windBearingString = windBearing < 0 ? '' :
            windBearing < 23 ? '🡳' :
                windBearing < 68 ? '🡷' :
                    windBearing < 113 ? '🡰' :
                        windBearing < 158 ? '🡴' :
                            windBearing < 203 ? '🡱' :
                                windBearing < 248 ? '🡵' :
                                    windBearing < 293 ? '🡲' :
                                        windBearing < 338 ? '🡶' :
                                            '🡳'
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

