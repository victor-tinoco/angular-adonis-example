import { Component, OnInit } from '@angular/core';
import { Validators, ValidationErrors, FormGroup, FormBuilder, FormGroupDirective } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { NewPasswordFormModel } from '../../models/new-password-form-model';
import { ValidationErrorService } from 'src/app/main/services/validation-error/validation-error.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MustMatch } from 'src/app/core/validators/must-match.validators';
import { Strings } from 'src/app/core/constants/strings';
import { Constants } from 'src/app/core/constants/constants';
import { HttpErrorHandlerService } from 'src/app/main/services/http-error-handler/error-handler.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {
  passwordForm: FormGroup
  isLoading: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private errorService: ValidationErrorService,
    private accountService: AccountService,
    private snackBar: MatSnackBar,
    private handler: HttpErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.createForm(new NewPasswordFormModel());
  }

  createForm(form: NewPasswordFormModel) {
    this.passwordForm = this.formBuilder.group({
      old_password: [form.old_password, [Validators.required]],
      new_password: [form.new_password, [Validators.required, Validators.minLength(6)]],
      password_confirmation: [form.password_confirmation, [Validators.required]],
    }, {
      validator: MustMatch('new_password', 'password_confirmation', 'As senhas')
    })
  }


  getMessage(errors: ValidationErrors): string {
    return this.errorService.getErrorMessage(errors)
  }

  submit(formDirective: FormGroupDirective) {
    console.log('Changing pswd with\nOld Password -> ' + this.passwordForm.value.old_password + '\nNew Password -> ' + this.passwordForm.value.new_password);
    this.isLoading = true;
    this.accountService.changePassword(this.passwordForm.value).subscribe({
      next: res => {
        this.isLoading = false;
        formDirective.resetForm()
        this.passwordForm.reset()
        this.snackBar.open(res.message, Strings.SNACKBAR_DONE, Constants.defaultSnackBarConfig);
      },
      error: err => {
        this.isLoading = false;
        this.handler.handleError(err)
      }
    });
  }
}
