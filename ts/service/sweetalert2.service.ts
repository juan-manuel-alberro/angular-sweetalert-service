import {
  Injectable
} from '@angular/core';

let myWindow: any = typeof window !== 'undefined' && window || {};

@Injectable()
export class SweetAlertService {
  constructor() {
    // nothing to do in here :) 
  }

  swal() {
    return myWindow.Sweetalert2(...Array.from(arguments));
  }

  confirm(options) {
    let defaultOptions = {
      confirmButtonText: 'Confirm',
      showCancelButton: true,
      type: 'warning'
    };
    return myWindow.Sweetalert2(Object.assign(defaultOptions, options));
  }


  prompt(options) {
    let defaultOptions = {
      confirmButtonText: 'Submit',
      showCancelButton: true,
      input: 'text'
    };
    return myWindow.Sweetalert2(Object.assign(defaultOptions, options));
  }

  alert(options) {
    let defaultOptions = {
      confirmButtonText: 'OK',
      type: 'info'
    };
    return myWindow.Sweetalert2(Object.assign(defaultOptions, options));
  }

  question(options) {
    return this.alert(
      Object.assign({
        type: 'question'
      }, options));
  }

  success(options) {
    return this.alert(Object.assign({
      type: 'success'
    }, options));
  }

  warning(options) {
    return this.alert(Object.assign({
      type: 'warning'
    }, options));
  }

  error(options) {
    return this.alert(Object.assign({
      type: 'error'
    }, options));
  }

  info(options) {
    return this.alert(Object.assign({
      type: 'info'
    }, options));
  }

}