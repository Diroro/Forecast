import { Injectable } from '@angular/core';

class Location {
    city: string;
    country: string;
    lat: string;
    lng: string
}
class LocationList {
    data: Array<Location>;
    shouldBeLoaded: number;

}

@Injectable()
export class LocationStorageService {

    constructor() { }

    getLocationsList(): LocationList {
        let list = JSON.parse(localStorage.getItem('locationsList')) || { data: [], shouldBeLoaded: -1 };
        if (list.shouldBeLoaded > list.data.length) list.shouldBeLoaded = -1;
        return list;
    }

    saveLocation(location: Location) {
        let list = this.getLocationsList();
        list.data.push(location);
        list.shouldBeLoaded = list.data.length - 1;
        localStorage.setItem('locationsList', JSON.stringify(list));
    }

    areObjectsEqual(obj1, obj2) {
        let keys1 = Object.keys(obj1);
        for (let i in keys1) {
            if (obj1[keys1[i]] != obj2[keys1[i]]) {
                return false;
            }
        };
        return true;
    }

    setLocationFromStorageAttr(location) {
        let list = this.getLocationsList();
        list.shouldBeLoaded = this.getLocationIndex(location);
        localStorage.setItem('locationsList', JSON.stringify(list));
    }

    clearLocationFromStorageAttr() {
        let list = this.getLocationsList();
        list.shouldBeLoaded = -1;
        localStorage.setItem('locationsList', JSON.stringify(list));
    }

    getLocationIndex(location) {
        let list = this.getLocationsList();
        for (let i = 0; i < list.data.length; i++) {
            if (this.areObjectsEqual(location, list.data[i])) {
                return i;
            }
        }
        return -1;
    }
    deleteLocation(location) {
        let list = this.getLocationsList();
        list.data.splice(this.getLocationIndex(location), 1);
        localStorage.setItem('locationsList', JSON.stringify(list));
        this.clearLocationFromStorageAttr();
    }

    clearLocations() {
        localStorage.removeItem('locationsList');
    }

}
