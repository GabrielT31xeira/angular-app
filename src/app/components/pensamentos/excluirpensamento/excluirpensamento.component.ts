import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluirpensamento',
  templateUrl: './excluirpensamento.component.html',
  styleUrls: ['./excluirpensamento.component.css']
})
export class ExcluirpensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: "",
    autor: "",
    modelo: ""
  }

  constructor(
    private service: PensamentoService, 
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  apagar() {
    if (this.pensamento.id){
      this.service.apagar(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }
}
