import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Continuacion de todo lo agregado practica 1
import { NavegacionModule } from './navegacion/navegacion.module';

//Todo lo relacionado a los productos
import { ProductosCelularesModule } from './productos-celulares/productos-celulares.module';


//Todo lo relacionado a los proveedores
import { ProveedoresCelularesModule } from './proveedores-celulares/proveedores-celulares.module';

import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule






@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //imports sobre la practica 1
    NavegacionModule,
    ProductosCelularesModule,
    FormsModule,
    HttpClientModule, // Añade HttpClientModule aquí




    
    ProductosCelularesModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
