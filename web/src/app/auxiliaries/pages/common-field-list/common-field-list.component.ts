import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorHandlerService } from 'src/app/main/services/http-error-handler/error-handler.service';
import { RoutePath } from 'src/app/core/constants/route_paths';
import { FieldService } from '../../services/field/field.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Strings } from 'src/app/core/constants/strings';
import { Constants } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-common-field-list',
  templateUrl: './common-field-list.component.html',
  styleUrls: ['./common-field-list.component.scss']
})
export class CommonFieldListComponent implements OnInit {
  fieldPath: string;
  keys: string[];

  isLoading: boolean = false;
  displayedColumns = ['id', 'nome', 'options', 'delete'];
  dataSource: any;

  pageSize = 10;
  currentPage = 0;
  totalSize = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private handler: HttpErrorHandlerService,
    private snack: MatSnackBar,
    private service: FieldService
  ) {
    this.fieldPath = this.route.snapshot.paramMap.get('field');
  }

  ngOnInit() {
    this.getList();
  }

  private getList() {
    this.isLoading = true;
    this.service.getPaginatedFieldList(this.fieldPath, this.currentPage + 1).subscribe({
      next: res => {
        this.isLoading = false
        this.dataSource = new MatTableDataSource<Element>(res.data.data);
        this.keys = Object.keys(res.data.data[0]) // for take id key name (that is different in each field)
        this.dataSource.paginator = this.paginator;
        this.totalSize = res.data.total
      },
      error: err => {
        [RoutePath.field.toRedirect]
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
    this.router.navigate([id], { relativeTo: this.route })
  }

  add() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }

  delete(id: number) {
    this.service.deleteField(this.fieldPath, id).subscribe({
      next: res => {
        this.snack.open(res.message, Strings.SNACKBAR_DONE, Constants.defaultSnackBarConfig)
        this.getList()
      },
      error: err => {
        this.handler.handleError(err)
      },
    })
  }

  back() {
    this.router.navigate([RoutePath.field.toRedirect]);
  }
}