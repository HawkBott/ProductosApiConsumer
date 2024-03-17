import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';
import { ServiciosProductoService } from 'src/app/all_services/servicios_producto/servicios-producto.service';

import { Producto } from 'src/app/modelos/productos.modelos';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {
  prodId: string | null = null;

  productoVacio: Producto = {
    _id:{
      $oid:'',
    },
    clave: '',
    nombre: '',
    dimensiones: {
      alto: 0,
      ancho: 0,
      grosor: 0,
      peso: 0
    },
    modelo: '',
    costo: 0,
    precio: 0,
    cantidadExistente: 0,
    status: '',
    especificacionesTecnicas: {
      sistemaOperativo: '',
      resolucionPantalla: 0,
      tipoBateria: '',
      memoriaInterna: '',
      CPU: '',
      camara: '',
      memoriaRAM: ''
    },
    conexiones: [],
    fechaAdquisicion: '', 
    origen: '',
    foto: '',
    descuento: {
      porcentaje: 0,
      temporada: ''
    },
    proveedorId: '',
    marcaId: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productosService: ServiciosProductoService // Injectar el servicio
  ) { }


  

  ngOnInit(): void {
    this.prodId = this.route.snapshot.paramMap.get('id');
    if (this.prodId) {
      this.obtenerProductoPorId(this.prodId);
    }
  }

  obtenerProductoPorId(id: string): void {
    this.productosService.getProductById(id).subscribe({
      next: (producto: Producto | null) => { // Ajusta el tipo aquí para aceptar Producto o null
        if (producto) {
          this.productoVacio = producto;
          console.log('Producto obtenido:', this.productoVacio);
        } else {
          console.log('Producto no encontrado');
          // Aquí puedes manejar el caso en que el producto no se encuentre, por ejemplo,
          // redirigiendo al usuario a otra página o mostrando un mensaje de error.
        }
      },
      error: (error) => {
        console.error('Error al obtener el producto:', error);
      }
    });
    
  }





 // En ActualizarProductoComponent

  actualizarProducto(): void {
    if (!this.prodId) {
      console.error('Error: El ID del producto es nulo');
      return;
    }

    // Prepara el objeto con los datos a actualizar
    const datosParaActualizar = {
      costo: this.productoVacio.costo,
      // Asume que tienes campos en `this.productoVacio` para cada uno de estos
      cantidadExistente: this.productoVacio.cantidadExistente,
      status: this.productoVacio.status,
      origen: this.productoVacio.origen,
      clave: this.productoVacio.clave,
    };

    this.productosService.actualizarProducto(this.prodId, datosParaActualizar).subscribe({
      next: (respuesta) => {
        console.log('Producto actualizado con éxito', respuesta);
        // Redirige a la ruta deseada después de actualizar el producto
        this.router.navigate(['/catalogo-producto']);
      },
      error: (error) => {
        console.error('Error al actualizar el producto', error);
        // Manejo del error
      }
    });
  }

  


  

  
}



