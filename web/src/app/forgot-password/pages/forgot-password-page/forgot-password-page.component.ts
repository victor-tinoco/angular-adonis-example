import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleService } from 'src/app/main/services/title/title.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss']
})
export class ForgotPasswordPageComponent implements OnInit {

  constructor(
    private title: Title,
    private titleService: TitleService,
    private router: Router
  ) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd)
        this.title.setTitle(this.titleService.getTabTitle(ev.url))
    });
  }

  ngOnInit(): void {
  }
}
