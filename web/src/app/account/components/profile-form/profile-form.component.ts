import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { ValidationErrorService } from 'src/app/main/services/validation-error/validation-error.service';
import { ProfileFormModel } from '../../models/profile-form-model';
import { AccountService } from '../../services/account.service';
import { HttpErrorHandlerService } from 'src/app/main/services/http-error-handler/error-handler.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  profileForm: FormGroup

  ceaps: [string];
  groups: [string];

  constructor(
    private formBuilder: FormBuilder,
    private errorService: ValidationErrorService,
    private accountService: AccountService,
    private handler: HttpErrorHandlerService
  ) { }

  ngOnInit(): void {
    let profileData: ProfileFormModel = {
      name: '',
      email: '',
      username: '',
      ceap: '',
      group: '',
    }

    this.createForm(profileData);

    this.accountService.getProfileData().subscribe({
      next: res => {
        this.ceaps = [res.data?.ceap?.nome]
        this.groups = [res.data?.group?.title]

        profileData = {
          name: res.data?.name,
          email: res.data?.email,
          username: res.data?.username,
          ceap: res.data?.ceap?.nome,
          group: res.data?.group?.title
        }

        this.createForm(profileData)
      },
      error: err => {
        this.handler.handleError(err)
      }
    })
  }

  createForm(form: ProfileFormModel) {
    this.profileForm = this.formBuilder.group({
      name: [{ value: form.name, disabled: true }, [Validators.required]],
      email: [{ value: form.email, disabled: true }, [Validators.required, Validators.email]],
      username: [{ value: form.username, disabled: true }, [Validators.required]],
      ceap: [{ value: form.ceap, disabled: true }, [Validators.required]],
      group: [{ value: form.group, disabled: true }, [Validators.required]],
    })
  }

  getMessage(errors: ValidationErrors): string {
    return this.errorService.getErrorMessage(errors)
  }
}