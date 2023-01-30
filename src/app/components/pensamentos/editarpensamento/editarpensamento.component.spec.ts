import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarpensamentoComponent } from './editarpensamento.component';

describe('EditarpensamentoComponent', () => {
  let component: EditarpensamentoComponent;
  let fixture: ComponentFixture<EditarpensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarpensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarpensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
