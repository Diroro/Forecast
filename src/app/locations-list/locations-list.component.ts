import { LocationStorageService } from './../location-storage.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-locations-list',
    templateUrl: './locations-list.component.html',
    styleUrls: ['./locations-list.component.css'],
    providers: [LocationStorageService]
})
export class LocationsListComponent implements OnInit {
    @Input() currentLocation;
    @Input() locationsList;
    @Input() weatherList;
    @Output() setCurrentLocation = new EventEmitter();
    @Output() getLocationsList = new EventEmitter();

    public list = [];
    iconSize = 'small';

    constructor(private lss: LocationStorageService) { }

    ngOnInit() {
    }

    saveLocation() {
        if (this.locationsList.data.length < 7 
            && this.lss.getLocationIndex(this.currentLocation) < 0) {
            this.lss.saveLocation(this.currentLocation);
            this.getLocationsList.emit();
        }
    }

    chooseLocation(location) {
        this.setCurrentLocation.emit(location);
    }

    deleteLocation() {
        if (this.lss.getLocationIndex(this.currentLocation) >= 0) {
            this.lss.deleteLocation(this.currentLocation);
            this.getLocationsList.emit();
        }
    }
    
    areObjectsEqual(o1, o2) {
        if (o1 && o2)
            return this.lss.areObjectsEqual(o1, o2)
        else return false;
    }
}
