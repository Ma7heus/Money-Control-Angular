import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportacaoComponent } from './importacao.component';

describe('ImportacaoComponent', () => {
  let component: ImportacaoComponent;
  let fixture: ComponentFixture<ImportacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportacaoComponent]
    });
    fixture = TestBed.createComponent(ImportacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
