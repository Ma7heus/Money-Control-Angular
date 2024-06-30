import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormImportacaoComponent } from './form-importacao.component';

describe('FormImportacaoComponent', () => {
  let component: FormImportacaoComponent;
  let fixture: ComponentFixture<FormImportacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormImportacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormImportacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
