import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  router = inject(Router);
  errorMessage: string = '';
  isLoading: boolean = false;
  loginForm: FormGroup = new FormGroup({
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
      ])
  });
  
  constructor(private _authService: AuthService) { }

  
  login() {
    if(this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    }
    else {
      this.errorMessage = '';
      this.isLoading = true;
      this._authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this._authService.saveUserData(res.data);
          this.loginForm.reset();
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.log(err);
          this.isLoading = false;
          this.errorMessage = err.error.message;
        },
        complete: () => {
          console.log("Login completed successfully.");
        }
      });
    }
    console.log(this.loginForm);

  }

}
