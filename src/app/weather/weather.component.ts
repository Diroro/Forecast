import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

    @Input() currentWeather: number;

    constructor() { }
    ngOnInit() {
        console.log('Current Weather:');
        console.log(this.currentWeather);
    }

}
