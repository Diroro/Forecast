import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class CurrentLocationService {

    private url = 'https://freegeoip.net/json/';
    constructor(private http: Http) { }
    private googleApiKey='AIzaSyCqG7y5llTsyfBpPppRZQt7O1mJmpCeXQ8';

    getCurrentLocation(): Promise<any> {
        return this.http
            .get(this.url)
            .toPromise()
            .then((response: any) => {
                let resp = response.json();
                return {
                    city: resp.city,
                    country: resp.country_name,
                    lat: resp.latitude,
                    lng: resp.longitude
                };
            })
            .catch(this.handleError);
    }

  
    handleError() { };
}
