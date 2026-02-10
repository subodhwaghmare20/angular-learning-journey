// import { InjectionToken } from '@angular/core';

// export interface AppSetting {
//   apiKey: string;
//   isMaintenanceMode: boolean;
// }
// export const MY_SETTINGS = new InjectionToken<AppSetting>('AppConfiguration');

import { InjectionToken } from '@angular/core';

export interface AppConfiguration {
  apiUrl: string;
  timeOut: number;
}

export const APP_CONFIG = new InjectionToken<AppConfiguration>('APP_CONFIG');
