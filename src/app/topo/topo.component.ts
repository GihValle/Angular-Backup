import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit {
  isUser: boolean = false

  constructor(
    private router: Router
  ) {
    if(window.localStorage.getItem('logado') == 'true') {
      this.isUser = true
    }
  }

  ngOnInit(): void {
    

    console.log(this.isUser)
  }

  logout() {
    window.localStorage.setItem('logado','false')
    window.localStorage.setItem('nome','')
    window.location.reload()
  }

}
