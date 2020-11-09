import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { TestComponent } from './components/test/test.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { ProfileMenuComponent } from './components/profile-menu/profile-menu.component';
import { ConfigLayoutComponent } from './pages/config-layout/config-layout.component';
import { TitleService } from './services/title/title.service';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MainLayoutComponent, TestComponent, ProfileMenuComponent, ConfigLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [
    TitleService,
  ]
})
export class MainModule { }
