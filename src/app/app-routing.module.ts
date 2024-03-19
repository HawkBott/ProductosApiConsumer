import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



//ALL PRODUCTO
import { NuevoProductoComponent } from './productos-celulares/nuevo-producto/nuevo-producto.component';
import { CatalogoProductosComponent } from './productos-celulares/catalogo-productos/catalogo-productos.component';
import { EliminarComponent } from './productos-celulares/eliminar-producto/eliminar.component';
import { ActualizarProductoComponent } from './productos-celulares/actualizar-producto/actualizar-producto.component';

//ALL PROVEEDOR
import { NuevoProveedorComponent } from './proveedores-celulares/nuevo-proveedor/nuevo-proveedor.component';
import { CatalogoProveedoresComponent } from './proveedores-celulares/catalogo-proveedores/catalogo-proveedores.component';
import { EliminarProveedorComponent } from './proveedores-celulares/eliminar-proveedor/eliminar-proveedor.component';
import { ActualizarProveedorComponent } from './proveedores-celulares/actualizar-proveedor/actualizar-proveedor.component';

//ALL MARCA
import { NuevaMarcaComponent } from './marcas-celulares/nueva-marca/nueva-marca.component';
import { CatalogoMarcaComponent } from './marcas-celulares/catalogo-marca/catalogo-marca.component';
import { EliminarMarcaComponent } from './marcas-celulares/eliminar-marca/eliminar-marca.component';
import { ActualizarMarcaComponent } from './marcas-celulares/actualizar-marca/actualizar-marca.component';



const routes: Routes = [
  //ALL PRODUCTO
  { path: 'nuevo-producto', component: NuevoProductoComponent },
  { path: 'catalogo-producto', component:CatalogoProductosComponent },
  { path: 'eliminar_producto/:id', component: EliminarComponent},
  { path: 'actualizar_producto/:id', component: ActualizarProductoComponent },

  //ALL PROVEEDOR
  { path: 'nuevo-proveedor', component: NuevoProveedorComponent },
  { path: 'catalogo-proveedor', component:CatalogoProveedoresComponent },
  { path: 'eliminar_proveedor/:id', component: EliminarProveedorComponent},
  { path: 'actualizar_proveedor/:id', component: ActualizarProveedorComponent },
  
  //ALL MARCA
  { path: 'nueva_marca', component: NuevaMarcaComponent },
  { path: 'catalogo_marca', component:CatalogoMarcaComponent },
  { path: 'eliminar_marca/:id', component: EliminarMarcaComponent},
  { path: 'actualizar_marca/:id', component: ActualizarMarcaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
