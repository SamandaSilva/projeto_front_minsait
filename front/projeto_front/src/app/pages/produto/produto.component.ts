import { IProdutos } from './../../interfaces/produtos';
import { Component } from '@angular/core';
import { ProdutosService } from 'src/app/service/produtos.service';
import Swal from 'sweetalert2';

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
        Swal.fire({
          title: 'Deseja excluir este produto?',
          text: "Você não poderá reverter!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sim'
        }).then((result) => {
          if (result.isConfirmed) {
            this.produtosService.deletar(id).subscribe(
              () => {
                this.produto = this.produto.filter((produto) => produto.id !== id);
              }
            ); 
              Swal.fire(
              'Excluído!',
              'Produto excluído.',
              'success'
            );         
        }});
}
}

