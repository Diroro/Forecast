import { Injectable } from '@angular/core';
import { LocationsList, Location } from '../app.model';



@Injectable()
export class LocationStorageService {

    constructor() { }

    getLocationsList(): LocationsList {
        let list = JSON.parse(localStorage.getItem('locationsList')) || { data: [], shouldBeLoaded: -1 };
        if (list.shouldBeLoaded > list.data.length) list.shouldBeLoaded = -1;
        return list;
    }

    saveLocation(location: Location): void {
        let list = this.getLocationsList();
        list.data.push(location);
        list.shouldBeLoaded = list.data.length - 1;
        localStorage.setItem('locationsList', JSON.stringify(list));
    }

    areObjectsEqual(obj1, obj2): boolean {
        let keys1 = Object.keys(obj1);
        for (let i in keys1) {
            if (obj1[keys1[i]] != obj2[keys1[i]]) {
                return false;
            }
        };
        return true;
    }

    setLocationFromStorageAttr(location: Location): void {
        let list = this.getLocationsList();
        list.shouldBeLoaded = this.getLocationIndex(location);
        localStorage.setItem('locationsList', JSON.stringify(list));
    }

    clearLocationFromStorageAttr(): void {
        let list = this.getLocationsList();
        list.shouldBeLoaded = -1;
        localStorage.setItem('locationsList', JSON.stringify(list));
    }

    getLocationIndex(location: Location): number {
        let list = this.getLocationsList();
        for (let i = 0; i < list.data.length; i++) {
            if (this.areObjectsEqual(location, list.data[i])) {
                return i;
            }
        }
        return -1;
    }
    deleteLocation(location: Location): void {
        let list = this.getLocationsList();
        list.data.splice(this.getLocationIndex(location), 1);
        localStorage.setItem('locationsList', JSON.stringify(list));
        this.clearLocationFromStorageAttr();
    }

    clearLocations(): void {
        localStorage.removeItem('locationsList');
    }

}
