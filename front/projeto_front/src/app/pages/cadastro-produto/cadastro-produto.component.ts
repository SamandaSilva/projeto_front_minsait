import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { IProdutos } from 'src/app/interfaces/produtos';
import { ProdutosService } from 'src/app/service/produtos.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {

  produtoForm!: FormGroup;


  constructor(private produtos: ProdutosService,
              private formBuilder: FormBuilder
  ){}

  ngOnInit() {
    this.ConfigurarForm();
  }


  enviar(){
    const produto: IProdutos = this.produtoForm.value as IProdutos;

    produto.codigoBarras = produto.codigoBarras.toString();

    this.produtos.cadastrarProdutos(produto).subscribe(() =>
    this.produtoForm.reset());    
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

