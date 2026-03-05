import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {
  // logInForm = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  // });
  // handle() {
  //   console.log('Form Submitted');
  //   console.log(this.logInForm.value);
  //   console.log(this.logInForm.valid);
  //   this.logInForm.reset();
  // }
  // fillData() {
  //   this.logInForm.setValue({
  //     email: 'Subodhswaghmare@gmail.com',
  //     password: '1234567890',
  //   });
  // }
  // conPassword = new FormGroup({
  //   newPass: new FormControl('', [Validators.required]),
  //   confirmPassword: new FormControl('', [Validators.required]),
  // });
  // passwordMatch() {
  //   return this.conPassword.value.newPass === this.conPassword.value.confirmPassword;
  // }
  //! Nested Form Group
  // profileForm = new FormGroup({
  //   personalInfo: new FormGroup({
  //     firstName: new FormControl(''),
  //     lastName: new FormControl(''),
  //   }),
  //   contactInfo: new FormGroup({
  //     email: new FormControl(''),
  //     phone: new FormControl(''),
  //   }),
  // });
  // onSubmit() {
  //   console.log('outPut', this.profileForm.value);
  //   console.log(this.profileForm.valid);
  // }
  // field=new FormGroup({
  //   name:new FormControl('')
  // })
  // user = new FormControl('', [Validators.required, Validators.minLength(6), Validators.email]);
  // disableField() {
  //   this.user.disable();
  // }
  // enableField() {
  //   this.user.enable();
  // }
  // ! FormArray
  // profileForm = new FormGroup({
  //   skills: new FormArray([new FormControl('')]),
  // });
  // get skills() {
  //   return this.profileForm.get('skills') as FormArray;
  // }
  // addSkill() {
  //   this.skills.push(new FormControl(''));
  // }
  // removeSkill(index: number) {
  //   this.skills.removeAt(index);
  // }

  fb = inject(FormBuilder);

  userProfile = this.fb.group({
    email: ['', [Validators.email]],
    password: ['', [Validators.minLength(3)]],
  });

  onSubmit() {
    console.log('Value ', this.userProfile.value);
  }
}
