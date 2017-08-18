
import { Component, OnInit, Input, Output, OnDestroy, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-autocomplete',
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent implements OnInit {
    public address = '';
    public location = {
        city: '',
        country: '',
        lat: '',
        lng: ''
    }
    constructor(myElement: ElementRef, private zone: NgZone) {
    }
    ngOnInit() {
    }

    @Output() setLocation = new EventEmitter();

   
    getCity(a) {
        this.location.city = a;

    }
    getCountry(a) {
        this.location.country = a;
       
    }
    getLat(a) {
        this.location.lat = a;
        
    }
    getLng(a) {
        this.location.lng = a;
        this.zone.run(() => this.setLocation.emit(this.location))
    }

}
