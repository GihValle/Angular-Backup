import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images=[
    {
      src:'/assets/imagens/banner-principal.gif',
      titulo:''
    },
    {
      src:'/assets/imagens/NOVIDADES-BANNER.gif',
      titulo:''
    },
    {
      src:'/assets/imagens/banner-coleção-oficial.gif',
      titulo:''
    }
  ]
}
