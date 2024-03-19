import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule


//Continuacion de todo lo agregado practica 1
import { NavegacionModule } from './navegacion/navegacion.module';

//Todo lo relacionado a los productos
import { ProductosCelularesModule } from './productos-celulares/productos-celulares.module';


//Todo lo relacionado a los proveedores
import { ProveedoresCelularesModule } from './proveedores-celulares/proveedores-celulares.module';

import { MarcasCelularesModule } from './marcas-celulares/marcas-celulares.module';








@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    //imports sobre la practica 1
    NavegacionModule,

    
    HttpClientModule, // Añade HttpClientModule aquí

    ProductosCelularesModule,

    ProveedoresCelularesModule,

    MarcasCelularesModule,
    




    


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
