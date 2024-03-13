import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http'; // Paso 1: Importar HttpClientModule


import { Marca } from '../modelos/marcas.modelos';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(private http:HttpClient) { }

  get_marcas(){
    return this.http.get<Marca[]>('http://127.0.0.1:4000/marcas/get_all')
  }

}
