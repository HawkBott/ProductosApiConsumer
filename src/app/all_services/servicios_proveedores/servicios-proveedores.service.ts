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


  new_proveedor(proveedorVacio: Proveedor): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    const body = { Proveedor: proveedorVacio };  // Envía el objeto Proveedor como una propiedad

    return this.http.post<any>('http://127.0.0.1:4000/proveedores/nuevoProveedor', body, { headers: headers })
      .pipe(
        tap((res: any) => {
          if (res.mensaje == "Proveedor insertado correctamente") {
            console.log("servicio", res.mensaje);
          }
        }),
        catchError(err => of(err.error.message))
      );
  }



  eliminar_proveedor(id:string | null){
    const apiUrl='http://127.0.0.1:4000'
    const url = `${apiUrl}/proveedores/eliminar/${id}`;
    return this.http.delete<any>(url)
  }



  // Función ajustada para obtener un proveedor por su ID
  getProveedorById(id: string): Observable<Proveedor | null> { // Ajusta aquí el tipo de retorno
    const apiUrl = 'http://127.0.0.1:4000'; // Definición de la URL base dentro de la función
    return this.http.get<Proveedor>(`${apiUrl}/proveedores/porID/${id}`)
      .pipe(
        tap(_ => console.log(`fetched product id=${id}`)), // Operación de efecto secundario para registrar en la consola
        catchError(err => {
          console.error(`Error fetching product id=${id}`, err);
          return of(null); // En caso de error, se retorna null
        })
      );
  }



  actualizarProveedor(id: string, datosProveedor: any): Observable<any> {
    const apiUrl = 'http://127.0.0.1:4000'; // La URL base de tu API
    return this.http.put<any>(`${apiUrl}/proveedores/actualizar/${id}`, datosProveedor)
      .pipe(
        tap(res => console.log(`Proveedor actualizado id=${id}`, res)),
        catchError(err => {
          console.error(`Error actualizando proveedor id=${id}`, err);
          return of(err.error);
        })
      );
  }


}
