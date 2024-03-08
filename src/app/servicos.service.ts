import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, retry, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  private httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': '77cbc1f93d7f'
    })
  }

  constructor(
    private _http: HttpClient
    //Boas práticas: Todas variáveis Privadas, utiliza (underline) no início do nome
  ) { }

  viaCep(cep: string) {
    //CRIAR VARIÁVEL COM A URL DO VIA CEP
    let url = 'https://viacep.com.br/ws/' + cep + '/json/'

    //PEGAR RETORNO DO CONTÚDO HTTP
    return this._http.get(url)
  }

  postCliente(dados: any) {
    const url = 'http://localhost/api_back/clientes/'

    return this._http.post(url, dados, this.httpOptions)
      .pipe(
        map(
          (res: any) => res
        ),
        retry(3),
        timeout(5000)
      )
  }

  getLogin(email: any, senha: any) {
    const url = 'http://localhost/api_back/clientes/?email=' + email + '&senha=' + btoa(senha)

    return this._http.get(url, this.httpOptions)
      .pipe(
        map(
          (res: any) => res
        ),
        retry(3),
        timeout(5000)
      )
  }

  getProdutos(filtro: string) {

    let url: string

    if (filtro == "Feminino") {
      url = 'http://localhost/api_back/produtos/?genero=F'
    } else if(filtro == "Masculino") {
      url = 'http://localhost/api_back/produtos/?genero=M'
    } else if(filtro == "Unissex") {
      url = 'http://localhost/api_back/produtos/?genero=U'
    } else {
      url = 'http://localhost/api_back/produtos/'
    }

    return this._http.get(url, this.httpOptions)
      .pipe(
        map(
          (res: any) => res
        ),
        retry(3),
        timeout(5000)
      )
  }

}


