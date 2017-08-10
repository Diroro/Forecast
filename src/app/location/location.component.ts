import { CurrentLocationService } from './../current-location.service';
import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-location',
     templateUrl: './location.component.html',
//     template: ` 
      
// `,
    styleUrls: ['./location.component.css'],
    //     host: {
    //         '(document:click)': 'clickOutside()'
    //     }
})
export class LocationComponent implements OnInit {
    isEditModeOn = false;
    location: Object;
    isLocationChanged = false;
    constructor(private cls: CurrentLocationService) {

    }
    clickOutside() {
        if (this.isEditModeOn) { this.isEditModeOn = false; }
    }
    @Output() changeLocation = new EventEmitter();
    ngOnInit() {
        this.loadCurrentLocation();
    }

    changeEditMode() {
        this.isEditModeOn = !this.isEditModeOn;
    }

    loadCurrentLocation() {
        this.cls.getCurrentLocation().then((location: any) => {
            this.location = location;
            this.changeLocation.emit(location);
            this.isLocationChanged = false;
        })
    }

    handleChangingLocation(Location) {
        this.location = Location;
        this.changeLocation.emit(Location);
        this.changeEditMode();
        this.isLocationChanged = true;
    }
}
