import { WeatherService } from './../weather.service';
import { CurrentLocationService } from './../current-location.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    public location;
    public weather;
    constructor(
        private cls: CurrentLocationService,
        private ws: WeatherService
    ) { }

    public isWeatherLoaded = false;
    ngOnInit() {
        // get Current location
        // this.location = {city: 'Rostov', country: 'Russia', lat:'', lng:''};
        this.cls.getCurrentLocation().then((location: any) => this.location = location)
            .then(() => this.ws.getCurrentAndDailyWether(this.location.lat, this.location.lng))
            .then(weather => {
                this.weather = weather;
                console.log(this.weather);
                this.isWeatherLoaded = true;
                this.isWeatherLoaded = true;
            });
        //here should set weather and forecast mode on 
        //and request a weather and forecas from server


    }
    handleChangeLocation(changedLocation) {
        this.location = changedLocation;
        console.log('Location:');
        console.log(this.location);
        this.ws.getCurrentAndDailyWether(this.location.lat, this.location.lng)
            .then(weather => {
                this.weather = weather;
                console.log(this.weather);
                this.isWeatherLoaded = true;
            })
        //here should set weather and forecast mode on 
        //and request a weather and forecas from server
        this.isWeatherLoaded = true;
    }
}
