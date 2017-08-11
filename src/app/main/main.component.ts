import { WeatherService } from './../weather.service';
import { CurrentLocationService } from './../current-location.service';
import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    providers: [WeatherService]
})
export class MainComponent implements OnInit {
    public location;
    public weather;
    public imgPath = '../images/darksky.png';

    @Output() bg = new EventEmitter();
    constructor(
        private cd: ChangeDetectorRef,
        private ws: WeatherService
    ) { }
 
    public isWeatherLoaded = false;
    ngOnInit() {
    }
  
    handleChangeLocation(changedLocation) {
        this.isWeatherLoaded = false;
        this.location = changedLocation;
        this.ws.getCurrentAndDailyWether(this.location.lat, this.location.lng)
            .then(weather => {
                this.weather = weather;
                this.isWeatherLoaded = true;
                this.bg.emit(this.getBackgroundByKey(this.weather));
            })
            .catch(() => this.handleError());
    }
    handleError() {

    }
    
    getBackgroundByKey(weather) {
	const sun = 'linear-gradient(to top, #e85a8a, #faae56)';
	const moon = 'linear-gradient(to top, #141e30, #243b55)';
	const clouds = 'linear-gradient(to top, #656f8a, #c7cdd8)';
	const nightClouds = 'linear-gradient(to top, #37393d, #101b30)';
	const lightClouds = 'linear-gradient(to top, #4ca1af, #c4e0e5)';
	const snow = 'linear-gradient(to top, #085078, #85d8ce)';
	const rain = 'linear-gradient(to top, #2c3e50, #bdc3c7)';
	const clear = 'linear-gradient(to top, #2f80ed, #56ccf2)';

	const backgrounds = {
		"clear-day": weather.currently.temperature > 15 ? sun : clear,
		"clear-night": moon,
		"cloudy": clouds,
		"partly-cloudy-day": clouds,
		"partly-cloudy-night": nightClouds,
		"rain": rain,
		"snow": snow,
		"fog": nightClouds,
		"wind": lightClouds
	};

	return backgrounds[weather.currently.icon];
}
  
}
