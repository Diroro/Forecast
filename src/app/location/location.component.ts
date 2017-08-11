import { CurrentLocationService } from './../current-location.service';
import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.css'],

})
export class LocationComponent implements OnInit {
    isEditModeOn = false;
    location: Object;
    isLocationChanged = false;
    constructor(private cls: CurrentLocationService) {

    }
    @Output() changeLocation = new EventEmitter();
    ngOnInit() {
        this.loadCurrentLocation();
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
        this.cls.getCurrentLocation().then((location: any) => {
            this.location = location;
            this.changeLocation.emit(location);
            this.isLocationChanged = false;
        })
        .catch(this.handleError);
    }

    handleChangingLocation(Location) {
        this.location = Location;
        this.changeLocation.emit(Location);
        this.changeEditMode();
        this.isLocationChanged = true;
    }
    handleError(e):any{
        return e;
    }
}
