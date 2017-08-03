import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';


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
@Injectable()
export class WeatherService {

    private url = 'https://api.darksky.net/forecast';
    private key = 'd4ffe57bcc8981eddc567d513733ee34';

    constructor(private http: Http) { }

    public getCurrentAndDailyWether(lat, lng): Promise<any> {
        // // let opt: RequestOptions = {headers:[{'Origin': 'http://localhost'}], method:'PUT'}
        let headers = new Headers({
            'Origin': 'localhost:3000',
            'Accept': 'application/json',
            'Accept-Language': 'en'
        }
        );
        let options = new RequestOptions({ headers: headers });

        // let options = {'Origin': 'http://localhost'}
        return this.http
            .get(this.url + '/' + this.key + '/'
            + lat + ',' + lng +
            '?units=si&exclude=minutely,hourly,alerts,flags'/*&callback=jsonp_1501758901349_60062', { headers: headers } */)
            .toPromise()
            .then((response: any) =>
                response.json() as CurrentAndDailyWeather
            )
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}