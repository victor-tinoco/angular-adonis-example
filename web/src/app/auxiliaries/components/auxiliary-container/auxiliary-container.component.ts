import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuxiliaryFieldModel } from '../../models/auxiliary-field-model';

@Component({
  selector: 'app-auxiliary-container',
  templateUrl: './auxiliary-container.component.html',
  styleUrls: ['./auxiliary-container.component.scss']
})
export class AuxiliaryContainerComponent implements OnInit {

  @Input() field: AuxiliaryFieldModel;
  @Output() onTap: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fieldWasClicked() {
    this.onTap.emit(this.field)
  }
}
