import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forms',
  imports: [FormsModule, CommonModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {
  // user!: any;

  // handleSubmit() {
  //   console.log('User LogIn');
  // }

  username = '';
  // password = '';

  // onSubmit(form: NgForm) {
  //   console.log('Form Submitted');
  //   console.log('Form Value :', form.value);
  //   console.log('Form Valid :', form.valid);
  // }

  display = '';
  gender = [
    { id: '1', gender: 'Male', display: 'Male' },
    { id: '2', gender: 'Female', display: 'Female' },
    { id: '3', gender: 'Other', display: 'Not to Say' },
  ];

  handle(form: NgForm) {
    console.log('Submitted :', form);
    console.log(form.value);
    this.display = form.value;
  }
}
