import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { BuscarProductosComponent } from './buscar-productos/buscar-productos.component';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';
import { CatalogoProductosComponent } from './catalogo-productos/catalogo-productos.component';



@NgModule({
  declarations: [
    CatalogoProductosComponent,
    
    BuscarProductosComponent,
    NuevoProductoComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    NuevoProductoComponent,
    CatalogoProductosComponent,
  ]
})
export class ProductosCelularesModule { }
