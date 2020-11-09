import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/login/services/auth/auth.service';
import { RoutePath } from 'src/app/core/constants/route_paths';
import { TitleService } from '../../services/title/title.service';

declare interface RouteInfo {
  path: string;
  title: string;
  dropdown: {
    isDropd: boolean,
    itsOpen?: boolean,
    subpaths?: {
      path: string,
      title: string,
      class: string,
    }[]
  }
  icon: string;
  class: string;
}

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileMenuComponent implements OnInit {
  private _configIsOpen = false;

  get configIsOpen(): Boolean { return this._configIsOpen }

  get userPath(): string { return RoutePath.user.toRedirect }
  get userTitle(): string { return this.titleService.getTitle(this.userPath) }

  get ceapPath(): string { return RoutePath.ceap.toRedirect }
  get ceapTitle(): string { return this.titleService.getTitle(this.ceapPath) }

  get profilePath(): string { return RoutePath.account.toRedirect }
  get profileTitle(): string { return this.titleService.getTitle(this.profilePath) }

  get configTitle(): string { return `Configurações` }

  constructor(
    private auth: AuthService,
    private titleService: TitleService
  ) { }

  ngOnInit(): void {
  }

  exit() {
    this.auth.logout()
  }

  toggleConfigDropd($event: any) {
    $event.stopPropagation()
    this._configIsOpen = this.configIsOpen ? false : true
  }
}
