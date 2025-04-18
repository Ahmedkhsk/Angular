import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  errorMessage: string = '';
  registerForm: FormGroup = new FormGroup({
    username: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
    email: new FormControl(
      '',
      [
        Validators.required,
        Validators.email,
      ]),
    
    password: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
    
    rePassword: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
    
    phone: new FormControl(
      '',
      [
        Validators.required,
        Validators.pattern(/^\d{10}$/),
      ]),
    
  });
  
  constructor(private _authService: AuthService) { }

  
  register() {
    if(this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
    }
    else {
      this.errorMessage = '';
      this._authService.register(this.registerForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.registerForm.reset();
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = err.error.message;
        },
        complete: () => {
          console.log("Registration completed successfully.");
        }
      });
    }
    console.log(this.registerForm);

  }

}
