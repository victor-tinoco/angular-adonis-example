import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuxiliariesRoutingModule } from './auxiliaries-routing.module';
import { MainModule } from '../main/main.module';
import { AuxiliaryContainerComponent } from './components/auxiliary-container/auxiliary-container.component';
import { AuxiliaryListComponent } from './pages/auxiliary-list/auxiliary-list.component';
import { CommonFieldListComponent } from './pages/common-field-list/common-field-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FieldService } from './services/field/field.service';
import { CommonFieldFormComponent } from './pages/common-field-form/common-field-form.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AuxiliaryContainerComponent,
    AuxiliaryListComponent,
    CommonFieldListComponent,
    CommonFieldFormComponent
  ],
  imports: [
    CommonModule,
    AuxiliariesRoutingModule,
    MainModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    FieldService,
  ]
})
export class AuxiliariesModule { }
