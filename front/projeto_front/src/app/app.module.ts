import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProdutoHeaderComponent } from './produto-header/produto-header.component';
import { CadastroProdutoComponent } from './pages/cadastro-produto/cadastro-produto.component';
import { EdicaoProdutoComponent } from './pages/edicao-produto/edicao-produto.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { ProdutosService } from './service/produtos.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import Chart from 'chart.js/auto';
@NgModule({
  declarations: [
    AppComponent,
    ProdutoHeaderComponent,
    CadastroProdutoComponent,
    EdicaoProdutoComponent,
    ProdutoComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
