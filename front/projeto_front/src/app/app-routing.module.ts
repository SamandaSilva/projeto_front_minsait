import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroProdutoComponent } from './pages/cadastro-produto/cadastro-produto.component';
import { EdicaoProdutoComponent } from './pages/edicao-produto/edicao-produto.component';
import { ProdutoComponent } from './pages/produto/produto.component';
const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'produtos', component:ProdutoComponent
  },
  {
    path: 'produtos/cadastrar', component: CadastroProdutoComponent
  },
  {
    path: 'produtos/editar/:id', component: EdicaoProdutoComponent
  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
