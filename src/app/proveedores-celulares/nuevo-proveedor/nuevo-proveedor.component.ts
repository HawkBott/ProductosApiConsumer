import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


//Todo lo relaciona a Proveedores
import { Proveedor } from 'src/app/modelos/proveedores.modelos';
import { ServiciosProveedoresService } from 'src/app/all_services/servicios_proveedores/servicios-proveedores.service';

@Component({
  selector: 'app-nuevo-proveedor',
  templateUrl: './nuevo-proveedor.component.html',
  styleUrls: ['./nuevo-proveedor.component.css']
})
export class NuevoProveedorComponent implements OnInit  {

  listaProveedor: Proveedor[] = [];


  constructor(private servicioProveedor: ServiciosProveedoresService, 
    private router: Router
    ) { }


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

  ngOnInit(): void {
    
  
    this.servicioProveedor.proveedores_get_all()
    .subscribe(data =>{
      console.log(data)
      this.listaProveedor=data;
    });
  }


  enviarProveedor() {
    
    this.servicioProveedor.new_proveedor(this.proveedorVacio).subscribe(data => {
        console.log("PROVEEDOR", data);
      
        if (data) {
            this.router.navigateByUrl('/catalogo-proveedor');
        } else {
            console.log("error");
        }
    });
  }



}
