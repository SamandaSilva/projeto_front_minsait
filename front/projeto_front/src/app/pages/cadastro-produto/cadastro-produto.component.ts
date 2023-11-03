import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { IProdutos } from 'src/app/interfaces/produtos';
import { ProdutosService } from 'src/app/service/produtos.service';
import Swal from 'sweetalert2';

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

    this.produtos.cadastrarProdutos(produto).subscribe(
      (result) => {
      Swal.fire({
        icon: 'success',
        title: 'Produto cadastrado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      });
      this.produtoForm.reset();
      },
      (error) => {
        const { message } = error;
        Swal.fire('Erro ao cadastrar produto', message, 'error');
      });    
  }

  ConfigurarForm(){
    this.produtoForm = this.formBuilder.group({
      nome: new FormControl('', [Validators.required,
        Validators.maxLength(100),
        ]),
      codigoBarras: new FormControl('', [Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.maxLength(30),
      ]),
      preco: new FormControl(0, [Validators.required,
        Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$'),
        Validators.max(10000),
      ]),
    });
  }
}

