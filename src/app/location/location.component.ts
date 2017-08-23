import { CurrentLocationService } from './../services/current-location.service';
import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.css'],

})
export class LocationComponent implements OnInit {
    isEditModeOn = false;
    constructor() {

    }
    @Output() changeLocation = new EventEmitter();
    @Input() isLocationCurrent: boolean;
    ngOnInit() {
       
    }
   
    changeEditMode() {
        this.isEditModeOn = !this.isEditModeOn;
    }

    loadCurrentLocation() {
            let currentLocation = { city: 'Current', country: 'Location', lat:'', lng:''};
            this.changeLocation.emit(currentLocation);
    }

    handleChangingLocation(location) {
        this.changeLocation.emit(location);
        this.changeEditMode();
        this.isLocationCurrent = false;
    }
}
