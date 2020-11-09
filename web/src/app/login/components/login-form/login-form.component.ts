import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { LoginModel } from '../../models/login-model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ValidationErrorService } from 'src/app/main/services/validation-error/validation-error.service';
import { RoutePath } from 'src/app/core/constants/route_paths';
import { HttpErrorHandlerService } from 'src/app/main/services/http-error-handler/error-handler.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  get forgotPasswordPath(): string {
    return RoutePath.forgotPassword.toRedirect
  }

  loginForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private snackBar: MatSnackBar,
    private errorService: ValidationErrorService,
    private router: Router,
    private handler: HttpErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.createForm(new LoginModel())
  }

  createForm(user: LoginModel) {
    this.loginForm = this.formBuilder.group({
      username: [user.username, Validators.required],
      password: [user.password, Validators.required],
    });
  }

  getMessage(errors: ValidationErrors): string {
    return this.errorService.getErrorMessage(errors)
  }

  onSubmit() {
    console.log('Making login with\nUser -> ' + this.loginForm.value.username + '\nPassword -> ' + this.loginForm.value.password);
    this.isLoading = true;
    this.auth.login(this.loginForm.value).subscribe({
      next: res => {
        this.isLoading = false;
        this.loginForm.reset(new LoginModel());
        const redirect = this.auth.redirectURL ? this.auth.redirectURL : '/dashboard';
        this.router.navigate([redirect]);
      },
      error: err => {
        this.isLoading = false;
        this.handler.handleError(err)
      }
    });
  }
}
