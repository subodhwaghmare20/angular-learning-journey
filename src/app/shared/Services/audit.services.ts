import { inject, Injectable } from '@angular/core';
import { LoggerServices } from './logger.services';

@Injectable({
  providedIn: 'root',
})
export class AuditServices {
  private logger = inject(LoggerServices);

  audit(event: string) {
    return this.logger.log('Audit ' + event);
  }
}
