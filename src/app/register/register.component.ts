import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  router = inject(Router);
  errorMessage: string = '';
  isLoading: boolean = false;
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(
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
      ])
  });
  
  constructor(private _authService: AuthService) { }

  
  register() {
    if(this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
    }
    else {
      this.errorMessage = '';
      this.isLoading = true;
      this._authService.register(this.registerForm.value).subscribe({
        next: (res) => {
          this.registerForm.reset();
          this.router.navigate(['/login']);
        },
        error: (err) => {
          this.isLoading = false;
          this.errorMessage = err.error.message;
        }
      });
    }
  }

}
