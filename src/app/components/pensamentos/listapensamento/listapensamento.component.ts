import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listapensamento',
  templateUrl: './listapensamento.component.html',
  styleUrls: ['./listapensamento.component.css']
})
export class ListapensamentoComponent implements OnInit {

  listaPensamento: Pensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamento)=>{
      this.listaPensamento = listaPensamento;
    });
  }
}
