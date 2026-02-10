// import { Inject, Injectable } from '@angular/core';
// import { MY_SETTINGS } from '../Token/inject.Token';

// @Injectable({
//   providedIn: 'root',
// })
// export class Api {
//   constructor(@Inject(MY_SETTINGS) private config: MY_SETTINGS) {}
//   getUrl() {
//     return this;
//   }
// }

import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfiguration } from '../Token/inject.Token';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(@Inject(APP_CONFIG) private config: AppConfiguration) {}

  call() {
    console.log(this.config.apiUrl, this.config.timeOut);
  }
}
