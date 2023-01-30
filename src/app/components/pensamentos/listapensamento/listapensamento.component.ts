import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listapensamento',
  templateUrl: './listapensamento.component.html',
  styleUrls: ['./listapensamento.component.css']
})
export class ListapensamentoComponent implements OnInit {

  listaPensamento: Pensamento[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
