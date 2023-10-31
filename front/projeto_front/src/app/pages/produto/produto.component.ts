import { IProdutos } from './../../interfaces/produtos';
import { Component } from '@angular/core';
import { ProdutosService } from 'src/app/service/produtos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

      produto: IProdutos[] = [];

      constructor(private produtosService: ProdutosService,){}

      ngOnInit(){
        this.listar();
    }

    listar(){
      this.produtosService.listarProdutos().subscribe( produto => {
        this.produto = produto;
      }, (error) => {
        console.log("Erro ao buscar produtos");
      }
    );
  }

  deletar(id: number) {
    this.produtosService.deletar(id).subscribe(
      () => {
        this.produto = this.produto.filter((produto) => produto.id !== id);
      }
    );
  }
}

