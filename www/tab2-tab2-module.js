(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Entenda!\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n    <div class=\"container\">\n        <div class=\"estudo\">\n            <h1> Sobre pesca consciente</h1>\n            <p><b>As práticas de pesca fazem de tudo para suprir a demanda no mundo de hoje, mas a vida marinha sofre muito com isso.</b></p>\n            <p><b>Um dos maiores causadores de mortes na vida marinha é o Bycatch é um termo em inglês usado para definir as espécies que são mortas nas pescarias, mas não são alvo dessas pescarias.</b></p>\n            <p><b>Outra atividade que agride muito o ecossistema marinho é chamada de Redes Fantasmas, isso acontece quando redes de pescas são abandonadas no fundo do mar, agredindo vida marinha que entra em contato</b></p>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url('tatuga.png') no-repeat center;\n  background-color: #ABEFF5; }\n  @media (max-width: 487px) {\n    ion-content.background {\n      --background: url('tatugaMenor.png') no-repeat center; } }\n  ion-content.background h1,\n  ion-content.background p {\n    color: black; }\n  ion-content.background .estudo {\n    margin: 10px 10x;\n    border-radius: 2%;\n    background-color: rgba(255, 255, 255, 0.8); }\n  ion-content.background .container {\n    margin: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnVub2xlYW90ZWl4ZWlyYS9Eb2N1bWVudHMvUHJvamV0b3MvQnljYXRjaC9JTkYxMzA1L3NyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdEQUFhO0VBSWIseUJBQXlCLEVBQUE7RUFIekI7SUFGSjtNQUdRLHFEQUFhLEVBQUEsRUFlcEI7RUFsQkQ7O0lBUVEsWUFBWSxFQUFBO0VBUnBCO0lBV1EsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwwQ0FBMEMsRUFBQTtFQWJsRDtJQWdCUSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL3RhdHVnYS5wbmcpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4N3B4KSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy90YXR1Z2FNZW5vci5wbmcpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgfVxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBQkVGRjU7XG4gICAgaDEsXG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgLmVzdHVkbyB7XG4gICAgICAgIG1hcmdpbjogMTBweCAxMHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IDUlO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Tab2Page = /** @class */ (function () {
    function Tab2Page() {
    }
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        })
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map