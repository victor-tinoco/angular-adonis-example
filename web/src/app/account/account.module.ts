import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { MainModule } from '../main/main.module';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ValidationErrorService } from '../main/services/validation-error/validation-error.service';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { AccountService } from './services/account.service';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { HttpErrorHandlerService } from '../main/services/http-error-handler/error-handler.service';

@NgModule({
  declarations: [ProfileFormComponent, NewPasswordComponent, ProfilePageComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MainModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [
    ValidationErrorService,
    AccountService,
    HttpErrorHandlerService
  ]
})
export class AccountModule { }
