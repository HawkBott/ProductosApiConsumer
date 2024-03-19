import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Nuevo producto parte 2
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { EliminarComponent } from './eliminar-producto/eliminar.component';
import { BuscarProductosComponent } from './buscar-productos/buscar-productos.component';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';
import { CatalogoProductosComponent } from './catalogo-productos/catalogo-productos.component';



@NgModule({
  declarations: [
    CatalogoProductosComponent,
    BuscarProductosComponent,
    NuevoProductoComponent,
    ActualizarProductoComponent,
    EliminarComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports:[
    NuevoProductoComponent,
    CatalogoProductosComponent,
  ]
})
export class ProductosCelularesModule { }
