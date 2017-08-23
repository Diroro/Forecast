import { LocationStorageService } from './../services/location-storage.service';
import { WeatherService } from './../services/weather.service';
import { CurrentLocationService } from './../services/current-location.service';
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
        weatherList: [],
        isLocationsListOpened: null,
        isLocationCurrent: false,
        isWeatherLoaded: false,
        isLoadingShown: false,
        error: {
            message: null,
            action: null,
            actionBtnText: "Retry"
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
        this.state.weatherList = [];
        this.ws.getCurrentWeatherForList(newList.data)
            .then((weatherList) => {
                weatherList.map(weather => {
                    let cityWeather = {
                        temperature: Math.round(weather.temperature),
                        icon: weather.icon
                    }
                    this.state.weatherList.push(cityWeather);
                })

                callback();

            }).catch(e => this.handleError(this.getLocationsList.bind(this), 'weather list'));
        this.state.locationsList = newList;
    }

    loadCurrentLocation() {
        this.state.isLocationCurrent=true;
        this.cls.getCurrentLocation()
            .then((location: any) => {
                this.state.location = location;
                this.handleChangeLocation();
            })
            .catch((e) =>
                this.handleError(this.checkLocationSourceAndLoad.bind(this), "current location"));
    }

    checkLocationSourceAndLoad() {
        if (this.state.locationsList.shouldBeLoaded < 0) {
            this.loadCurrentLocation();
        }
        else {
            this.state.location = this.state.locationsList.data[this.state.locationsList.shouldBeLoaded];
            this.handleLocationFromStorage(this.state.locationsList.data[this.state.locationsList.shouldBeLoaded]);
        }
    }

    handleNewLocation(location) {
        if (location.city === 'Current') {
            this.state.isLocationCurrent = true;
            this.loadCurrentLocation();
        }
        else {
            this.state.isLocationCurrent = false;
            this.state.location = location;
            this.handleChangeLocation();
        }
        this.lss.clearLocationFromStorageAttr();
    }

    handleLocationFromStorage(location) {
        this.state.isLoadingShown = false;
        this.state.isLocationCurrent = false;
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
            .catch((e) => this.handleError(this.handleChangeLocation.bind(this), 'current weather'));
    }

    handleError(action, object) {
        this.state.isLoadingShown = false;
        this.state.error.message = "Error on loading the " + object + "...";
        this.state.error.actionBtnText = "Retry";
        this.state.error.action = action;
    }

    actionOnError() {
        this.state.error.message = "";
        this.state.error.action();
    }

    toggleLocationsList() {
        this.state.isLocationsListOpened = !this.state.isLocationsListOpened;
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
