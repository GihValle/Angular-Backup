import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
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
