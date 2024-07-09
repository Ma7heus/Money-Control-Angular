import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-time-picker-dialog',
  templateUrl: './date-time-picker-dialog.component.html',
  styleUrls: ['./date-time-picker-dialog.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class DateTimePickerDialogComponent {
  dateTimeForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DateTimePickerDialogComponent>,
    private fb: FormBuilder
  ) {
    this.dateTimeForm = this.fb.group({
      date: [null],
      time: ['00:00']
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    const date = this.dateTimeForm.value.date;
    const time = this.dateTimeForm.value.time;
    const combinedDateTime = new Date(date);
    const [hours, minutes] = time.split(':');
    combinedDateTime.setHours(hours);
    combinedDateTime.setMinutes(minutes);
    this.dialogRef.close(combinedDateTime.toISOString());
  }
}
