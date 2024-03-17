import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http'; // Paso 1: Importar HttpClientModule

//Importar el modelo
import { Proveedor } from 'src/app/modelos/proveedores.modelos';


import { Observable, tap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiciosProveedoresService {

  constructor(private http:HttpClient) { }

  proveedores_get_all(){
    return this.http.get<Proveedor[]>('http://127.0.0.1:4000/proveedores/get_all')
  }

}
