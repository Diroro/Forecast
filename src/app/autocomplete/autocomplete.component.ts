
import { Component, OnInit, Input, Output, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-autocomplete',
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.css'],
    // host: { '(document:click)': 'handleClick($event)' }
})
export class AutocompleteComponent implements OnInit {
    // public query = '';
    // public countries = ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus",
    //     "Belgium", "Bosnia & Herzegovina", "Bulgaria", "Croatia", "Cyprus",
    //     "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia",
    //     "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo",
    //     "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Malta",
    //     "Moldova", "Monaco", "Montenegro", "Netherlands", "Norway", "Poland",
    //     "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia",
    //     "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom", "Vatican City"];
    // public filteredList = [];
    // public elementRef;
    public address='';
    public location ={
        city: '',
        country: '',
        lat: '',
        lng: ''
    }
    constructor(myElement: ElementRef) {
        // this.elementRef = myElement;
    }
    ngOnInit() {
    }

    @Output() setLocation = new EventEmitter();

    getAddress(a){
        console.log('Address',a);
        // console.log('Location: ');
        // console.log(this.location);
        
    }
    getCity(a){
        this.location.city=a;
        console.log(this.location);
        
    }
    getCountry(a){
        this.location.country=a;
        console.log(this.location);
    }
    getLat(a){
         this.location.lat=a;
         console.log(this.location);
    }
    getLng(a){
         this.location.lng=a;
          console.log(this.location);
         this.setLocation.emit(this.location);
    }

}
