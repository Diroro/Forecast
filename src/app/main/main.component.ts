import { WeatherService } from './../weather.service';
import { CurrentLocationService } from './../current-location.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    providers: [WeatherService]
})
export class MainComponent implements OnInit {
    public location;
    public weather;
    constructor(
      

    private cd: ChangeDetectorRef,
        private ws: WeatherService
    ) { }

    public isWeatherLoaded = false;
    ngOnInit() {
        // this.ws.getCurrentAndDailyWether(this.location.lat, this.location.lng)
        //     .then(weather => {
        //         this.weather = weather;
        //         console.log(this.weather);
        //         this.isWeatherLoaded = true;
        //     });

    }
    handleChangeLocation(changedLocation) {
        this.location = changedLocation;
        console.log('Location in main component:');
        console.log(this.location);
        this.ws.getCurrentAndDailyWether(this.location.lat, this.location.lng)
            .then(weather => {
                this.weather = weather;
                console.log(this.weather);
                this.isWeatherLoaded = true;
            })
        this.cd.markForCheck();
        //here should set weather and forecast mode on 
        //and request a weather and forecas from server
        // this.isWeatherLoaded = true;
    }
}
