import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, panelClass: string) {
    this._snackBar.open(message, 'Fechar', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: panelClass
    });
  }

  showSuccess(message: string) {
    this.openSnackBar('✅ ' + message, 'success-snackbar');
  }

  showWarning(message: string) {
    this.openSnackBar('⚠️ ' + message, 'warning-snackbar');
  }

  showError(message: string) {
    this.openSnackBar('❌ ' + message, 'error-snackbar');
  }
}
