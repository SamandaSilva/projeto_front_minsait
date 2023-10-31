import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProdutos } from '../interfaces/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtoURL = 'http://localhost:8080/api/produtos';

  constructor(private http: HttpClient) { }

  
  buscarProdutoId(id: number) {
    return this.http.get<IProdutos>(`${this.produtoURL}/${id}`);
  }  
  

  listarProdutos(){
    return this.http.get<IProdutos[]>(this.produtoURL);
  }

  cadastrarProdutos(produto: IProdutos){
    return this.http.post<IProdutos>(this.produtoURL, produto);
  }

  atualizarProdutos(id: number, produto: IProdutos){
    return this.http.put<IProdutos>(`${this.produtoURL}/${id}`, produto);
  }

  deletar(id: number) {
    return this.http.delete<IProdutos>(`${this.produtoURL}/${id}`);
  }  
  
}
