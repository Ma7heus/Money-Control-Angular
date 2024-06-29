import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McDialogComponent } from './mc-dialog.component';

describe('McDialogComponent', () => {
  let component: McDialogComponent;
  let fixture: ComponentFixture<McDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
