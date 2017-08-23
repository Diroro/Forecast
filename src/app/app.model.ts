export class CurrentlyDataPointObject {
    "time": number;
    "summary": string;
    "icon": string;
    "precipIntensity": number;
    "precipProbability": number;
    "temperature": number;
    "apparentTemperature": number;
    "dewPoint": number;
    "humidity": number;
    "windSpeed": number;
    "windGust": number;
    "windBearing": number;
    "cloudCover": number;
    "pressure": number;
    "ozone": number;
    "uvIndex": number;
}

export class DailyDataPointObject {
    "time": number;
    "summary": string;
    "icon": string;
    "sunriseTime": number;
    "sunsetTime": number;
    "moonPhase": number;
    "precipIntensity": number;
    "precipIntensityMax": number;
    "precipProbability": number;
    "temperatureMin": number;
    "temperatureMinTime": number;
    "temperatureMax": number;
    "temperatureMaxTime": number;
    "apparentTemperatureMin": number;
    "apparentTemperatureMinTime": number;
    "apparentTemperatureMax": number;
    "apparentTemperatureMaxTime": number;
    "dewPoint": number;
    "humidity": number;
    "windSpeed": number;
    "windGust": number;
    "windGustTime": number;
    "windBearing": number;
    "cloudCover": number;
    "pressure": number;
    "ozone": number;
    "uvIndex": number;
    "uvIndexTime": number;

}
export class DailyDataBlockObject {
    "summary": string;
    "icon": string;
    "data": DailyDataPointObject[];

}
export class CurrentAndDailyWeather {
    latitude: number;
    longitude: number;
    timezone: string;
    offset: number;
    currently: CurrentlyDataPointObject;
    daily: DailyDataBlockObject;
}

export class CurrentWeather {
    latitude: number;
    longitude: number;
    timezone: string;
    offset: number;
    currently: CurrentlyDataPointObject;
}
export class Location {
    city: string;
    country: string;
    lat: string;
    lng: string;
}

export class LocationsList {
    data: Array<Location>;
    shouldBeLoaded: number;
}