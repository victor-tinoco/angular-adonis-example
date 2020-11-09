import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FirstStepComponent } from './components/first-step/first-step.component';
import { SecondStepComponent } from './components/second-step/second-step.component';
import { ThirdStepComponent } from './components/third-step/third-step.component';
import { ResetPasswordService } from './services/reset-password/reset-password.service';
import { MainModule } from '../main/main.module';
import { TitleService } from '../main/services/title/title.service';
import { ValidationErrorService } from '../main/services/validation-error/validation-error.service';


@NgModule({
  declarations: [
    ForgotPasswordPageComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent
  ],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MainModule
  ],
  providers: [
    ResetPasswordService,
    TitleService,
    ValidationErrorService
  ]
})
export class ForgotPasswordModule { }
