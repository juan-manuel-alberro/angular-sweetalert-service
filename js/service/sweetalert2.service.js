var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var myWindow = typeof window !== 'undefined' && window || {};
var SweetAlertService = (function () {
    function SweetAlertService() {
        // nothing to do in here :) 
    }
    SweetAlertService.prototype.swal = function () {
        return myWindow.Sweetalert2.apply(myWindow, Array.from(arguments));
    };
    SweetAlertService.prototype.confirm = function (options) {
        var defaultOptions = {
            confirmButtonText: 'Confirm',
            showCancelButton: true,
            type: 'warning'
        };
        return myWindow.Sweetalert2(Object.assign(defaultOptions, options));
    };
    SweetAlertService.prototype.prompt = function (options) {
        var defaultOptions = {
            confirmButtonText: 'Submit',
            showCancelButton: true,
            input: 'text'
        };
        return myWindow.Sweetalert2(Object.assign(defaultOptions, options));
    };
    SweetAlertService.prototype.alert = function (options) {
        var defaultOptions = {
            confirmButtonText: 'OK',
            type: 'info'
        };
        return myWindow.Sweetalert2(Object.assign(defaultOptions, options));
    };
    SweetAlertService.prototype.question = function (options) {
        return this.alert(Object.assign({
            type: 'question'
        }, options));
    };
    SweetAlertService.prototype.success = function (options) {
        return this.alert(Object.assign({
            type: 'success'
        }, options));
    };
    SweetAlertService.prototype.warning = function (options) {
        return this.alert(Object.assign({
            type: 'warning'
        }, options));
    };
    SweetAlertService.prototype.error = function (options) {
        return this.alert(Object.assign({
            type: 'error'
        }, options));
    };
    SweetAlertService.prototype.info = function (options) {
        return this.alert(Object.assign({
            type: 'info'
        }, options));
    };
    return SweetAlertService;
}());
SweetAlertService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], SweetAlertService);
export { SweetAlertService };
//# sourceMappingURL=sweetalert2.service.js.map