import { Component, OnInit } from '@angular/core';
import { AuxiliaryFieldModel } from '../../models/auxiliary-field-model';
import { Router } from '@angular/router';
import { FieldService } from '../../services/field/field.service';

@Component({
  selector: 'app-auxiliary-list',
  templateUrl: './auxiliary-list.component.html',
  styleUrls: ['./auxiliary-list.component.scss']
})
export class AuxiliaryListComponent implements OnInit {
  get fields() { return this.service.auxiliaryFieldsCategories }

  constructor(
    private router: Router,
    private service: FieldService
  ) { }

  ngOnInit(): void {
  }

  tap(field: AuxiliaryFieldModel) {
    this.router.navigate([field.path.toRedirect]);
  }
}
