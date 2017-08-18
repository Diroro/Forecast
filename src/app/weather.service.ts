import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/map';



class CurrentlyDataPointObject {
    "time": number;
    "summary": string;
    "icon": string;
    "precipIntensity": number;
    "precipProbability": number;
    "temperature": number;
    "apparentTemperature": number;
    "dewPoint": number;
    "humidity": number;
    "windSpeed": number;
    "windGust": number;
    "windBearing": number;
    "cloudCover": number;
    "pressure": number;
    "ozone": number;
    "uvIndex": number;
}

class DailyDataPointObject {

    "time": number;
    "summary": string;
    "icon": string;
    "sunriseTime": number;
    "sunsetTime": number;
    "moonPhase": number;
    "precipIntensity": number;
    "precipIntensityMax": number;
    "precipProbability": number;
    "temperatureMin": number;
    "temperatureMinTime": number;
    "temperatureMax": number;
    "temperatureMaxTime": number;
    "apparentTemperatureMin": number;
    "apparentTemperatureMinTime": number;
    "apparentTemperatureMax": number;
    "apparentTemperatureMaxTime": number;
    "dewPoint": number;
    "humidity": number;
    "windSpeed": number;
    "windGust": number;
    "windGustTime": number;
    "windBearing": number;
    "cloudCover": number;
    "pressure": number;
    "ozone": number;
    "uvIndex": number;
    "uvIndexTime": number;

}
class DailyDataBlockObject {
    "summary": string;
    "icon": string;
    "data": DailyDataPointObject[];

}

class CurrentAndDailyWeather {
    latitude: number;
    longitude: number;
    timezone: string;
    offset: number;
    currently: CurrentlyDataPointObject;
    daily: DailyDataBlockObject;
}

class CurrentWeather {
    latitude: number;
    longitude: number;
    timezone: string;
    offset: number;
    currently: CurrentlyDataPointObject;
}
@Injectable()
export class WeatherService {

    private url = 'https://api.darksky.net/forecast';
    private key = 'd4ffe57bcc8981eddc567d513733ee34';

    constructor(private jsonp: Jsonp) { }

    public getCurrentAndDailyWether(lat, lng): Promise<CurrentAndDailyWeather> {
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
                response.json()
            )
            .catch(this.handleError);
    }

    getCurrentWeatherForList(list:Array<any>) {
        return Promise.all(list.map((location)=>this.getCurrentWeather(location.lat,location.lng).then(weather=>weather.currently)));
      
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}