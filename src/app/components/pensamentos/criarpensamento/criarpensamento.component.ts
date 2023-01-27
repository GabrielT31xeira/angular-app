import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criarpensamento',
  templateUrl: './criarpensamento.component.html',
  styleUrls: ['./criarpensamento.component.css']
})
export class CriarpensamentoComponent implements OnInit {

  pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Eu',
    modelo: ''
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
