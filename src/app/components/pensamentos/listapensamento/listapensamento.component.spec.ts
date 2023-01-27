import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapensamentoComponent } from './listapensamento.component';

describe('ListapensamentoComponent', () => {
  let component: ListapensamentoComponent;
  let fixture: ComponentFixture<ListapensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListapensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListapensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
