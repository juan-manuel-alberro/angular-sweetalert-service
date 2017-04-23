# Angular wrapper for SweetAlert2

This is a simple wrapper to use [SweetAlert](https://limonte.github.io/sweetalert2/) in Angular projects, it works with `angular-cli` also

### Install

`npm install --save angular-sweetalert-service`

or if you prefer Yarn

`yarn add angular-sweetalert-service`

### Include in your app

In your `app.module` just include the service

```js
...
import { SweetAlertService } from 'angular-sweetalert-service';
...
```

Then add the service as a provider

```js
@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
  ],
  providers: [
    ...
    SweetAlertService,
    ...
  ],
  bootstrap: [
    ...
  ]
})
```

Now you have the service available across the application. Now you need to call the service in your component and that's it.

```js
// myComponent.ts

...
import { SweetAlertService } from 'angular-sweetalert';

@Component({
  selector: 'app-foobar',
  styles: [],
  templateUrl: './foobar.html'
})
export class MyDummyClass {
  constructor(
    private alertService: SweetAlertService
  ) {}
  ...
```

### Available methods

`SweetAlert.confirm`
`SweetAlert.prompt`
`SweetAlert.alert`
`SweetAlert.question`
`SweetAlert.success`
`SweetAlert.warning`
`SweetAlert.error`

You can extend the default options by just passing a configuration object into the method, like this:

```js
const options = {
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
};
SweetAlert.confirm(options);
```

### Chaining & Promises

```js
    this.alertService.confirm({
      title: 'Delete account?'
    })
    .then(() => {
      this.alertService.success({
        title: 'Account deleted'
      });
    })
    .catch(() => console.log('canceled'));
```

### Typescript

If you use Typescript, if you don't use it you should, you can access the types since the service has the `d.ts` file available.

```js
export declare class SweetAlertService {
    constructor();
    swal(): any;
    confirm(options: any): any;
    prompt(options: any): any;
    alert(options: any): any;
    question(options: any): any;
    success(options: any): any;
    warning(options: any): any;
    error(options: any): any;
    info(options: any): any;
}
```
