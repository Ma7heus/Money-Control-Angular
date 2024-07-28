import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericListingComponent } from './generic-listing.component';

describe('GenericListingComponent', () => {
  let component: GenericListingComponent;
  let fixture: ComponentFixture<GenericListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
