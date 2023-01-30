import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { CriarpensamentoComponent } from './components/pensamentos/criarpensamento/criarpensamento.component';
import { FormsModule } from '@angular/forms';
import { ListapensamentoComponent } from './components/pensamentos/listapensamento/listapensamento.component';
import { PensamentoComponent } from './components/pensamentos/pensamento/pensamento.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirpensamentoComponent } from './components/pensamentos/excluirpensamento/excluirpensamento.component';
import { EditarpensamentoComponent } from './components/pensamentos/editarpensamento/editarpensamento.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarpensamentoComponent,
    ListapensamentoComponent,
    PensamentoComponent,
    ExcluirpensamentoComponent,
    EditarpensamentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
