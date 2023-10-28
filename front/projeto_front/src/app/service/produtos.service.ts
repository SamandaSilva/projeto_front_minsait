import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProdutos } from '../interfaces/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtoURL = 'http://localhost:8080/api/produtos';

  constructor(private http: HttpClient) { }

  listarProdutos(){
    return this.http.get<IProdutos[]>(this.produtoURL);
  }
  
}
