
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



import { Proveedor } from 'src/app/modelos/proveedores.modelos';
import { ServiciosProveedoresService } from 'src/app/all_services/servicios_proveedores/servicios-proveedores.service';

@Component({
  selector: 'app-actualizar-proveedor',
  templateUrl: './actualizar-proveedor.component.html',
  styleUrls: ['./actualizar-proveedor.component.css']
})
export class ActualizarProveedorComponent implements OnInit  {


  proveedorID: string | null=null;

  proveedorVacio: Proveedor = {
    _id: {
      $oid: "", // String
    },
    proveedorId: "",
    nombre: "",
    sitio_web: "",
    RFC: "", 
    telefono: "",
    direccion: {
        pais: "",
        estado: "",
        municipio: "",
        cp: "",
        calle: "",
        numero_interior: "",
        numero_exterior: "", 
        colonia: ""
    }
  };


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private proveedorService: ServiciosProveedoresService // Injectar el servicio
  ) { }



  ngOnInit(): void {
    this.proveedorID = this.route.snapshot.paramMap.get('id');
    if (this.proveedorID) {
      this.obtenerProveedorPorId(this.proveedorID);
    }
  }


  obtenerProveedorPorId(id: string): void {
    this.proveedorService.getProveedorById(id).subscribe({
      next: (proveedor: Proveedor | null) => { // Ajusta el tipo aquí para aceptar Proveedor o null
        if (proveedor) {
          this.proveedorVacio = proveedor;
          console.log('Proveedor obtenido:', this.proveedorVacio);
        } else {
          console.log('Proveedor no encontrado');
          // Aquí puedes manejar el caso en que el proveedor no se encuentre, por ejemplo,
          // redirigiendo al usuario a otra página o mostrando un mensaje de error.
        }
      },
      error: (error) => {
        console.error('Error al obtener el Proveedor:', error);
      }
    });
    
  }


  actualizarProveedor(): void {
    if (!this.proveedorID) {
      console.error('Error: El ID del Proveedor es nulo');
      return;
    }

    // Prepara el objeto con los datos a actualizar
    const datosParaActualizar = {
      proveedorId: this.proveedorVacio.proveedorId,
      // Asume que tienes campos en `this.proveedorVacio` para cada uno de estos
      nombre: this.proveedorVacio.nombre,
      RFC: this.proveedorVacio.RFC,
      telefono: this.proveedorVacio.telefono,
      sitio_web: this.proveedorVacio.sitio_web,
    };

    this.proveedorService.actualizarProveedor(this.proveedorID, datosParaActualizar).subscribe({
      next: (respuesta) => {
        console.log('Proveedor actualizado con éxito', respuesta);
        // Redirige a la ruta deseada después de actualizar el proveedor
        this.router.navigate(['/catalogo-proveedor']);
      },
      error: (error) => {
        console.error('Error al actualizar el Proveedor', error);
        // Manejo del error
      }
    });
  }





}
