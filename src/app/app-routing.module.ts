import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NuevoProductoComponent } from './productos-celulares/nuevo-producto/nuevo-producto.component';

import { CatalogoProductosComponent } from './productos-celulares/catalogo-productos/catalogo-productos.component';


const routes: Routes = [
  { path: 'nuevo-producto', component: NuevoProductoComponent },
  { path: 'catalogo-producto', component:CatalogoProductosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
