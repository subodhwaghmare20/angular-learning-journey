import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MainMessage } from './shared/Services/main-message';
import { MockMessage } from './shared/Services/mock-message';
import { APP_CONFIG } from './shared/Token/inject.Token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // { provide: MainMessage, useClass: MockMessage },
    // {
    //   provide: APP_CONFIG,
    //   useValue: {
    //     apiUrl: 'https://dummyjson.com/products',
    //     timeOut: 5000,
    //   },
    // },
  ],
};
