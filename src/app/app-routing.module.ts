import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarpensamentoComponent } from './components/pensamentos/criarpensamento/criarpensamento.component';
import { ListapensamentoComponent } from './components/pensamentos/listapensamento/listapensamento.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
