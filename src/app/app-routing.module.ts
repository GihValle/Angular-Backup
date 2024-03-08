import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ContatoComponent } from './contato/contato.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CadastreSeComponent } from './cadastre-se/cadastre-se.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'quem-somos',
    component: QuemSomosComponent
  },
  {
    path:'contato',
    component: ContatoComponent
  },
  {
    path:'topo',
    component: TopoComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'rodape',
    component: RodapeComponent
  },
  {
    path:'cadastre-se',
    component:CadastreSeComponent
  },
  {
    path:'menu-lateral',
    component:MenuLateralComponent
  },
  {
    path:'produtos',
    component:ProdutosComponent
  },
  {
    path:'produtos/:filtro',
    component:ProdutosComponent
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
