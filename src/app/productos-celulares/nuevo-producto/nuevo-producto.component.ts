import { Component, OnInit } from '@angular/core';

// Importaciones necesarias
import { MarcaService } from 'src/app/servicios_marca/marca.service';
import { Marca } from 'src/app/modelos/marcas.modelos';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  listaMarcas: Marca[] = [];

  constructor(private servicioMarca: MarcaService) { }

  ngOnInit(): void {
    this.cargarMarcas();
  }

  cargarMarcas(): void {
    this.servicioMarca.get_marcas().subscribe(data => {
      this.listaMarcas = data;
    });
  }

  get_id_marca(id: string): void {
    console.log("Marca seleccionada ID:", id);
    // Aquí puedes agregar más lógica usando el ID de la marca
  }
}
