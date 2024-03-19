import { Component, OnInit } from '@angular/core';

// Importar servicios y modelo
import { Proveedor } from 'src/app/modelos/proveedores.modelos';
import { ServiciosProveedoresService } from 'src/app/all_services/servicios_proveedores/servicios-proveedores.service';

// Extender el modelo Proveedor para incluir la propiedad 'expanded'
interface ProveedorExpandido extends Proveedor {
  expanded?: boolean; // Propiedad opcional para controlar la visibilidad de los detalles
}

@Component({
  selector: 'app-catalogo-proveedores',
  templateUrl: './catalogo-proveedores.component.html',
  styleUrls: ['./catalogo-proveedores.component.css']
})
export class CatalogoProveedoresComponent implements OnInit  {

  listaProveedores: ProveedorExpandido[] = []; // Utilizar el nuevo modelo extendido

  constructor(private serviciosproveedorservice: ServiciosProveedoresService) {}

  ngOnInit(): void {
    this.serviciosproveedorservice.proveedores_get_all()
    .subscribe(data => {
      // Añadir la propiedad 'expanded' a cada proveedor y establecerla como false
      this.listaProveedores = data.map(proveedor => ({
        ...proveedor,
        expanded: false // Todos los proveedores están colapsados por defecto
      }));
    });
  }
}
