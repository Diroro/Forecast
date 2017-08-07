
import { Component, OnInit, Input, Output, OnDestroy, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-autocomplete',
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.css'],
    // host: { '(document:click)': 'handleClick($event)' }
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

    getAddress(a) {
        console.log('Address', a);

    }
    getCity(a) {
        this.location.city = a;
        console.log(this.location);

    }
    getCountry(a) {
        this.location.country = a;
        console.log(this.location);
    }
    getLat(a) {
        this.location.lat = a;
        console.log(this.location);
    }
    getLng(a) {
        this.location.lng = a;
        console.log('Location is ready!');
        console.log(this.location);
        this.zone.run(() => this.setLocation.emit(this.location))
    }

}
