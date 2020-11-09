import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutePath } from 'src/app/core/constants/route_paths';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate([RoutePath.user.toRedirect]);
  }
}
