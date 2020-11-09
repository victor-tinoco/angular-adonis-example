import { Component, OnInit } from '@angular/core';
import { AuxiliaryFieldFormModel } from '../../models/common-field-api-model';
import { FormGroup, ValidationErrors, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorHandlerService } from 'src/app/main/services/http-error-handler/error-handler.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidationErrorService } from 'src/app/main/services/validation-error/validation-error.service';
import { FieldService } from '../../services/field/field.service';
import { Strings } from 'src/app/core/constants/strings';
import { Constants } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-common-field-form',
  templateUrl: './common-field-form.component.html',
  styleUrls: ['./common-field-form.component.scss']
})
export class CommonFieldFormComponent implements OnInit {
  field: string
  id: number
  form: FormGroup
  isLoading: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private errorService: ValidationErrorService,
    private service: FieldService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private handler: HttpErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.field = this.route.snapshot.paramMap.get('field');
    this.createForm(new AuxiliaryFieldFormModel);
    if (this.id) this.bindField();
  }

  submit() {
    this.isLoading = true
    let field = { nome: this.form.value.name }
    if (this.id) {
      this.service.updateField(this.field, this.id, field).subscribe({
        next: res => {
          console.log(res)
          this.snackBar.open(res.message, Strings.SNACKBAR_DONE, Constants.defaultSnackBarConfig)
        },
        error: err => {
          this.handler.handleError(err)
        },
        complete: () => {
          this.bindField()
          this.isLoading = false
        }
      })
    } else {
      this.service.createField(this.field, field).subscribe({
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

  bindField() {
    this.service.getField(this.field, this.id).subscribe({
      next: res => {
        let data: AuxiliaryFieldFormModel = {
          nome: res.data?.nome,
        };

        this.createForm(data);
      },
      error: err => {
        this.handler.handleError(err)
      }
    })
  }

  createForm(form: AuxiliaryFieldFormModel) {
    this.form = this.formBuilder.group({
      name: [form.nome, [Validators.required]],
    })
  }

  getMessage(errors: ValidationErrors): string {
    return this.errorService.getErrorMessage(errors)
  }

  back() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}