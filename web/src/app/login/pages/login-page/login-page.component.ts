import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TitleService } from 'src/app/main/services/title/title.service';
import { AuthService } from '../../services/auth/auth.service';
import { RoutePath } from 'src/app/core/constants/route_paths';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
  constructor(
    private router: Router,
    private title: Title,
    private titleService: TitleService,
    private authService: AuthService
  ) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd)
        this.title.setTitle(this.titleService.getTabTitle(ev.url))
    });

    // auto login if user is logged
    if (authService.currentUser)
      this.router.navigate([RoutePath.dashboard.toRedirect]);
  }

  ngOnInit(): void {
  }
}
