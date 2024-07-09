import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McDateComponent } from './mc-date.component';

describe('McDateComponent', () => {
  let component: McDateComponent;
  let fixture: ComponentFixture<McDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McDateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
