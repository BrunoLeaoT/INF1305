(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/services/todo.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/todo.service.ts ***!
  \******************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");




var TodoService = /** @class */ (function () {
    function TodoService(db, storage) {
        this.db = db;
        this.storage = storage;
    }
    TodoService.prototype.login = function (address) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.db.collection("agentes").get().toPromise().then(function (snapshot) {
                    snapshot.forEach(function (doc) {
                        if (address == doc.data().address) {
                            _this.storage.set('loginTipo', doc.data().tipo);
                            console.log(doc.data().tipo);
                            return true;
                        }
                        return false;
                    });
                })
                    .catch(function (err) {
                    console.log('Error getting documents', err);
                });
                return [2 /*return*/];
            });
        });
    };
    TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"header\">\n    <ion-toolbar>\n        <ion-title>\n            Pesquise!\n            <ion-button size=\"small\" fill=\"outline\" *ngIf=\"!loginStatus\" (click)=\"login()\">login</ion-button>\n            <ion-button size=\"small\" fill=\"outline\" *ngIf=\"loginStatus\" (click)=\"logout()\">logout</ion-button>\n        </ion-title>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n    <div class=\"container\">\n        <h1>Descubra se a pesca do seu peixe foi consciente.</h1>\n        <ion-input [(ngModel)]=\"empresa\" placeholder=\"Empresa\"></ion-input>\n        <ion-button (click)=\"getEmpresa()\">Pesquisar</ion-button>\n        <div *ngIf=\"logs\" class=\"log\">\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <span><b>Empresa</b></span>\n                    </ion-col>\n                    <ion-col>\n                        <span><b>Selo da Empresa</b></span>\n                    </ion-col>\n                    <ion-col>\n                        <span><b>Selo dos Agentes</b></span>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <ion-grid *ngFor=\"let log of logs\">\n                <ion-row>\n                    <ion-col>\n                        <span>{{this.empresaPesquisada}}</span>\n                    </ion-col>\n                    <ion-col>\n                        <span *ngIf=\"log.empresaSelo\">Consciente</span>\n                        <span *ngIf=\"!log.empresaSelo\">Não consciente</span>\n                    </ion-col>\n                    <ion-col>\n                        <span *ngIf=\"!log.agentesModif\">Não verificado</span>\n                        <span *ngIf=\"log.agentesSelo && log.agentesModif\">Consciente</span>\n                        <span *ngIf=\"!log.agentesSelo && log.agentesModif\">Não consciente</span>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\nion-header.header {\n  background-color: #ADE4FA; }\n\nion-header.header ion-button {\n    right: 0;\n    position: fixed; }\n\nion-content.background {\n  --background: url('tubarao.png') no-repeat center;\n  background-color: #ABEFF5; }\n\n@media (max-width: 487px) {\n    ion-content.background {\n      --background: url('tubaMenor.png') no-repeat bottom; } }\n\nion-content.background h1 {\n    color: black; }\n\nion-content.background ion-input {\n    color: black;\n    font-style: bold;\n    background-color: rgba(255, 255, 255, 0.6);\n    width: 90%; }\n\nion-content.background .log {\n    background-color: rgba(255, 255, 255, 0.6);\n    border-radius: 2%; }\n\nion-content.background .container {\n    margin: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnVub2xlYW90ZWl4ZWlyYS9Eb2N1bWVudHMvUHJvamV0b3MvQnljYXRjaC9JTkYxMzA1L3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSx5QkFBeUIsRUFBQTs7QUFEN0I7SUFHUSxRQUFRO0lBQ1IsZUFBZSxFQUFBOztBQUl2QjtFQUNJLGlEQUFhO0VBSWIseUJBQXlCLEVBQUE7O0FBSHpCO0lBRko7TUFHUSxtREFBYSxFQUFBLEVBbUJwQjs7QUF0QkQ7SUFPUSxZQUFZLEVBQUE7O0FBUHBCO0lBVVEsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQiwwQ0FBMEM7SUFDMUMsVUFBVSxFQUFBOztBQWJsQjtJQWdCUSwwQ0FBMEM7SUFDMUMsaUJBQWlCLEVBQUE7O0FBakJ6QjtJQW9CUSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDM1dmg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIFxuICAgIGlvbi1oZWFkZXIuaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0FERTRGQTtcbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL3R1YmFyYW8ucG5nKSBuby1yZXBlYXQgY2VudGVyO1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDg3cHgpIHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy90dWJhTWVub3IucG5nKSBuby1yZXBlYXQgYm90dG9tO1xuICAgICAgICB9XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNBQkVGRjU7XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmxvZyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyJTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogNSU7XG4gICAgICAgIH1cbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/todo.service */ "./src/app/services/todo.service.ts");
/* harmony import */ var _service_methods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/methods */ "./src/app/service/methods.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/web3 */ "./src/app/service/web3.js");








var Tab1Page = /** @class */ (function () {
    function Tab1Page(router, route, todoService, methods, storage, loadingCont) {
        this.router = router;
        this.route = route;
        this.todoService = todoService;
        this.methods = methods;
        this.storage = storage;
        this.loadingCont = loadingCont;
        this.todoId = null;
        this.resposta = true;
        this.statusPesca = false;
        this.loginStatus = false;
    }
    Tab1Page.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('loginTipo')
            .then(function (login) {
            if (login != null)
                _this.loginStatus = true;
        });
    };
    Tab1Page.prototype.createLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCont.create({
                                message: 'Loading...',
                                duration: 2000
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        this.loading.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page.prototype.getEmpresa = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.empresaPesquisada = this.empresa;
                this.methods.getEmpresa(this.empresa).then(function (data) { _this.logs = data; });
                return [2 /*return*/];
            });
        });
    };
    Tab1Page.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                _service_web3__WEBPACK_IMPORTED_MODULE_7__["default"].eth.getAccounts().then(function (e) { return _this.todoService.login(e); });
                this.loginStatus = true;
                return [2 /*return*/];
            });
        });
    };
    Tab1Page.prototype.logout = function () {
        this.storage.clear();
        this.loginStatus = false;
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            providers: [_service_methods__WEBPACK_IMPORTED_MODULE_4__["Methods"]],
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"], _service_methods__WEBPACK_IMPORTED_MODULE_4__["Methods"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map