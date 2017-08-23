import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CurrentAndDailyWeather, CurrentWeather } from '../app.model';

@Injectable()
export class WeatherService {

    private url = 'https://api.darksky.net/forecast';
    private key = 'd4ffe57bcc8981eddc567d513733ee34';

    constructor(private jsonp: Jsonp) { }

    getCurrentAndDailyWether(lat, lng): Promise<CurrentAndDailyWeather> {
        return this.jsonp
            .get(this.url + '/' + this.key + '/' + lat + ',' + lng +
            '?units=si&exclude=minutely,hourly,alerts,flags&callback=JSONP_CALLBACK')
            .toPromise()
            .then((response: any) =>
                response.json() as CurrentAndDailyWeather
            )
            .catch(this.handleError);
    }

    getCurrentWeather(lat, lng): Promise<CurrentWeather> {
        return this.jsonp
            .get(this.url + '/' + this.key + '/' + lat + ',' + lng +
            '?units=si&exclude=daily,minutely,hourly,alerts,flags&callback=JSONP_CALLBACK')
            .toPromise()
            .then((response: any) =>
                response.json() as CurrentWeather
            )
            .catch(this.handleError);
    }

    getCurrentWeatherForList(list: Array<{ lat, lng }>): Promise<any> {
        return Promise.all(list.map((location) => this.getCurrentWeather(location.lat, location.lng)
            .then(weather => weather.currently)));

    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}