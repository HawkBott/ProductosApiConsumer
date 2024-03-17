import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http'; // Paso 1: Importar HttpClientModule
import { Producto } from '../../modelos/productos.modelos';

import { Observable, tap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiciosProductoService {

  constructor(private http:HttpClient) { }

  productos_get_all(){
    return this.http.get<Producto[]>('http://127.0.0.1:4000/productos/get_all')
  }


  new_product(productoVacio: Producto): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    const body = { Producto: productoVacio };  // Envía el objeto Producto como una propiedad

    return this.http.post<any>('http://127.0.0.1:4000/productos/nuevoProd', body, { headers: headers })
      .pipe(
        tap((res: any) => {
          if (res.mensaje == "Producto insertado correctamente") {
            console.log("servicio", res.mensaje);
          }
        }),
        catchError(err => of(err.error.message))
      );
  }





  eliminar_prod(id:string | null){
    const apiUrl='http://127.0.0.1:4000'
    const url = `${apiUrl}/productos/eliminar/${id}`;
    return this.http.delete<any>(url)
  }


  
  // Función ajustada para obtener un producto por su ID
  getProductById(id: string): Observable<Producto | null> { // Ajusta aquí el tipo de retorno
    const apiUrl = 'http://127.0.0.1:4000'; // Definición de la URL base dentro de la función
    return this.http.get<Producto>(`${apiUrl}/productos/porID/${id}`)
      .pipe(
        tap(_ => console.log(`fetched product id=${id}`)), // Operación de efecto secundario para registrar en la consola
        catchError(err => {
          console.error(`Error fetching product id=${id}`, err);
          return of(null); // En caso de error, se retorna null
        })
      );
  }


  actualizarProducto(id: string, datosProducto: any): Observable<any> {
    const apiUrl = 'http://127.0.0.1:4000'; // La URL base de tu API
    return this.http.put<any>(`${apiUrl}/productos/actualizar/${id}`, datosProducto)
      .pipe(
        tap(res => console.log(`Producto actualizado id=${id}`, res)),
        catchError(err => {
          console.error(`Error actualizando producto id=${id}`, err);
          return of(err.error);
        })
      );
  }



}




