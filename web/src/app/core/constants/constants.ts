import { MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';

export class Constants {
	static readonly defaultSnackBarConfig = {
		duration: 4000,
		horizontalPosition: 'right' as MatSnackBarHorizontalPosition,
		verticalPosition: 'top' as MatSnackBarVerticalPosition
	}
}