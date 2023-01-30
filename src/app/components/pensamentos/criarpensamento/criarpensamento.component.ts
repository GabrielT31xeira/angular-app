import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criarpensamento',
  templateUrl: './criarpensamento.component.html',
  styleUrls: ['./criarpensamento.component.css'],
})
export class CriarpensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    conteudo: '',
    autor: '',
    modelo: '',
  };

  constructor(private service: PensamentoService, private router: Router) {}

  ngOnInit(): void {}

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    });
  }

  cancelarCriacao() {
    this.router.navigate(['/listarPensamento'])
  }
}
