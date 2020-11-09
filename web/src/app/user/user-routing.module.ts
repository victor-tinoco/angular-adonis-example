import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigLayoutComponent } from '../main/pages/config-layout/config-layout.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { UserPageComponent } from './pages/user-page/user-page.component';


const routes: Routes = [
  {
    path: '',
    component: ConfigLayoutComponent,
    children: [
      { path: '', component: ListUserComponent },
    ]
  },
  {
    path: ':id',
    component: ConfigLayoutComponent,
    children: [
      { path: '', component: UserPageComponent },
    ]
  },
  {
    path: 'create',
    component: ConfigLayoutComponent,
    children: [
      { path: '', component: UserPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
