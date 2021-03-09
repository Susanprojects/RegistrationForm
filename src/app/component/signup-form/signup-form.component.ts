import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormUserDataService } from 'src/app/shared/form-user-data.service';
import { passwordValidator } from 'src/app/shared/password-validator';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  title: string = 'Register today!';
  url: string = 'https://demo-api.now.sh/users';

  get firstName() {
    return this.registrationForm.get('firstName');
  }
  get lastName() {
    return this.registrationForm.get('lastName');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get password() {
    return this.registrationForm.get('password');
  }
  constructor(private fb: FormBuilder, private service: FormUserDataService) { }

  registrationForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]],
    password: ['', [Validators.required, Validators.minLength(8), passwordValidator]]
  });

  ngOnInit(): void{ }

  onSubmit() {
    let formData = {
      firstName: this.registrationForm.value.firstName,
      lastName: this.registrationForm.value.lastName,
      email: this.registrationForm.value.email
    }

    this.service.sendFormData(formData).subscribe(
      data => console.log('Success', data),
      error => console.error('Error', error)
    );

    this.registrationForm.reset();
  }
}
