import { Component, OnInit } from '@angular/core';

// Importar servicios y modelo
import { Producto } from 'src/app/modelos/productos.modelos';
import { ServiciosProductoService } from 'src/app/all_services/servicios_producto/servicios-producto.service';

// Extender el modelo Producto para incluir la propiedad 'expanded'
interface ProductoExpandido extends Producto {
  expanded?: boolean; // Propiedad opcional para controlar la visibilidad de los detalles
}

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css']
})
export class CatalogoProductosComponent implements OnInit {
  
  listaProductos: ProductoExpandido[] = []; // Utilizar el nuevo modelo extendido

  constructor(private serviciosproductoservice: ServiciosProductoService) {}

  ngOnInit(): void {
    this.serviciosproductoservice.productos_get_all()
    .subscribe(data => {
      // Añadir la propiedad 'expanded' a cada producto y establecerla como false
      this.listaProductos = data.map(producto => ({
        ...producto,
        expanded: false // Todos los productos están colapsados por defecto
      }));
    });
  }
}
