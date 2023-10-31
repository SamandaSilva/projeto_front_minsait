import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IProdutos } from 'src/app/interfaces/produtos';
import { ProdutosService } from 'src/app/service/produtos.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {

  constructor(private produtos: ProdutosService ){}

  produtoForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    codigoBarras: new FormControl('', Validators.required),
    preco: new FormControl(0, Validators.required),
  });


  enviar(){
    const produto: IProdutos = this.produtoForm.value as IProdutos;

    this.produtos.cadastrarProdutos(produto).subscribe(() =>
    this.produtoForm.reset());    
  }

}

