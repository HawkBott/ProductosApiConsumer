import { Component, OnInit } from '@angular/core';
// Importaciones necesarias
import { MarcaService } from 'src/app/all_services/servicios_marca/marca.service';
import { Marca } from 'src/app/modelos/marcas.modelos';
//importacion para el objeto
import { Producto } from 'src/app/modelos/productos.modelos';
import { ServiciosProductoService } from 'src/app/all_services/servicios_producto/servicios-producto.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  listaMarcas: Marca[] = [];

  imagen1: string | ArrayBuffer | null = null; 

  constructor(private servicioMarca: MarcaService, private servicioProducto:ServiciosProductoService, private router: Router) { }

  productoVacio: Producto = {
    _id: {
        $oid: "", // String
    },
    clave: "", // String  
    nombre: "", // String
    dimensiones: {
        alto: 0, // Number
        ancho: 0, // Number
        grosor: 0, // Number
        peso: 0, // Number
    },
    modelo: "", // String
    costo: 0, // Number
    precio: 0, // Number
    cantidadExistente: 0, // Number
    status: "", // String: Deberías especificar los posibles valores como parte de tu lógica de negocio
    especificacionesTecnicas: {
        sistemaOperativo: "", // String
        resolucionPantalla: 0, // Number
        tipoBateria: "", // String
        memoriaInterna: "", // String
        CPU: "", // String
        camara: "", // String
        memoriaRAM: "", // String
    },
    conexiones: [], // Array de strings
    fechaAdquisicion: "", // Date | String
    origen: "", // String
    foto: "", // String
    descuento: {
        porcentaje: 0, // Number
        temporada: "", // String
    },
    proveedorId: "", // String
    marcaId: "", // String
};

  marcaVacia: Marca = {
    marcaID: '',
    nombre_marca: '',
    logo: '',
    descripcion: '',
    sitio_web: '',
    productosId: [] // Un array vacío, indicando que no hay productos asociados inicialmente
  };

  calcularPrecioConDescuento() {
    // Asegúrate de que tanto el costo como el descuento estén definidos y sean números
    if (this.productoVacio.costo && this.productoVacio.descuento && !isNaN(this.productoVacio.costo) && !isNaN(this.productoVacio.descuento.porcentaje)) {
        // Calcula el precio con descuento
        let descuento = this.productoVacio.costo * (this.productoVacio.descuento.porcentaje / 100);
        this.productoVacio.precio = this.productoVacio.costo - descuento;
    }
  }




  enviarProd() {

    // Calcula el precio con descuento
    this.calcularPrecioConDescuento();
    // Asegura que imagen1 sea tratado como un string. Si imagen1 es null, se asigna un string vacío.
    this.productoVacio.foto = this.imagen1 as string || '';

    // El resto de tu código permanece igual
    this.productoVacio.costo = Number(this.productoVacio.costo);
    
    console.log(this.productoVacio);
    
    this.servicioProducto.new_product(this.productoVacio).subscribe(data => {
        console.log("PRODUCTO", data);
      
        if (data) {
            this.router.navigateByUrl('/catalogo-producto');
        } else {
            console.log("error");
        }
    });
  }


  ngOnInit(): void {
    this.servicioMarca.get_marcas()
    .subscribe(data =>{
      console.log(data)
      this.listaMarcas=data;
    });
  }
  
  

  

  get_id_marca(id: any): void {
    this.productoVacio.marcaId = id; // Asegúrate de que la propiedad se llame marcaId, no marcaID
    console.log(this.productoVacio.marcaId);
  }
  

  convertir_B64(event: any) {
    //alert(event.target.files[0].name)
    if (event.target.files && event.target.files[0])
    {
      var file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imagen1 = reader.result;
      reader.readAsDataURL(file);
    }
  }

  actualizarConexiones(event: any): void {
    const valor = event.target.value;
    if (event.target.checked) {
      // Añadir el valor si el checkbox está marcado y aún no está en el array
      if (!this.productoVacio.conexiones.includes(valor)) {
        this.productoVacio.conexiones.push(valor);
      }
    } else {
      // Quitar el valor si el checkbox está desmarcado
      this.productoVacio.conexiones = this.productoVacio.conexiones.filter(c => c !== valor);
    }
  }

  

  
  

  

}


