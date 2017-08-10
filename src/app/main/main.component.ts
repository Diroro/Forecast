import { WeatherService } from './../weather.service';
import { CurrentLocationService } from './../current-location.service';
import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
//     template: `
  
// `,
    styleUrls: ['./main.component.css'],
    providers: [WeatherService]
})
export class MainComponent implements OnInit {
    public location;
    public weather;
    public fullPath;
    public imgPath = '../images/darksky.png';

    // @Output() weatherIcon = new EventEmitter();
    constructor(


        private cd: ChangeDetectorRef,
        private ws: WeatherService
    ) { }
//   function getBackgroundByKey(weather) {
// 	const sun = 'linear-gradient(to top, #e85a8a, #faae56)';
// 	const moon = 'linear-gradient(to top, #141e30, #243b55)';
// 	const clouds = 'linear-gradient(to top, #757f9a, #d7dde8)';
// 	const nightClouds = 'linear-gradient(to top, #37393d, #101b30)';
// 	const lightClouds = 'linear-gradient(to top, #4ca1af, #c4e0e5)';
// 	const snow = 'linear-gradient(to top, #085078, #85d8ce)';
// 	const rain = 'linear-gradient(to top, #2c3e50, #bdc3c7)';
// 	const clear = 'linear-gradient(to top, #2f80ed, #56ccf2)';

// 	const backgrounds = {
// 		"clear-day": weather.currently.temperature > 15 ? sun : clear,
// 		"clear-night": moon,
// 		"cloudy": clouds,
// 		"partly-cloudy-day": clouds,
// 		"partly-cloudy-night": nightClouds,
// 		"rain": rain,
// 		"snow": snow,
// 		"fog": nightClouds,
// 		"wind": lightClouds
// 	};

// 	return backgrounds[weather.currently.icon];
// }
    public isWeatherLoaded = false;
    ngOnInit() {
        this.getMyPicture();
    

    }
    getMyPicture() {
        this.fullPath = "darksky.png";
        // this.fullPath='D:/MyProject/WEB/Forecast/src/app/images/darksky.png';
    }
    handleChangeLocation(changedLocation) {
        this.isWeatherLoaded = false;
        this.location = changedLocation;
        console.log('Location in main component:');
        console.log(this.location);
        this.ws.getCurrentAndDailyWether(this.location.lat, this.location.lng)
            .then(weather => {
                this.weather = weather;
                console.log(this.weather);
                this.isWeatherLoaded = true;
                // this.weatherIcon.emit(weather);
            })
            .catch(() => this.handleError())
        this.cd.markForCheck();
        //here should set weather and forecast mode on 
        //and request a weather and forecas from server
        // this.isWeatherLoaded = true;
    }
    handleError() {

    }
    

  
}
