import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimePickerDialogComponent } from './date-time-picker-dialog.component';

describe('DateTimePickerDialogComponent', () => {
  let component: DateTimePickerDialogComponent;
  let fixture: ComponentFixture<DateTimePickerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateTimePickerDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateTimePickerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
