import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criarpensamento',
  templateUrl: './criarpensamento.component.html',
  styleUrls: ['./criarpensamento.component.css']
})
export class CriarpensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 4,
    conteudo: 'Aprendendo Angular',
    autor: 'Eu',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento() {
    alert("Novo pensamento criado!!")
  }

  cancelarCriacao() {
    alert("Ação cancelada!!")
  }

}
