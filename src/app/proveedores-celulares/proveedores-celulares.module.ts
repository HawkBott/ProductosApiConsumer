import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualizarProveedorComponent } from './actualizar-proveedor/actualizar-proveedor.component';
import { EliminarProveedorComponent } from './eliminar-proveedor/eliminar-proveedor.component';
import { CatalogoProveedoresComponent } from './catalogo-proveedores/catalogo-proveedores.component';
import { NuevoProveedorComponent } from './nuevo-proveedor/nuevo-proveedor.component';



@NgModule({
  declarations: [
    ActualizarProveedorComponent,
    EliminarProveedorComponent,
    CatalogoProveedoresComponent,
    NuevoProveedorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProveedoresCelularesModule { }
