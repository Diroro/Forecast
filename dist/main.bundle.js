webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    return LoadingComponent;
}());
LoadingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-loading',
        template: __webpack_require__(170),
        styles: [__webpack_require__(162)]
    }),
    __metadata("design:paramtypes", [])
], LoadingComponent);

//# sourceMappingURL=loading.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__current_location_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationComponent = (function () {
    function LocationComponent(cls) {
        this.cls = cls;
        this.isEditModeOn = false;
        this.isLocationChanged = false;
        this.changeLocation = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* EventEmitter */]();
    }
    LocationComponent.prototype.ngOnInit = function () {
        this.loadCurrentLocation();
    };
    LocationComponent.prototype.changeEditMode = function () {
        this.isEditModeOn = !this.isEditModeOn;
    };
    LocationComponent.prototype.loadCurrentLocation = function () {
        var _this = this;
        this.cls.getCurrentLocation().then(function (location) {
            _this.location = location;
            _this.changeLocation.emit(location);
            _this.isLocationChanged = false;
        })
            .catch(this.handleError);
    };
    LocationComponent.prototype.handleChangingLocation = function (Location) {
        this.location = Location;
        this.changeLocation.emit(Location);
        this.changeEditMode();
        this.isLocationChanged = true;
    };
    LocationComponent.prototype.handleError = function (e) {
        return e;
    };
    return LocationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_0" /* Output */])(),
    __metadata("design:type", Object)
], LocationComponent.prototype, "changeLocation", void 0);
LocationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({
        selector: 'app-location',
        template: __webpack_require__(171),
        styles: [__webpack_require__(163)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__current_location_service__["a" /* CurrentLocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__current_location_service__["a" /* CurrentLocationService */]) === "function" && _a || Object])
], LocationComponent);

var _a;
//# sourceMappingURL=location.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__weather_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = (function () {
    function MainComponent(cd, ws) {
        this.cd = cd;
        this.ws = ws;
        this.imgPath = '../images/darksky.png';
        this.bg = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* EventEmitter */]();
        this.isWeatherLoaded = false;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.handleChangeLocation = function (changedLocation) {
        var _this = this;
        this.isWeatherLoaded = false;
        this.location = changedLocation;
        this.ws.getCurrentAndDailyWether(this.location.lat, this.location.lng)
            .then(function (weather) {
            _this.weather = weather;
            _this.isWeatherLoaded = true;
            _this.bg.emit(_this.getBackgroundByKey(_this.weather));
        })
            .catch(function () { return _this.handleError(); });
    };
    MainComponent.prototype.handleError = function () {
    };
    MainComponent.prototype.getBackgroundByKey = function (weather) {
        var sun = 'linear-gradient(to top, #e85a8a, #faae56)';
        var moon = 'linear-gradient(to top, #141e30, #243b55)';
        var clouds = 'linear-gradient(to top, #656f8a, #c7cdd8)';
        var nightClouds = 'linear-gradient(to top, #37393d, #101b30)';
        var lightClouds = 'linear-gradient(to top, #4ca1af, #c4e0e5)';
        var snow = 'linear-gradient(to top, #085078, #85d8ce)';
        var rain = 'linear-gradient(to top, #2c3e50, #bdc3c7)';
        var clear = 'linear-gradient(to top, #2f80ed, #56ccf2)';
        var backgrounds = {
            "clear-day": weather.currently.temperature > 15 ? sun : clear,
            "clear-night": moon,
            "cloudy": clouds,
            "partly-cloudy-day": clouds,
            "partly-cloudy-night": nightClouds,
            "rain": rain,
            "snow": snow,
            "fog": nightClouds,
            "wind": lightClouds
        };
        return backgrounds[weather.currently.icon];
    };
    return MainComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_0" /* Output */])(),
    __metadata("design:type", Object)
], MainComponent.prototype, "bg", void 0);
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__(172),
        styles: [__webpack_require__(164)],
        providers: [__WEBPACK_IMPORTED_MODULE_0__weather_service__["a" /* WeatherService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["Z" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["Z" /* ChangeDetectorRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__weather_service__["a" /* WeatherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__weather_service__["a" /* WeatherService */]) === "function" && _b || Object])
], MainComponent);

var _a, _b;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WeatherComponent = (function () {
    function WeatherComponent() {
        this.iconSize = 'large';
    }
    WeatherComponent.prototype.ngOnInit = function () {
        var windBearing = this.currentWeather.windBearing || -1;
        var windBearingString = windBearing < 0 ? '' :
            windBearing < 23 ? '🡳' :
                windBearing < 68 ? '🡷' :
                    windBearing < 113 ? '🡰' :
                        windBearing < 158 ? '🡴' :
                            windBearing < 203 ? '🡱' :
                                windBearing < 248 ? '🡵' :
                                    windBearing < 293 ? '🡲' :
                                        windBearing < 338 ? '🡶' :
                                            '🡳';
        this.weather = {
            temperature: Math.round(this.currentWeather.temperature),
            icon: this.currentWeather.icon,
            summary: this.currentWeather.summary,
            time: this.currentWeather.time,
            windBearing: windBearingString,
            windSpeed: Math.round(this.currentWeather.windSpeed),
            pressure: Math.round(this.currentWeather.pressure * 0.75)
        };
    };
    return WeatherComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], WeatherComponent.prototype, "currentWeather", void 0);
WeatherComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-weather',
        template: __webpack_require__(173),
        styles: [__webpack_require__(165)]
    }),
    __metadata("design:paramtypes", [])
], WeatherComponent);

//# sourceMappingURL=weather.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "\r\n*{\r\n   \r\n\tbox-sizing: border-box;\r\n\tmargin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.wrapper{    \r\n    display: inline-block;\r\n    width: 100%;\r\n    min-height: 100%; \r\n    min-width: 450px;\r\n    position: relative;\r\n    padding-bottom: 55px;\r\n     overflow-y:hidden;\r\n     vertical-align: middle;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "input{\r\n    font-size: 16px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "\r\n.table{\r\n   width: 100%;\r\n   border:none;\r\n \r\n}\r\n.table-row{\r\n    padding: 10px;\r\n}\r\n\r\n tr:nth-child(odd){\r\n   \r\n    background-color: rgba(0,0,0,0.2)\r\n}\r\ntr:nth-child(even) , thead{\r\n    background-color: rgba(0,0,0,0.4)\r\n  \r\n}\r\n\r\n.cell{\r\n    padding: 5px;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n.table-header{\r\n    font-size: 14px;\r\n  \r\n} \r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".weather-icon{\r\n    vertical-align: middle;\r\n    display: inline-block;\r\n}\r\n.weather-icon-wrapper{\r\n   \r\n    display: inline-block;\r\n    background: white;\r\n    border-color: rgba(0, 0, 0, 0);\r\n\r\n}\r\n.icon-small{\r\n    height: 30px;\r\n    width: 30px;\r\n}\r\n\r\n.wrapper-small{\r\n    border-radius: 6px;\r\n    padding:3px;\r\n}\r\n\r\n.clear-night-small{\r\n    background: rgba(0, 0, 0, 0) url(" + __webpack_require__(67) + ") no-repeat scroll center center / 30px auto;\r\n \r\n}\r\n\r\n.clear-day-small{\r\n     background:  url(" + __webpack_require__(71) + ") no-repeat scroll center center / 30px auto;\r\n \r\n}\r\n\r\n.fog-small{\r\n     background: rgba(0, 0, 0, 0) url(" + __webpack_require__(65) + ") no-repeat scroll center center / 30px auto;\r\n \r\n}\r\n.rain-small{\r\n     background: rgba(0, 0, 0, 0) url(" + __webpack_require__(68) + ") no-repeat scroll center center / 30px auto;\r\n \r\n}\r\n.snow-small{\r\n     background: rgba(0, 0, 0, 0) url(" + __webpack_require__(69) + ") no-repeat scroll center center / 30px auto;\r\n \r\n}\r\n.wind-small{\r\n     background: rgba(0, 0, 0, 0) url(" + __webpack_require__(72) + ") no-repeat scroll center center / 30px auto;\r\n \r\n}\r\n.cloudy-small{\r\n     background: rgba(0, 0, 0, 0) url(" + __webpack_require__(64) + ") no-repeat scroll center center / 30px auto;\r\n}\r\n.partly-cloudy-night-small{\r\n    background: rgba(0, 0, 0, 0) url(" + __webpack_require__(66) + ") no-repeat scroll center center / 30px auto;\r\n \r\n}\r\n\r\n.partly-cloudy-day-small{\r\n     background: rgba(0, 0, 0, 0) url(" + __webpack_require__(70) + ") no-repeat scroll center center / 30px auto;\r\n \r\n}\r\n.icon-large{\r\n    height: 70px;\r\n    width: 70px;\r\n}\r\n\r\n.wrapper-large{\r\n    border-radius: 14px;\r\n    padding:7px;\r\n}\r\n\r\n.clear-night-large{\r\n    background: rgba(0, 0, 0, 0) url(" + __webpack_require__(67) + ") no-repeat scroll center center / 70px auto;\r\n \r\n}\r\n\r\n.clear-day-large{\r\n     background:  url(" + __webpack_require__(71) + ") no-repeat scroll center center / 70px auto;\r\n \r\n}\r\n\r\n.fog-large{\r\n     background: rgba(0, 0, 0, 0) url(" + __webpack_require__(65) + ") no-repeat scroll center center / 70px auto;\r\n \r\n}\r\n.rain-large{\r\n     background: rgba(0, 0, 0, 0) url(" + __webpack_require__(68) + ") no-repeat scroll center center / 70px auto;\r\n \r\n}\r\n.snow-large{\r\n     background: rgba(0, 0, 0, 0) url(" + __webpack_require__(69) + ") no-repeat scroll center center / 70px auto;\r\n \r\n}\r\n.wind-large{\r\n     background: rgba(0, 0, 0, 0) url(" + __webpack_require__(72) + ") no-repeat scroll center center / 70px auto;\r\n \r\n}\r\n.cloudy-large{\r\n     background: rgba(0, 0, 0, 0) url(" + __webpack_require__(64) + ") no-repeat scroll center center / 70px auto;\r\n}\r\n.partly-cloudy-night-large{\r\n    background: rgba(0, 0, 0, 0) url(" + __webpack_require__(66) + ") no-repeat scroll center center / 70px auto;\r\n \r\n}\r\n\r\n.partly-cloudy-day-large{\r\n     background: rgba(0, 0, 0, 0) url(" + __webpack_require__(70) + ") no-repeat scroll center center / 70px auto;\r\n \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".loading{\r\n  \r\n    position:fixed;\r\n    top:0;\r\n    left:0;\r\n    height:100%;\r\n    width: 100%;\r\n    z-index: 999;\r\n    background-color: rgba(0,0,0,0.70);\r\n    \r\n}\r\nspan{\r\n    display: inline-block;\r\n      color: white;\r\n    font-size: 40px;\r\n    width: 100%;\r\n    text-align: center;\r\n    font-family: 'PT Sans', sans-serif;\r\n    margin-top: 200px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=PT+Sans);", ""]);

// module
exports.push([module.i, "*{\r\n   \r\n\tbox-sizing: border-box;\r\n\tmargin: 0;\r\n    padding: 0;\r\n}\r\n.location-container{\r\n    width: 100%;\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding: 10px;\r\n    font-family: 'PT Sans', sans-serif;\r\n}\r\n.current-location{\r\n    font-size: 36px;\r\n\r\n}\r\n\r\n.location-item{\r\n     color: white;\r\n     margin: 5px;\r\n    line-height: 30px;\r\n}\r\nbutton{\r\n    display:block;\r\n    background: transparent;\r\n    border:0;\r\n    /* border: 1px solid black;\r\n    border-radius: 5px; */\r\n    font-size: 20px;\r\n    padding: 0 5px;\r\n}\r\nbutton:hover{\r\n    text-decoration: underline;\r\n}\r\nbutton:focus{\r\n   outline:none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "\r\n* {\r\n\tbox-sizing: border-box;\r\n\tmargin: 0;\r\n    padding: 0;\r\n}\r\nheader{\r\n    color: white;\r\n    font-size:20px;\r\n    margin-top: 10px;\r\n}\r\nfooter{\r\n    position:absolute;\r\n    bottom: 0;\r\n    height:50px;\r\n    border-color: rgba(0, 0, 0, 0);\r\n}\r\n.footer-img{\r\n    background: rgba(0,0,0,0) url(" + __webpack_require__(198) + ")  center center / auto 50px;\r\n    height: 50px;\r\n    width:200px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n.block {\r\n    font-family: 'PT Sans', sans-serif;\r\n\twidth: 100%;\r\n    text-align: center;\r\n}\r\n.section{\r\n    border: 1px solid rgba(255,255,255,0.5);\r\n    border-radius: 5px;\r\n    margin: 5px;\r\n    min-width:400px;\r\n    font-family: 'PT Sans', sans-serif;\r\n}\r\n.weather{\r\n    background-color: rgba(0,0,0,0.2)\r\n}\r\n.section-container{\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    \r\n  \r\n}\r\n@media screen and (max-width: 860px){ \r\n   .section-container{\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n     -webkit-box-align: stretch;\r\n         -ms-flex-align: stretch;\r\n             align-items: stretch;\r\n  \r\n}\r\n } \r\n   @media screen and (min-width: 860px) { \r\n    .section{\r\n        width:50%;\r\n    }\r\n} \r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "\r\n.block{\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n.info{\r\n    vertical-align: middle;\r\n    color: white;\r\n    margin: 10px 0;\r\n}\r\n.info-large{\r\n    font-size: 40px;\r\n}\r\n.info-small{\r\n    font-size: 30px;\r\n}\r\n.info-very-large{\r\n    font-size: 60px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{'background':background}\" class='wrapper'>\r\n    <app-main (bg)=getBg($event)></app-main>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = "\r\n<input type=\"text\"\r\n    [options]=\"{types: ['(cities)']}\"\r\n   (setAddress) = \"getAddress($event)\"\r\n    (city)= 'getCity($event)'\r\n    (country)='getCountry($event)'\r\n    (lat)='getLat($event)' \r\n    (lng)='getLng($event)'\r\n    id=\"autocomplete\"\r\n ng2-google-place-autocomplete/> "

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "<table class='table'>\r\n    <thead>\r\n        <th class='table-header cell'>Day</th>\r\n        <th class='table-header cell'>Weather</th>\r\n        <th class='table-header cell'>Temp. max</th>\r\n        <th class='table-header cell'>Temp. min</th>\r\n        <th class='table-header cell'>Precip prob. %</th>\r\n        <th class='table-header cell'>Wind Bearing</th>\r\n        <th class='table-header cell'>Wind Speed</th>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor='let day of forecast' class='table-row row'>\r\n            <td class='cell'>\r\n                {{day.time}}\r\n            </td>\r\n            <td class='cell'>\r\n                <app-icon [size]='iconSize' [icon]='day.icon'></app-icon>\r\n            </td>\r\n            <td class='cell'>\r\n                {{day.temperatureMax}}&deg; C\r\n            </td>\r\n            <td class='cell'>\r\n                {{day.temperatureMin}}&deg; C\r\n            </td>\r\n            <td class='cell'>\r\n                {{day.precipProbability}} %\r\n            </td>\r\n            <td class='cell'>\r\n                {{day.windBearing}}\r\n            </td>\r\n            <td class='cell'>\r\n                {{day.windSpeed}} m/s\r\n            </td>\r\n\r\n        </tr>\r\n    </tbody>\r\n</table>"

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<div class='weather-icon-wrapper wrapper-{{iconSize}}'>\n    <div class='weather-icon icon-{{iconSize}}' ngClass='{{icon+\"-\"+iconSize}}'>\n    </div>\n</div>"

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<div class='loading'>\n    <span>Loading...</span>\n</div>"

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "<div class='location-container'>\r\n    <div *ngIf='location' class='location-item current-location '>\r\n        {{location.city}}, {{location.country}}\r\n    </div>\r\n    <button class='location-item' *ngIf='isLocationChanged' (click)='loadCurrentLocation()'>Back to current Location</button>\r\n\r\n    <button class='location-item' *ngIf='!isEditModeOn' (click)='changeEditMode()'>Change Location</button>\r\n    <app-autocomplete class='location-item' *ngIf='isEditModeOn' (setLocation)='handleChangingLocation($event)'>\r\n    </app-autocomplete>\r\n</div>"

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "<header class='block'>\r\n    Weather Forecast\r\n</header>\r\n<app-location  (changeLocation)='handleChangeLocation($event)'></app-location>\r\n<div class='section-container'>\r\n    <div class='section weather'>\r\n        <app-weather [currentWeather]='weather.currently' *ngIf='isWeatherLoaded'></app-weather>\r\n    </div>\r\n    <div class='section'>\r\n        <app-forecast [dailyForecast]='weather.daily' *ngIf='isWeatherLoaded'></app-forecast>\r\n    </div>\r\n</div>\r\n<footer class='block'>\r\n    <a href=\"https://darksky.net/poweredby/\" target=\"_blank\">\r\n        <div class='footer-img'></div>\r\n    </a>\r\n</footer>\r\n <div *ngIf=\"!isWeatherLoaded\">\r\n<app-loading ></app-loading>\r\n</div> "

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports = "<div class='block'>\r\n    <p class='info info-small'>\r\n        TODAY\r\n    </p>\r\n    <app-icon [size]='iconSize' [icon]='weather.icon'></app-icon>\r\n    <span class='info info-very-large'>  {{weather.summary}}</span>\r\n</div>\r\n<div class='block'>\r\n    <div class='info info-very-large'>\r\n        {{weather.temperature}}&deg; С\r\n    </div>\r\n</div>\r\n<div class='info info-large block'>\r\n    {{weather.pressure}} mm Hg\r\n\r\n</div>\r\n<div class='info info-large block'>\r\n    {{weather.windSpeed}} m/s {{weather.windBearing}}\r\n</div>"

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "darksky.7021f77ca79d47c7c171.png";

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(85);


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentLocationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CurrentLocationService = (function () {
    function CurrentLocationService(http) {
        this.http = http;
        this.url = 'https://freegeoip.net/json/';
    }
    CurrentLocationService.prototype.getCurrentLocation = function () {
        return this.http
            .get(this.url)
            .toPromise()
            .then(function (response) {
            var resp = response.json();
            return {
                city: resp.city,
                country: resp.country_name,
                lat: resp.latitude,
                lng: resp.longitude
            };
        })
            .catch(this.handleError);
    };
    CurrentLocationService.prototype.handleError = function () { };
    ;
    return CurrentLocationService;
}());
CurrentLocationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], CurrentLocationService);

var _a;
//# sourceMappingURL=current-location.service.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CurrentlyDataPointObject = (function () {
    function CurrentlyDataPointObject() {
    }
    return CurrentlyDataPointObject;
}());
var DailyDataPointObject = (function () {
    function DailyDataPointObject() {
    }
    return DailyDataPointObject;
}());
var DailyDataBlockObject = (function () {
    function DailyDataBlockObject() {
    }
    return DailyDataBlockObject;
}());
var CurrentAndDailyWeather = (function () {
    function CurrentAndDailyWeather() {
    }
    return CurrentAndDailyWeather;
}());
var WeatherService = (function () {
    function WeatherService(jsonp) {
        this.jsonp = jsonp;
        this.url = 'https://api.darksky.net/forecast';
        this.key = 'd4ffe57bcc8981eddc567d513733ee34';
    }
    WeatherService.prototype.getCurrentAndDailyWether = function (lat, lng) {
        // // let opt: RequestOptions = {headers:[{'Origin': 'http://localhost'}], method:'PUT'}
        // let headers = new Headers({
        //     Cookie: 'units=si; latlon=55.75%2C37.6166; _ga=GA1.2.1762134973.1501663161; _gid=GA1.2.1040199553.1501663161'
        // }
        // );
        // let options = new RequestOptions({ headers: headers });
        // let options = {'Origin': 'http://localhost'}
        console.log("starting");
        return this.jsonp
            .get(this.url + '/' + this.key + '/'
            + lat + ',' + lng +
            '?units=si&exclude=minutely,hourly,alerts,flags&callback=JSONP_CALLBACK')
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    WeatherService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return WeatherService;
}());
WeatherService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Jsonp */]) === "function" && _a || Object])
], WeatherService);

var _a;
//# sourceMappingURL=weather.service.js.map

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "clouds.a23003aa3734d20215be.svg";

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mist.6a33a3bd3d947c36315b.svg";

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "moon-clouds.1ad0a201c32413f65e7d.svg";

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "moon.b7d1767f706fe3b212da.svg";

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "rain.c7a1d258ca5b0a3e2dec.svg";

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "snow.f42028805cf821621a84.svg";

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sun-clouds.1222aedecb3d54f6ea50.svg";

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sun.82256538f77b711d6e8e.svg";

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "wind.b9186cf3aa74cd6972d9.svg";

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 84;


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(104);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.getBg = function (bg) {
        this.background = bg;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(166),
        styles: [__webpack_require__(158)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__weather_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__current_location_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__location_location_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__weather_weather_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__forecast_forecast_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_main_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__autocomplete_autocomplete_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_google_place_autocomplete__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__icon_icon_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__loading_loading_component__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__location_location_component__["a" /* LocationComponent */],
            __WEBPACK_IMPORTED_MODULE_8__weather_weather_component__["a" /* WeatherComponent */],
            __WEBPACK_IMPORTED_MODULE_9__forecast_forecast_component__["a" /* ForecastComponent */],
            __WEBPACK_IMPORTED_MODULE_10__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_11__autocomplete_autocomplete_component__["a" /* AutocompleteComponent */],
            __WEBPACK_IMPORTED_MODULE_13__icon_icon_component__["a" /* IconComponent */],
            __WEBPACK_IMPORTED_MODULE_14__loading_loading_component__["a" /* LoadingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_12_ng2_google_place_autocomplete__["a" /* GooglePlaceModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* JsonpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_1__current_location_service__["a" /* CurrentLocationService */], __WEBPACK_IMPORTED_MODULE_0__weather_service__["a" /* WeatherService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompleteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutocompleteComponent = (function () {
    function AutocompleteComponent(myElement, zone) {
        this.zone = zone;
        this.address = '';
        this.location = {
            city: '',
            country: '',
            lat: '',
            lng: ''
        };
        this.setLocation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    AutocompleteComponent.prototype.ngOnInit = function () {
    };
    AutocompleteComponent.prototype.getAddress = function (a) {
        console.log('Address', a);
    };
    AutocompleteComponent.prototype.getCity = function (a) {
        this.location.city = a;
        console.log(this.location);
    };
    AutocompleteComponent.prototype.getCountry = function (a) {
        this.location.country = a;
        console.log(this.location);
    };
    AutocompleteComponent.prototype.getLat = function (a) {
        this.location.lat = a;
        console.log(this.location);
    };
    AutocompleteComponent.prototype.getLng = function (a) {
        var _this = this;
        this.location.lng = a;
        console.log('Location is ready!');
        console.log(this.location);
        this.zone.run(function () { return _this.setLocation.emit(_this.location); });
    };
    return AutocompleteComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", Object)
], AutocompleteComponent.prototype, "setLocation", void 0);
AutocompleteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-autocomplete',
        template: __webpack_require__(167),
        styles: [__webpack_require__(159)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* NgZone */]) === "function" && _b || Object])
], AutocompleteComponent);

var _a, _b;
//# sourceMappingURL=autocomplete.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForecastComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForecastComponent = (function () {
    function ForecastComponent() {
        this.forecast = [];
        this.iconSize = 'small';
    }
    ForecastComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dailyForecast.data.map(function (item) {
            var windBearing = item.windBearing || -1;
            var windBearingString = windBearing < 0 ? '' :
                windBearing < 23 ? '🡳' :
                    windBearing < 68 ? '🡷' :
                        windBearing < 113 ? '🡰' :
                            windBearing < 158 ? '🡴' :
                                windBearing < 203 ? '🡱' :
                                    windBearing < 248 ? '🡵' :
                                        windBearing < 293 ? '🡲' :
                                            windBearing < 338 ? '🡶' :
                                                '🡳';
            var date = new Date(item.time * 1000);
            var day = {
                time: date.toDateString().slice(0, 10),
                temperatureMax: Math.round(item.temperatureMax),
                temperatureMin: Math.round(item.temperatureMin),
                pressure: Math.round(item.pressure * 0.75),
                summary: item.summary,
                icon: item.icon,
                precipProbability: item.precipProbability,
                windBearing: windBearingString,
                windSpeed: Math.round(item.windSpeed)
            };
            _this.forecast.push(day);
        });
        console.log('Daily Forecast:');
        console.log(this.forecast);
    };
    return ForecastComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], ForecastComponent.prototype, "dailyForecast", void 0);
ForecastComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-forecast',
        template: __webpack_require__(168),
        styles: [__webpack_require__(160)]
    }),
    __metadata("design:paramtypes", [])
], ForecastComponent);

// apparentTemperature
// :
// 19.88   // in celcey degrees
// cloudCover
// :  покрытие облаками в процентах
// 0.27
// dewPoint точка росы??
// :
// 14.99
// humidity  туманность
// :
// 0.73
// icon
// :
// "partly-cloudy-day"
// ozone
// :
// 285.89  
// precipIntensity
// :
// 0
// precipProbability
// :
// 0
// pressure
// :
// 1016.06
// summary
// :
// "Partly Cloudy"
// temperature
// :
// 19.88
// time
// :
// 1502092013
// uvIndex
// :
// 4
// visibility
// :
// 10.01
// windBearing
// :
// 347
// windGust
// :
// 5.32
// windSpeed
// :
// 2.99 
//# sourceMappingURL=forecast.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconComponent = (function () {
    function IconComponent() {
    }
    IconComponent.prototype.ngOnInit = function () {
        //   this.bgColor=this.backgroundColor;
        this.iconSize = this.size;
        this.iconName = this.icon;
        console.log(this.iconName + '-' + this.iconSize);
    };
    return IconComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], IconComponent.prototype, "size", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], IconComponent.prototype, "icon", void 0);
IconComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-icon',
        template: __webpack_require__(169),
        styles: [__webpack_require__(161)]
    }),
    __metadata("design:paramtypes", [])
], IconComponent);

//# sourceMappingURL=icon.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.bundle.js.map