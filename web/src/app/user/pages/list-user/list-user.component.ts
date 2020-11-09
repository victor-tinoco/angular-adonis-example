import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RoutePath } from 'src/app/core/constants/route_paths';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorHandlerService } from 'src/app/main/services/http-error-handler/error-handler.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  isLoading: boolean = true;

  public displayedColumns = ['id', 'name', 'username', 'ceap', 'group', 'options'];
  public dataSource: any;

  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private router: Router,
    private service: UserService,
    private snackBar: MatSnackBar,
    private handler: HttpErrorHandlerService
  ) { }

  ngOnInit() {
    this.getList();
  }

  private getList() {
    this.isLoading = true;
    this.service.getAll(this.currentPage + 1).subscribe({
      next: res => {
        this.isLoading = false
        this.dataSource = new MatTableDataSource<Element>(res.data.data);
        this.dataSource.paginator = this.paginator;
        this.totalSize = res.data.total
      },
      error: err => {
        this.handler.handleError(err)
      },
    })
  }

  handlePage(e: PageEvent) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.getList()
  }

  show(id: number) {
    this.router.navigate([RoutePath.user.toRedirect, id])
  }

  add() {
    this.router.navigate([RoutePath.user.toRedirect, 'create']);
  }

  back() {
    this.router.navigate([RoutePath.dashboard.toRedirect]);
  }
}