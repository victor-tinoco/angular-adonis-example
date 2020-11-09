import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiResponse } from 'src/app/core/models/api-response';
import { Strings } from 'src/app/core/constants/strings';
import { Constants } from 'src/app/core/constants/constants';

@Injectable()
export class HttpErrorHandlerService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  handleError(err: ApiResponse) {
    if (err.message == 'Erro na validação.')
      err.data.forEach(e => { this.snackBar.open(e.message, Strings.SNACKBAR_DONE, Constants.defaultSnackBarConfig) })
    else
      this.snackBar.open(err.message, Strings.SNACKBAR_DONE, Constants.defaultSnackBarConfig)
  }
}
