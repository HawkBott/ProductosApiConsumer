import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http'; // Paso 1: Importar HttpClientModule


import { Marca } from 'src/app/modelos/marcas.modelos';


import { Observable, tap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(private http:HttpClient) { }

  get_marcas(){
    return this.http.get<Marca[]>('http://127.0.0.1:4000/marcas/get_all')
  }


  new_marca(marcaVacia: Marca): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    const body = { Marca: marcaVacia };  // Envía el objeto Proveedor como una propiedad

    return this.http.post<any>('http://127.0.0.1:4000/marcas/nuevaMarca', body, { headers: headers })
      .pipe(
        tap((res: any) => {
          if (res.mensaje == "Marca insertado correctamente") {
            console.log("servicio", res.mensaje);
          }
        }),
        catchError(err => of(err.error.message))
      );
  }

  eliminar_marca(id:string | null){
    const apiUrl='http://127.0.0.1:4000'
    const url = `${apiUrl}/marcas/eliminar/${id}`;
    return this.http.delete<any>(url)
  }



  // Función ajustada para obtener un proveedor por su ID
  getMarcaById(id: string): Observable<Marca | null> { // Ajusta aquí el tipo de retorno
    const apiUrl = 'http://127.0.0.1:4000'; // Definición de la URL base dentro de la función
    return this.http.get<Marca>(`${apiUrl}/marcas/porID/${id}`)
      .pipe(
        tap(_ => console.log(`fetched product id=${id}`)), // Operación de efecto secundario para registrar en la consola
        catchError(err => {
          console.error(`Error fetching product id=${id}`, err);
          return of(null); // En caso de error, se retorna null
        })
      );
  }



  actualizarMarca(id: string, datosProveedor: any): Observable<any> {
    const apiUrl = 'http://127.0.0.1:4000'; // La URL base de tu API
    return this.http.put<any>(`${apiUrl}/marcas/actualizar/${id}`, datosProveedor)
      .pipe(
        tap(res => console.log(`Marca actualizado id=${id}`, res)),
        catchError(err => {
          console.error(`Error actualizando Marca id=${id}`, err);
          return of(err.error);
        })
      );
  }


}
