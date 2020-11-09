import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../main/pages/main-layout/main-layout.component';
import { AuxiliaryListComponent } from './pages/auxiliary-list/auxiliary-list.component';
import { CommonFieldListComponent } from './pages/common-field-list/common-field-list.component';
import { CommonFieldFormComponent } from './pages/common-field-form/common-field-form.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: AuxiliaryListComponent },
    ],
  },
  {
    path: ':field',
    component: MainLayoutComponent,
    children: [
      { path: '', component: CommonFieldListComponent },
    ],
  },
  {
    path: ':field/:id',
    component: MainLayoutComponent,
    children: [
      { path: '', component: CommonFieldFormComponent },
    ],
  },
  {
    path: ':field/create',
    component: MainLayoutComponent,
    children: [
      { path: '', component: CommonFieldFormComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuxiliariesRoutingModule { }
