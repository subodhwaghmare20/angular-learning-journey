import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-http-api',
  imports: [CommonModule],
  templateUrl: './http-api.html',
  styleUrl: './http-api.css',
  standalone: true,
})
export class HTTPAPI {
  // user: any;
  // constructor(
  //   private http: HttpClient,
  //   // private cdr: ChangeDetectorRef,
  // ) {}
  // createUser() {
  //   const newUser = {
  //     name: 'John',
  //     email: 'john@example.com',
  //   };
  //   this.http.post('https://jsonplaceholder.typicode.com/users', newUser).subscribe((response) => {
  //     console.log('User created:', response);
  //   });
  // }
  // load() {
  //   this.http.get('https://dummyjson.com/products').subscribe((value) => {
  //     console.log(value, 'value ');
  //     this.user = value;
  //     this.cdr.detectChanges();
  //   });
  // }
  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   this.http.get('https://dummyjson.com/products').subscribe((value) => {
  //     console.log(value, 'value ');
  //     this.user = value;
  //   });
  // }
}
