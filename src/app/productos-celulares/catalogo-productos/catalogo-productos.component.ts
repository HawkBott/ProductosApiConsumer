import { Component, OnInit } from '@angular/core';

//importar servicios y modelo
import { Producto } from 'src/app/modelos/productos.modelos';
import { ServiciosProductoService } from 'src/app/all_services/servicios_producto/servicios-producto.service';

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css']
})
export class CatalogoProductosComponent implements OnInit {
  
  listaProductos: Producto[]=[]

  constructor(private serviciosproductoservice:ServiciosProductoService){}

  ngOnInit(): void {
    this.serviciosproductoservice.productos_get_all()
    .subscribe(data=>{
      console.log(data);
      this.listaProductos=data;
    });
  }

}
