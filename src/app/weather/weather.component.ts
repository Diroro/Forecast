import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-weather',
    // templateUrl: './weather.component.html',
    template: `
    <div class ='weather-block block'>  
       <p class ='text'>
       TODAY
       </p>
        <app-icon [size]='iconSize' [icon]='weather.icon'></app-icon>
         <span class = 'info info-very-large'> | {{weather.summary}}</span>     
    </div>
        <div class = 'temperature-block block'>
    <div class='info info-very-large'>
    {{weather.temperature}}&deg; С
    </div>
   
</div>
<div class = 'info info-large block'>
  {{weather.pressure}} mm Hg
  
</div>
<div class = 'info info-large block'>
  {{weather.windSpeed}} m/s  {{weather.windBearing}}
  </div>
`,
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
        console.log('Current Weather:');
        console.log(this.currentWeather);

    }
    // clear-day = sun
    // clear-night = moon
    // rain = rain
    // snow = snow
    // sleet, 
    // wind = wind
    // 
    //  fog = mist
    //cloudy = clouds
    //  partly-cloudy-day  = sun-clouds
    // partly-cloudy-night = moon-clouds
}


// clear-day = sun
// 