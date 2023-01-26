import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarpensamentoComponent } from './criarpensamento.component';

describe('CriarpensamentoComponent', () => {
  let component: CriarpensamentoComponent;
  let fixture: ComponentFixture<CriarpensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarpensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarpensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
