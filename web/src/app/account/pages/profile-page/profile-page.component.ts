import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutePath } from 'src/app/core/constants/route_paths';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate([RoutePath.dashboard.toRedirect]);
  }
}
