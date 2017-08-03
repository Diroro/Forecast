import { CurrentLocationService } from './../current-location.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    // template:` `,
    styleUrls: ['./location.component.css'],
   
})
export class LocationComponent implements OnInit {
    isEditModeOn = false;
    // private Location=null;
    @Output() changeLocation = new EventEmitter();
    ngOnInit() {
    }

    changeEditMode(){
        this.isEditModeOn=!this.isEditModeOn;
    }

    // setLocation(event){
    //     this.changeLocation.next(this.Location);
    // }

    handleChangingLocation(Location){
        this.changeLocation.emit(Location);
        this.changeEditMode();
        //handle with click requiring
    }
}
