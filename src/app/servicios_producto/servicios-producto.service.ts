import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http'; // Paso 1: Importar HttpClientModule
import { Producto } from '../modelos/productos.modelos';

@Injectable({
  providedIn: 'root'
})
export class ServiciosProductoService {

  constructor(private http:HttpClient) { }

  productos_get_all(){
    return this.http.get<Producto[]>('http://127.0.0.1:4000/productos/get_all')
  }

}
