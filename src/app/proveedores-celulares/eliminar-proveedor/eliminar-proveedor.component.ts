import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'; // Importa ActivatedRoute y Params


import { ServiciosProveedoresService } from 'src/app/all_services/servicios_proveedores/servicios-proveedores.service';


@Component({
  selector: 'app-eliminar-proveedor',
  templateUrl: './eliminar-proveedor.component.html',
  styleUrls: ['./eliminar-proveedor.component.css']
})
export class EliminarProveedorComponent implements OnInit  {

  proveedorID: string | null=null;


  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private servicioProveedor: ServiciosProveedoresService) { }


    ngOnInit(): void {
      this.proveedorID = this.activatedRoute.snapshot.paramMap.get('id');
      console.log(this.proveedorID);
      this.eliminar();
    }
    
    res: any;
    messageErr: any;
    
    eliminar() {
      try {
        this.res = this.servicioProveedor.eliminar_proveedor(this.proveedorID)
          .subscribe(data => {
            console.log(data);
          });
        alert("producto eliminado");
        // Redirecciona para cargar el componente catálogo
        this.router.navigate(['/catalogo-proveedor']);
      } catch (error: any) {
        this.messageErr = error.error.message;
      }
    }


    
}
