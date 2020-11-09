import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationErrorService } from 'src/app/main/services/validation-error/validation-error.service';
import { RoutePath } from 'src/app/core/constants/route_paths';

export class FormModel {
  token: String;
}

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss']
})

export class SecondStepComponent implements OnInit {
  ssForm: FormGroup;

  get previousPath(): string {
    return RoutePath.forgotPasswordST1.toRedirect
  }

  get nextStep(): string {
    return RoutePath.forgotPasswordST3.toRedirect
  }

  constructor(
    private errorService: ValidationErrorService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm(new FormModel());
  }

  createForm(form: FormModel) {
    this.ssForm = this.formBuilder.group({
      token: [form.token, [Validators.required]],
    });
  }

  getMessage(errors: ValidationErrors): string {
    return this.errorService.getErrorMessage(errors)
  }

  onSubmit() {
    this.router.navigate([this.nextStep], { queryParams: { token: this.ssForm.value.token } });
  }
}
