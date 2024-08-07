import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McCardComponent } from './mc-card.component';

describe('McCardComponent', () => {
  let component: McCardComponent;
  let fixture: ComponentFixture<McCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
