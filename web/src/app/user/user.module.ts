import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MainModule } from '../main/main.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserService } from './services/user.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CeapService } from '../main/services/ceap/ceap.service';
import { MatMenuModule } from '@angular/material/menu';
import { UserFilterComponent } from './components/user-filter/user-filter.component';
import { HttpErrorHandlerService } from '../main/services/http-error-handler/error-handler.service';

@NgModule({
  declarations: [ListUserComponent, UserFormComponent, UserPageComponent, UserFilterComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MainModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatMenuModule
  ],
  providers: [
    UserService,
    CeapService,
    HttpErrorHandlerService
  ]
})
export class UserModule { }
