import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


import { Marca } from 'src/app/modelos/marcas.modelos';
import { MarcaService } from 'src/app/all_services/servicios_marca/marca.service';


@Component({
  selector: 'app-actualizar-marca',
  templateUrl: './actualizar-marca.component.html',
  styleUrls: ['./actualizar-marca.component.css']
})
export class ActualizarMarcaComponent implements OnInit {


  marcaID: string | null = null;


  marcaVacia: Marca = {
    _id: {
      $oid: "", // String
    },
    marcaID: '',
    nombre_marca: '',
    logo: '',
    descripcion: '',
    sitio_web: '',
    productosId: []
  };


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private marcaService: MarcaService // Injectar el servicio
  ) { }


  ngOnInit(): void {
    this.marcaID = this.route.snapshot.paramMap.get('id');
    if (this.marcaID) {
      this.obtenerProveedorPorId(this.marcaID);
    }
  }

  obtenerProveedorPorId(id: string): void {
    this.marcaService.getMarcaById(id).subscribe({
      next: (proveedor: Marca | null) => { // Ajusta el tipo aquí para aceptar Producto o null
        if (proveedor) {
          this.marcaVacia = proveedor;
          console.log('Marca obtenido:', this.marcaVacia);
        } else {
          console.log('Marca no encontrado');
          // Aquí puedes manejar el caso en que el producto no se encuentre, por ejemplo,
          // redirigiendo al usuario a otra página o mostrando un mensaje de error.
        }
      },
      error: (error) => {
        console.error('Error al obtener la Marca:', error);
      }
    });
    
  }


  actualizarMarca(): void {
    if (!this.marcaID) {
      console.error('Error: El ID de la Marca es nulo');
      return;
    }

    // Prepara el objeto con los datos a actualizar
    const datosParaActualizar = {
      marcaID: this.marcaVacia.marcaID,
      // Asume que tienes campos en `this.proveedorVacio` para cada uno de estos
      nombre_marca: this.marcaVacia.nombre_marca,
      logo: this.marcaVacia.logo,
      descripcion: this.marcaVacia.descripcion,
      sitio_web: this.marcaVacia.sitio_web,
    };

    this.marcaService.actualizarMarca(this.marcaID, datosParaActualizar).subscribe({
      next: (respuesta) => {
        console.log('Marca actualizado con éxito', respuesta);
        // Redirige a la ruta deseada después de actualizar el proveedor
        this.router.navigate(['/catalogo_marca']);
      },
      error: (error) => {
        console.error('Error al actualizar la marca', error);
        // Manejo del error
      }
    });
  }



}
