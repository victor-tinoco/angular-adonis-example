import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { GuardService } from './services/guard/guard.service';
import { TitleService } from '../main/services/title/title.service';
import { MainModule } from '../main/main.module';
import { ValidationErrorService } from '../main/services/validation-error/validation-error.service';
import { HttpErrorHandlerService } from '../main/services/http-error-handler/error-handler.service';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MainModule
  ],
  exports: [
    LoginPageComponent,
    LoginFormComponent,
  ],
  providers: [
    AuthService,
    GuardService,
    TitleService,
    ValidationErrorService,
    HttpErrorHandlerService
  ]
})
export class LoginModule { }
