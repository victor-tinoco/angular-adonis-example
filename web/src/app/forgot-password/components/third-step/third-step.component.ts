import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MustMatch } from 'src/app/core/validators/must-match.validators';
import { Validators, FormGroup, FormBuilder, ValidationErrors } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResetPasswordService } from '../../services/reset-password/reset-password.service';
import { ValidationErrorService } from 'src/app/main/services/validation-error/validation-error.service';
import { RoutePath } from 'src/app/core/constants/route_paths';
import { Strings } from 'src/app/core/constants/strings';
import { Constants } from 'src/app/core/constants/constants';
import { HttpErrorHandlerService } from 'src/app/main/services/http-error-handler/error-handler.service';

export class FormModel {
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.scss']
})

export class ThirdStepComponent implements OnInit {
  tsForm: FormGroup;
  isLoading: boolean = false;
  token = '';

  get previousPath(): string {
    return RoutePath.forgotPasswordST2.toRedirect
  }

  get nextPath(): string {
    return RoutePath.login.toRedirect
  }

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private errorService: ValidationErrorService,
    private route: ActivatedRoute,
    private resetPasswordService: ResetPasswordService,
    private handler: HttpErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.token = params['token']);
    this.createForm(new FormModel());
  }

  createForm(form: FormModel) {
    this.tsForm = this.formBuilder.group({
      password: [form.password, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [form.confirmPassword, [Validators.required]],
    }, {
      validator: MustMatch('password', 'confirmPassword', 'As senhas')
    });
  }

  getMessage(errors: ValidationErrors): string {
    return this.errorService.getErrorMessage(errors)
  }

  onSubmit() {
    console.log('Reseting pswd with\nNew Password -> ' + this.tsForm.value.password + '\nToken -> ' + this.token);
    this.isLoading = true;
    this.resetPasswordService.resetPassword(this.tsForm.value.password, this.token).subscribe({
      next: res => {
        this.isLoading = false;
        this.tsForm.reset(new FormModel());
        this.router.navigate([this.nextPath]);
        this.snackBar.open(res.message, Strings.SNACKBAR_DONE, Constants.defaultSnackBarConfig);
      },
      error: err => {
        this.isLoading = false;
        this.handler.handleError(err)
      }
    });
  }
}
