import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirpensamentoComponent } from './excluirpensamento.component';

describe('ExcluirpensamentoComponent', () => {
  let component: ExcluirpensamentoComponent;
  let fixture: ComponentFixture<ExcluirpensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirpensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirpensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
