import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarModule } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ResultMessageService {

  constructor(public snackBar: MatSnackBar) { }

  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
  };

  success(msg): void {
    this.config.panelClass = ['notification', 'success'];
    this.snackBar.open(msg, '', this.config);
  }

  warn(msg): void {
    this.config.panelClass = ['notification', 'warn'];
    this.snackBar.open(msg, '', this.config);
  }
}