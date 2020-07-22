import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators,FormArray } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';
import { RegistrationService } from './registration.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get userName() {
    return this.registrationForm.get('userName');
  }

    get email() {
    return this.registrationForm.get('email');
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder,private _registrationService : RegistrationService) {}

  registrationForm = this.fb.group({
    userName:['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/password/)]],
    password:[''],
    confirmPassword:[''],
    email:[''],
    address: this.fb.group({
      city:[''],
      state:[''], 
      postalCode:['']
    }),
    alternateEmails: this.fb.array([])
  },{validator: PasswordValidator});

  /* registrationForm = new FormGroup({
    userName: new FormControl('Vishwas'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city:new FormControl(''),
      state:new FormControl(''),
      postalcode:new FormControl('')
    })
  }); */
  loadApiData() {
    // this.registrationForm.patchValue for custom fields
    this.registrationForm.setValue({
      userName: 'Bruce',
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'City',
        state: 'State',
        postalCode: '123456'
      }
    });
  }
  onSubmit(){
    console.log(this.registrationForm.value);
    this._registrationService.register(this.registrationForm.value)
    .subscribe(
      response => console.log('Succes!',response),
      error => console.log('Error',error)
    );
  }
}
 