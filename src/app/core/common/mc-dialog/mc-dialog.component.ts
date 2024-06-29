import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-mc-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  templateUrl: './mc-dialog.component.html',
  styleUrl: './mc-dialog.component.css'
})
export class McDialogComponent {
  constructor(public dialogRef: MatDialogRef<McDialogComponent>) {}

  salvar() {
    this.dialogRef.close();
  }
}


