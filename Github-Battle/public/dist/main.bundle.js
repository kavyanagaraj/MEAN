webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ranking_ranking_component__ = __webpack_require__("../../../../../src/app/ranking/ranking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__results_results_component__ = __webpack_require__("../../../../../src/app/results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__battle_battle_component__ = __webpack_require__("../../../../../src/app/battle/battle.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'battle', component: __WEBPACK_IMPORTED_MODULE_4__battle_battle_component__["a" /* BattleComponent */] },
    { path: 'ranking', component: __WEBPACK_IMPORTED_MODULE_2__ranking_ranking_component__["a" /* RankingComponent */] },
    { path: 'results', component: __WEBPACK_IMPORTED_MODULE_3__results_results_component__["a" /* ResultsComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2, p{\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.right-align{\n    margin-left: 50%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Github Battle</h2>\n<p class=\"right-align\">\n<a [routerLink]=\"['/battle']\">Battle</a> |\n<a [routerLink]=\"['/ranking']\">Ranking</a>\n</p>\n<router-outlet></router-outlet>  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ranking_ranking_component__ = __webpack_require__("../../../../../src/app/ranking/ranking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__results_results_component__ = __webpack_require__("../../../../../src/app/results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__battle_battle_component__ = __webpack_require__("../../../../../src/app/battle/battle.component.ts");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__ranking_ranking_component__["a" /* RankingComponent */],
            __WEBPACK_IMPORTED_MODULE_8__results_results_component__["a" /* ResultsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__battle_battle_component__["a" /* BattleComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__http_service__["a" /* HttpService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/battle/battle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#left{\n    border: 2px solid black;\n    text-align: center;\n    padding: 10px;\n    height: 300px;\n}\n#battle{\n    display: block;\n    width: 90%;\n    /*margin: 20px;*/\n    /*text-align: center;*/\n}\n\n#battleDiv{\n    margin: 20px;\n}\n\n#red{\n    color: red;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/battle/battle.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class = \"container\">\n    <div class = \"row\">\n      <div class = \"col s5\" id = \"left\">\n      <h3 class = 'center-align'>Player 1</h3>\n      <form (submit) = getUser(user1) #form1 = 'ngForm' *ngIf = \"!player1exists\">\n        <label for=\"uname1\">Github Username</label>\n        <input type=\"text\" name=\"uname1\" value=\"\" id = \"uname1\"\n        required\n        [(ngModel)] = 'user1.username'\n        #uname1 = 'ngModel'\n        >\n        <small id = \"red\" *ngIf =\"user1.error\"> Github Username doesn't exist, try again </small>\n        <input type=\"submit\"  class=\"waves-effect waves-light btn\" name=\"submit\" value=\"Get User\">\n      </form>\n      <div *ngIf = \"player1exists\">\n        <img  [src] = 'player1?.avatar_url' height=\"100\" width=\"100\" alt=\"\">\n      <p>{{player1?.name}}</p>\n      </div>\n    </div>\n    <div class = \"col s5 offset-s2\" id = \"left\">\n      <h3 class = 'center-align'>Player 2</h3>\n      <form (submit) = getUser(user2) #form2 = 'ngForm' *ngIf = \"!player2exists\">\n        <label for=\"uname2\">Github Username</label>\n        <input type=\"text\" name=\"uname2\" value=\"\" id = \"uname2\"\n        required\n        [(ngModel)] = 'user2.username'\n        #uname2 = 'ngModel'\n        >\n         <small id = \"red\" *ngIf =\"user2.error\"> Github Username doesn't exist, try again </small>\n        <input type=\"submit\" class=\"waves-effect waves-light btn\" name=\"submit\" value=\"Get User\">\n      </form>\n      <div *ngIf = \"player2exists\">\n        <img  [src] = 'player2?.avatar_url'  height=\"100\" width=\"100\" alt=\"\">\n      <p>{{player2?.name}}</p>\n      </div>\n    </div>\n    </div>\n\n    <div *ngIf = \"player2exists && player1exists\" id = \"battleDiv\" class = \"row\">\n    <button class = \"col s10 offset-s2\" (click) = \"updatePlayers()\" id = \"battle\" [routerLink]=\"['/results']\" class=\"waves-effect waves-light btn orange\" type=\"submit\">Battle</button>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/battle/battle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BattleComponent; });
/* unused harmony export Player */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BattleComponent = (function () {
    function BattleComponent(_httpService) {
        this._httpService = _httpService;
        this.user1 = { username: "", error: false };
        this.user2 = { username: "", error: false };
        this.url = "";
        this.players = [];
        this.player1 = new Player();
        this.player2 = new Player();
        this.player1exists = false;
        this.player2exists = false;
    }
    BattleComponent.prototype.ngOnInit = function () {
    };
    BattleComponent.prototype.getUser = function (user) {
        var _this = this;
        console.log(user);
        this.url = 'https://api.github.com/users/' + user.username;
        this._httpService.retrieveUser(this.url)
            .then(function (tasks) {
            console.log(tasks);
            console.log("user1", _this.user1);
            console.log("user2", _this.user2);
            if (user == _this.user1) {
                _this.user1.error = false;
                _this.player1.name = tasks.login;
                _this.player1.avatar_url = tasks.avatar_url;
                _this.player1.score = (tasks.public_repos + tasks.followers) * 12;
                console.log("Player 1", _this.player1);
                _this.player1exists = true;
            }
            else {
                _this.user2.error = false;
                _this.player2.name = tasks.login;
                _this.player2.avatar_url = tasks.avatar_url;
                _this.player2.score = (tasks.public_repos + tasks.followers) * 12;
                console.log("Player 2", _this.player2);
                _this.player2exists = true;
            }
            ;
        })
            .catch(function (err) {
            console.log("err", err);
            if (user == _this.user1) {
                _this.user1.error = true;
            }
            else {
                _this.user2.error = true;
            }
        });
    };
    BattleComponent.prototype.updatePlayers = function () {
        this.players.push(this.player1);
        this.players.push(this.player2);
        this._httpService.updatePlayers(this.players);
        this._httpService.create(this.player1)
            .then(function (data) { console.log(data); })
            .catch(function (err) { console.log(err); });
        this._httpService.create(this.player2)
            .then(function (data) { console.log(data); })
            .catch(function (err) { console.log(err); });
    };
    return BattleComponent;
}());
BattleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-battle',
        template: __webpack_require__("../../../../../src/app/battle/battle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/battle/battle.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object])
], BattleComponent);

var Player = (function () {
    function Player() {
    }
    return Player;
}());

var _a;
//# sourceMappingURL=battle.component.js.map

/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
        this.observedPlayers = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    HttpService.prototype.retrieveUser = function (url) {
        return this._http.get(url).map(function (data) { return data.json(); }).toPromise();
    };
    HttpService.prototype.retrieveAll = function () {
        return this._http.get("/players")
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.create = function (item) {
        return this._http.post("/players", item)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.retrieveOne = function (id) {
        return this._http.get("/items/" + id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.update = function (item, id) {
        return this._http.put("/items/" + id, item)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.updatePlayers = function (players) {
        this.observedPlayers.next(players);
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/ranking/ranking.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#profile{\n    border: 1px solid black;\n    margin: 20px 10px;;\n    padding: 10px;\n    text-align: center;\n}\n\n#row1{\n    border: 1px solid black;\n    margin: 20px;\n}\n\n#main{\n    overflow: scroll;\n    height: 400px;\n}\n\n#score{\n\n    margin-top: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ranking/ranking.component.html":
/***/ (function(module, exports) {

module.exports = "<div id = \"main\">\n  <div *ngFor = \"let player of players\" class = \"row\" id = \"row1\">\n    <div class = \"col s5\" id = \"profile\">\n        <img  src = '{{player.avatar_url}}'  height=\"80\" width=\"70\" alt=\"\">\n        <p>{{player.name}}</p>\n    </div>\n    <div class = \"col s4 offset-s2\" id = \"score\">\n      <strong> <p>Score: {{player.score}}</p></strong>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ranking/ranking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RankingComponent = (function () {
    function RankingComponent(_httpService) {
        this._httpService = _httpService;
        this.players = [];
    }
    RankingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.retrieveAll()
            .then(function (data) { console.log(data); _this.players = data; })
            .catch(function (err) { console.log(err); });
    };
    return RankingComponent;
}());
RankingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-ranking',
        template: __webpack_require__("../../../../../src/app/ranking/ranking.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ranking/ranking.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object])
], RankingComponent);

var _a;
//# sourceMappingURL=ranking.component.js.map

/***/ }),

/***/ "../../../../../src/app/results/results.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#red{\n    color : red;\n}\n\n#green{\n    color: green;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/results/results.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <div class = \"row\">\n  <div class = \"col s6\">\n    <h4 id = \"green\">1st Place</h4>\n    <p id = \"green\">{{winner.name}} (Score: {{winner.score}})</p>\n\n    <h4 id = \"red\">2nd Place</h4>\n    <p id = \"red\">{{loser.name}} (Score: {{loser.score}})</p>\n  </div>\n\n  <div class = \"col s6\">\n    <img [src] ='winner.avatar_url' alt=\"\" height = \"300\" width = \"300\">\n  </div>\n  \n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/results/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultsComponent = (function () {
    function ResultsComponent(_httpService) {
        var _this = this;
        this._httpService = _httpService;
        this.players = [];
        this.subscription = _httpService.observedPlayers.subscribe(function (updatePlayers) {
            _this.players = updatePlayers;
            console.log("results players", _this.players);
            if (_this.players[0].score > _this.players[1].score) {
                _this.winner = _this.players[0];
                _this.loser = _this.players[1];
            }
            else {
                _this.winner = _this.players[1];
                _this.loser = _this.players[0];
            }
        }, function (err) { }, function () { });
    }
    ResultsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ResultsComponent.prototype.ngOnInit = function () {
    };
    return ResultsComponent;
}());
ResultsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-results',
        template: __webpack_require__("../../../../../src/app/results/results.component.html"),
        styles: [__webpack_require__("../../../../../src/app/results/results.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object])
], ResultsComponent);

var _a;
//# sourceMappingURL=results.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map