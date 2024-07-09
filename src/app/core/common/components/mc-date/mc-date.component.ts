import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DateTimePickerDialogComponent } from 'src/app/date-time-picker-dialog/date-time-picker-dialog.component';

@Component({
  selector: 'app-mc-date',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatDialogModule
  ],
  templateUrl: './mc-date.component.html',
  styleUrl: './mc-date.component.css'
})
export class McDateComponent {


  maskedInput: string = '';
  typedValue: string = '';

  constructor(public dialog: MatDialog) { }

  onInputChange(event: any): void {
    const input = event.target.value.replace(/\D/g, '').substring(0, 14);
    const dateParts = input.match(/(\d{0,2})(\d{0,2})(\d{0,4})(\d{0,2})(\d{0,2})(\d{0,2})/);
    if (dateParts) {
      const formattedInput = `${dateParts[1]}/${dateParts[2]}/${dateParts[3]} ${dateParts[4]}:${dateParts[5]}:${dateParts[6]}`;
      this.maskedInput = formattedInput.trim().replace(/(\/| |:)+$/, '');
      this.typedValue = formattedInput.trim().replace(/(\/| |:)+$/, '');
    } else {
      this.maskedInput = input;
    }
  }

  onIconClick(): void {
    const dialogRef = this.dialog.open(DateTimePickerDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.maskedInput = this.typedValue = result;
      }
    });
  }
}
