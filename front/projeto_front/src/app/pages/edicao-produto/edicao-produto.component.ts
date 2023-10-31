import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/service/produtos.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { IProdutos } from 'src/app/interfaces/produtos';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-edicao-produto',
  templateUrl: './edicao-produto.component.html',
  styleUrls: ['./edicao-produto.component.css']
})
export class EdicaoProdutoComponent implements OnInit{

  produto!: IProdutos;
  produtoId!: number;
  produtoForm!: FormGroup;

  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
    ){ }

  ngOnInit() {
    this.ConfigurarForm();

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
  
  ConfigurarForm(){
    this.produtoForm = this.formBuilder.group({
      nome: new FormControl('', [Validators.required,
        Validators.max(100),
        ]),
      codigoBarras: new FormControl('', [Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.maxLength(30),
      ]),
      preco: new FormControl(0, [Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.min(1),
        Validators.max(100000),
      ]),
    });
  }
  
    
  }
  
  
  
  





  


