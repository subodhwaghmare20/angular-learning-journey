import { Observable } from 'rxjs';

export const numberObservable = new Observable<number>((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);

  observer.complete();
});
