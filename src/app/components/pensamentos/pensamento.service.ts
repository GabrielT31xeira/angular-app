import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  constructor(private http: HttpClient) {}

  private readonly API = 'http://localhost:3000/pensamentos';

  listar() 
  {
    return this.http.get<Pensamento[]>(this.API);
  }

  criar(pensamento: Pensamento): Observable<Pensamento> 
  {
    return this.http.post<Pensamento>(this.API, pensamento);
  }
}
