import { LocationStorageService } from './services/location-storage.service';
import { WeatherService } from './services/weather.service';
import { CurrentLocationService } from './services/current-location.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { WeatherComponent } from './weather/weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { MainComponent } from './main/main.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { GooglePlaceModule } from 'ng2-google-place-autocomplete';
import { IconComponent } from './icon/icon.component';
import { LoadingComponent } from './loading/loading.component';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
    declarations: [
        AppComponent,
        LocationComponent,
        WeatherComponent,
        ForecastComponent,
        MainComponent,
        AutocompleteComponent,
        IconComponent,
        LoadingComponent,
        LocationsListComponent,
        ErrorMessageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        GooglePlaceModule,
        JsonpModule
    ],
    providers: [CurrentLocationService, WeatherService, LocationStorageService],
    bootstrap: [AppComponent]
})
export class AppModule { }
