import { CurrentLocationService } from './../current-location.service';
import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.css'],

})
export class LocationComponent implements OnInit {
    isEditModeOn = false;
    // location: Object;
    constructor() {

    }
    @Output() changeLocation = new EventEmitter();
    @Input() isLocationChanged: boolean;
    ngOnInit() {
        // this.loadCurrentLocation();
    }

    editModeOff(){
        if (!this.isEditModeOn){

        this.isEditModeOn=false;
        }
    }
    changeEditMode() {
        this.isEditModeOn = !this.isEditModeOn;
    }

    loadCurrentLocation() {
            let currentLocation = { city: 'Current', country: 'Location', lat:'', lng:''} // TYPE LOCATION, or may be const 
            this.changeLocation.emit(currentLocation);
    }

    handleChangingLocation(location) {
        this.changeLocation.emit(location);
        this.changeEditMode();
        this.isLocationChanged = true;
    }
    handleError(e):any{
        return e;
    }
}
