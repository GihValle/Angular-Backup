import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicosService } from '../servicos.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 
  public formulario = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    senha: [null, Validators.required]
  })
 
  constructor(    
    private formBuilder: FormBuilder,
    private service: ServicosService,
    private router: Router
    ){}
 
    onSubmit(){
      this.service.getLogin(this.formulario.controls["email"].value, this.formulario.controls["senha"].value).subscribe((data: any) =>{
        if(data['status'] == 'success') {
          window.localStorage.setItem('logado','true')
          window.localStorage.setItem('nome',data['clientes']['nome'])
          window.location.reload()
        } else {
          alert(data['Error'])
          this.formulario.patchValue({
            email: null, 
            senha: null
          })
        }
      })
    }
 
}