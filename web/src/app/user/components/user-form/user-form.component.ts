import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { ValidationErrorService } from 'src/app/main/services/validation-error/validation-error.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/user.service';
import { UserFormModel } from '../../models/user-form-model';
import { ActivatedRoute } from '@angular/router';
import { CeapService } from 'src/app/main/services/ceap/ceap.service';
import { Strings } from 'src/app/core/constants/strings';
import { Constants } from 'src/app/core/constants/constants';
import { HttpErrorHandlerService } from 'src/app/main/services/http-error-handler/error-handler.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup
  currentUserId: number
  isLoading: boolean = false

  ceaps: { id_ceap: number, nome: string }[];
  groups: { id_group: number, title: string }[];

  constructor(
    private formBuilder: FormBuilder,
    private errorService: ValidationErrorService,
    private route: ActivatedRoute,
    private userService: UserService,
    private ceapService: CeapService,
    private snackBar: MatSnackBar,
    private handler: HttpErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.currentUserId = +this.route.snapshot.paramMap.get('id');

    this.createForm(new UserFormModel);

    this.bindCeaps()
    if (this.currentUserId) this.bindUser()
  }

  submit() {
    this.isLoading = true
    if (this.currentUserId) {
      this.userService.update(this.currentUserId, this.userForm.value).subscribe({
        next: res => {
          this.snackBar.open(res.message, Strings.SNACKBAR_DONE, Constants.defaultSnackBarConfig)
        },
        error: err => {
          this.handler.handleError(err)
        },
        complete: () => {
          this.bindUser()
          this.isLoading = false
        }
      })
    } else {
      this.userService.create(this.userForm.value).subscribe({
        next: res => {
          this.snackBar.open(res.message, Strings.SNACKBAR_DONE, Constants.defaultSnackBarConfig)
        },
        error: err => {
          this.handler.handleError(err)
        },
        complete: () => {
          this.isLoading = false
        }
      })
    }
  }

  bindCeaps() {
    this.ceapService.getAll().subscribe({
      next: res => {
        this.ceaps = res.data['data']
      },
      error: err => {
        this.handler.handleError(err)
      }
    })
  }

  bindUser() {
    this.userService.get(this.currentUserId).subscribe({
      next: res => {
        this.groups = [{ id_group: res.data?.group?.id_group, title: res.data?.group?.title }];

        let userData: UserFormModel = {
          name: res.data?.name,
          email: res.data?.email,
          username: res.data?.username,
          ceap: res.data?.ceap?.id_ceap,
          group: res.data?.group?.id_group,
          active: res.data?.active
        };

        this.createForm(userData);
      },
      error: err => {
        this.handler.handleError(err)
      }
    })
  }

  createForm(form: UserFormModel) {
    this.userForm = this.formBuilder.group({
      name: [form.name, [Validators.required]],
      email: [form.email, [Validators.required, Validators.email]],
      username: [form.username, [Validators.required]],
      ceap: [form.ceap, [Validators.required]],
      group: [form.group, [Validators.required]],
      active: [form.active],
    })
  }

  getMessage(errors: ValidationErrors): string {
    return this.errorService.getErrorMessage(errors)
  }
}