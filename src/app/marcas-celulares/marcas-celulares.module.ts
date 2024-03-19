import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ActualizarMarcaComponent } from './actualizar-marca/actualizar-marca.component';
import { EliminarMarcaComponent } from './eliminar-marca/eliminar-marca.component';
import { CatalogoMarcaComponent } from './catalogo-marca/catalogo-marca.component';
import { NuevaMarcaComponent } from './nueva-marca/nueva-marca.component';





@NgModule({
  declarations: [
    ActualizarMarcaComponent,
    EliminarMarcaComponent,
    CatalogoMarcaComponent,
    NuevaMarcaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports:[
    NuevaMarcaComponent,
    CatalogoMarcaComponent,
  ]
})
export class MarcasCelularesModule { }
