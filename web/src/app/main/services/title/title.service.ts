import { Injectable } from '@angular/core';
import { RoutePath } from 'src/app/core/constants/route_paths';

declare interface Page {
  title: string
  path: string
}

export class TitleService {
  private readonly _pages: Page[] = [
    { title: 'Dashboard', path: RoutePath.dashboard.path },
    { title: 'Campos', path: RoutePath.field.path },
    { title: 'Ocorrências', path: RoutePath.ocurrence.path },
    { title: 'Formulários', path: RoutePath.webform.path },
    { title: 'Meu perfil', path: RoutePath.account.path },
    { title: 'CEAP', path: RoutePath.ceap.path },
    { title: 'Usuários', path: RoutePath.user.path },

    { title: 'Login', path: RoutePath.login.path },
    { title: 'Insira seu e-mail', path: RoutePath.forgotPasswordST1.path },
    { title: 'Insira o código', path: RoutePath.forgotPasswordST2.path },
    { title: 'Insira sua nova senha', path: RoutePath.forgotPasswordST3.path },
  ]

  constructor() { }

  getTitle(currentRoute: string): string {
    let title = 'Título'
    this._pages.forEach((e) => {
      if (currentRoute.includes(e.path))
        title = e.title
    })
    return title
  }

  getTabTitle(currentRoute: string): string {
    return `${this.getTitle(currentRoute)} | PCVI`
  }
}

