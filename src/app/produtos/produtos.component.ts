import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../servicos.service';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
 
  public produtos: any[] = []
 
  constructor(
    private _servicos: ServicosService,
    private _activate: ActivatedRoute
  ) { }
 
  ngOnInit() {

    this.produtos = []

    this._activate.params.subscribe((filtro:any) => {
      this._servicos.getProdutos(filtro["filtro"]).subscribe((data:any) => {
        if(data["status"] == 'success') {
            data["produtos"].forEach((element:any) => {
              this.produtos.push(element);
            });
          
        }
      })
    })
 
 
    console.log(this.produtos)
 
  }
 
}