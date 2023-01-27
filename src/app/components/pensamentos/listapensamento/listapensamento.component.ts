import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listapensamento',
  templateUrl: './listapensamento.component.html',
  styleUrls: ['./listapensamento.component.css']
})
export class ListapensamentoComponent implements OnInit {

  listaPensamento = [
    {
      conteudo: "Não é que tá bom",
      autor: "Eu",
      modelo: "modelo1"
    },
    {
      conteudo: "Não é que tá bom",
      autor: "Eu",
      modelo: "modelo2"
    },
    {
      conteudo: "Não é que tá bom Não é que tá bom Não é que tá bom Não é que tá bom Não é que tá bom Não é que tá bom Não é que tá bom Não é que tá bom Não é que tá bom Não é que tá bom Não é que tá bom Não é que tá bom Não é que tá bom Não é que tá bom Não é que tá bom Não é que tá bom Não é que tá bom Não é que tá bom Não é que tá bom Não é que tá bom Não é que tá bom",
      autor: "Eu",
      modelo: "modelo2"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
