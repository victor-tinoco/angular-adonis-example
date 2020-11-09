import { Component, OnInit, ɵConsole } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router, NavigationEnd } from '@angular/router';
import { TitleService } from '../../services/title/title.service';
import { Title } from '@angular/platform-browser';
import { RoutePath } from 'src/app/core/constants/route_paths';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  readonly pages: RouteInfo[] = [
    { path: RoutePath.dashboard.toRedirect, title: this.titleService.getTitle(RoutePath.dashboard.path), icon: 'dashboard', class: '' },
    // { path: RoutePath.ocurrence.toRedirect, title: this.titleService.getTitle(RoutePath.ocurrences.path), icon: 'assignment', class: '' },
    { path: RoutePath.field.toRedirect, title: this.titleService.getTitle(RoutePath.field.path), icon: 'list', class: '' },
    // { path: RoutePath.webform.toRedirect, title: this.titleService.getTitle(RoutePath.webforms.path), icon: 'desktop_windows', class: '' },
  ];

  get pageTitle(): string {
    return this.titleService.getTitle(this.router.url)
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private titleService: TitleService,
    private title: Title
  ) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd)
        this.title.setTitle(this.titleService.getTabTitle(ev.url))
    });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit() {
    this.title.setTitle(this.titleService.getTabTitle(this.router.url))
  }
}
