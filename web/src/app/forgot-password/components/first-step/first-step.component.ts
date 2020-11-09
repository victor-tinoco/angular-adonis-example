import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ValidationErrors } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ResetPasswordService } from '../../services/reset-password/reset-password.service';
import { ValidationErrorService } from 'src/app/main/services/validation-error/validation-error.service';
import { RoutePath } from 'src/app/core/constants/route_paths';
import { HttpErrorHandlerService } from 'src/app/main/services/http-error-handler/error-handler.service';

export class FormModel {
  email: string;
}

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class FirstStepComponent implements OnInit {
  fsForm: FormGroup;
  isLoading: boolean = false;

  get nextPath(): string {
    return RoutePath.forgotPasswordST2.toRedirect
  }

  get previousPath(): string {
    return RoutePath.login.toRedirect
  }

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private errorService: ValidationErrorService,
    private snackBar: MatSnackBar,
    private resetPasswordService: ResetPasswordService,
    private handler: HttpErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.createForm(new FormModel())
  }

  createForm(form: FormModel) {
    this.fsForm = this.formBuilder.group({
      email: [form.email, [Validators.required, Validators.email]],
    });
  }

  getMessage(errors: ValidationErrors): string {
    return this.errorService.getErrorMessage(errors)
  }

  onSubmit() {
    console.log('Sending email with token to\nEmail -> ' + this.fsForm.value.email);
    this.isLoading = true
    this.resetPasswordService.sendToken(this.fsForm.value.email).subscribe({
      next: res => {
        this.isLoading = false;
        this.fsForm.reset(new FormModel());
        this.router.navigate([this.nextPath]);
      },
      error: err => {
        this.isLoading = false;
        this.handler.handleError(err)
      }
    });
  }
}
