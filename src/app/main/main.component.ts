import { LocationStorageService } from './../location-storage.service';
import { WeatherService } from './../weather.service';
import { CurrentLocationService } from './../current-location.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    providers: [WeatherService, CurrentLocationService, LocationStorageService]
})
export class MainComponent implements OnInit {
    public state = {
        locationsList: { data: [], shouldBeLoaded: -1 },
        location: null,
        weather: null,
        weatherList: null,
        isLocationsListOpened: null,
        isLocationChanged: false,
        isWeatherLoaded: false,
        isLoadingShown: false,
        error: {
            message: null,
            action: null,
            actionBtnText: "Try again",
            object: null
        }

    }

    public imgPath = '../images/darksky.png';

    @Output() bg = new EventEmitter();
    constructor(
        private ws: WeatherService,
        private cls: CurrentLocationService,
        private lss: LocationStorageService
    ) { }
    ngOnInit() {
        this.getLocationsList(this.checkLocationSourceAndLoad.bind(this));
    }

    getLocationsList(callback = () => { }) {
        let newList = this.lss.getLocationsList();
        this.ws.getCurrentWeatherForList(newList.data)
            .then((weatherList) => {
                this.state.weatherList = weatherList;
                this.state.locationsList = newList;
                callback();
            });

    }

    checkLocationSourceAndLoad() {
        if (this.state.locationsList.shouldBeLoaded < 0) {
            this.cls.getCurrentLocation()
                .then(location => {
                    this.state.location = location;
                    this.handleChangeLocation();
                })
                .catch((obj) => this.handleCurrentLocationError());
        }
        else {
            this.state.location = this.state.locationsList.data[this.state.locationsList.shouldBeLoaded];
            this.handleLocationFromStorage(this.state.locationsList.data[this.state.locationsList.shouldBeLoaded]);
        }
    }


    toggleLocationsList() {
        this.state.isLocationsListOpened = !this.state.isLocationsListOpened;
    }

    handleNewLocation(location) {
        if (location.city === 'Current') {
            this.state.isLocationChanged = false;
            this.cls.getCurrentLocation().then((location: any) => {

                this.state.location = location;
                this.handleChangeLocation();
            })
        }
        else {
            this.state.isLocationChanged = true;

            this.state.location = location;
            this.handleChangeLocation();
        }
        this.lss.clearLocationFromStorageAttr();
    }

    handleLocationFromStorage(location) {
        this.state.isLoadingShown = false;
        this.state.isLocationChanged = true;
        this.state.location = location;
        this.handleChangeLocation();
        this.lss.setLocationFromStorageAttr(this.state.location);

    }

    handleChangeLocation() {
        this.state.isWeatherLoaded = false;
        this.state.isLoadingShown = true;
        this.ws.getCurrentAndDailyWether(this.state.location.lat, this.state.location.lng)
            .then(weather => {
                this.state.weather = weather;
                this.state.isWeatherLoaded = true;
                this.state.isLoadingShown = false;
                this.bg.emit(this.getBackgroundByKey(this.state.weather));
            })
            .catch((e) => this.handleWeatherError());
    }
    handleCurrentLocationError() {
        console.log('Current Location Error!');
        this.state.isLoadingShown = false;
        this.state.error.message = "Error on loading the current location...";
        this.state.error.actionBtnText = "Try again";
        this.state.error.action = this.checkLocationSourceAndLoad.bind(this);
    }

    handleWeatherError() {
        this.state.isLoadingShown = false;
        this.state.error.message = "Error on loading the weather...";
        this.state.error.actionBtnText = "Try again";
        this.state.error.action = this.handleChangeLocation.bind(this);

    }
    actionOnError() {
        this.state.error.message = "";
        this.state.error.action();
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
