import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/service/produtos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IProdutos } from 'src/app/interfaces/produtos';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-edicao-produto',
  templateUrl: './edicao-produto.component.html',
  styleUrls: ['./edicao-produto.component.css']
})
export class EdicaoProdutoComponent implements OnInit{

  produto: IProdutos | null = null;
  produtoId: number = 0 ;

  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute
    ){ }

  produtoForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    codigoBarras: new FormControl('', Validators.required),
    preco: new FormControl(0),
  });

  ngOnInit() {
      this.route.params.subscribe((params) => {
        const id = +params['id'];
        if (!isNaN(id)) {
          this.produtoId = id; 
          this.produtoService.buscarProdutoId(this.produtoId).subscribe(
            (produto) => {
              this.produto = produto; 
              this.produtoForm.patchValue(produto);
            },
            (error) => {
              console.error('Erro ao buscar o produto:', error);
            }
          );
        }
      });
    }
    
  
  atualizarProdutos() {
    const produto: IProdutos = this.produtoForm.value as IProdutos;
  
    if (this.produto) {
      produto.id = this.produto.id;
      this.produtoService.atualizarProdutos(produto.id, produto).subscribe(() => {
        this.produtoForm.reset();
      });
    }
  }
  
  
    
  }
  
  
  
  





  


