import { Component, OnInit } from '@angular/core';

//importar servicios y modelo
import { Proveedor } from 'src/app/modelos/proveedores.modelos';
import { ServiciosProveedoresService } from 'src/app/all_services/servicios_proveedores/servicios-proveedores.service';

@Component({
  selector: 'app-catalogo-proveedores',
  templateUrl: './catalogo-proveedores.component.html',
  styleUrls: ['./catalogo-proveedores.component.css']
})
export class CatalogoProveedoresComponent implements OnInit  {

  listaProveedores: Proveedor[]=[]

  constructor(private serviciosproveedorservice:ServiciosProveedoresService){}

  ngOnInit(): void {
    this.serviciosproveedorservice.proveedores_get_all()
    .subscribe(data=>{
      console.log(data);
      this.listaProveedores=data;
    });
  }


}
