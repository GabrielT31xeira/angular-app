import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarpensamentoComponent } from './components/pensamentos/criarpensamento/criarpensamento.component';
import { ListapensamentoComponent } from './components/pensamentos/listapensamento/listapensamento.component';
import { ExcluirpensamentoComponent } from './components/pensamentos/excluirpensamento/excluirpensamento.component';

const routes: Routes = [
  {
    path: 'criarPensamento',
    component: CriarpensamentoComponent
  }, 
  {
    path: 'listarPensamento',
    component: ListapensamentoComponent
  },
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirpensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
