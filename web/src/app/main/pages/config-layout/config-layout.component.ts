import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title/title.service';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-config-layout',
  templateUrl: './config-layout.component.html',
  styleUrls: ['./config-layout.component.scss']
})
export class ConfigLayoutComponent implements OnInit {

  get pageTitle(): string {
    return this.titleService.getTitle(this.router.url)
  }

  constructor(
    private router: Router,
    private titleService: TitleService,
    private title: Title
  ) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd)
        this.title.setTitle(this.titleService.getTabTitle(ev.url))
    });
  }

  ngOnInit(): void {
  }
}


