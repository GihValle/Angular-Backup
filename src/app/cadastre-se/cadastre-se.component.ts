import { Component } from '@angular/core';
import { ServicosService } from '../servicos.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastre-se',
  templateUrl: './cadastre-se.component.html',
  styleUrls: ['./cadastre-se.component.scss']
})
export class CadastreSeComponent {

  public nome: string = ""
  public cpf: string = ""
  public data_nascimento: string = ""
  public email: string = ""
  public cep: string = ""
  public logradouro: string = ""
  public numero: string = ""
  public complemento: string = ""
  public bairro: string = ""
  public cidade: string = ""
  public estado: string = ""

  public formulario = this._formBuilder.group ({
    nome:[null,[Validators.required]],
    cpf: [null,[Validators.required,Validators.minLength(11), Validators.maxLength(11)]],
    data_nascimento:[null],
    email: [null,[Validators.required,Validators.email]],
    cep:[null,[Validators.required]],
    logradouro:[null],
    numero:[null],
    complemento:[null],
    bairro:[null],
    cidade:[null],
    estado:[null],

  });


  constructor(
    private _servicos: ServicosService,
    private _formBuilder:FormBuilder  // IMPORTO O MÓDULO DE FORMULÁRIO DO ANGULAR
  ) {}

  buscaCEP(cep: any) {

    //limpar campos de endereço
  this.formulario.patchValue({
  logradouro:null,
  bairro:null,
  cidade:null,
  estado:null

});

    //Verifica se foi digitado os 8 digitos
    if(cep.length == 8) {

      //pesquisa o cep na API VIACEP
      this._servicos.viaCep(cep).subscribe((data: any) => {
        //Caso o cep for invalido
        if (data.erro) {
          alert('cep não encontrado');
          return;
        }
        else{
          this.formulario.patchValue({
          logradouro:data.logradouro,
          bairro:data.bairro,
          cidade:data.localidade,
          estado:data.uf
          });
      }
    })
  }

    else{
      alert('favor informar o cep completo');
      return;
    }
  }
  enviaFormulario() {
    // if (this.nome =="") {
    // alert ('Favor preencher o campo NOME')
    // return
    // }
    // if (this.cpf =="") {
    //   alert ('Favor preencher o campo CPF')
    //   return
    //   }
    //   if (this.email =="") {
    //     alert ('Favor preencher o campo E-MAIL')
    //     return
    //     }

  }
}
