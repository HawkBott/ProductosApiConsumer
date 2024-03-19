import { Component, OnInit } from '@angular/core';

// Importar servicios y modelo
import { Marca } from 'src/app/modelos/marcas.modelos';
import { MarcaService } from 'src/app/all_services/servicios_marca/marca.service';

// Extender el modelo Marca para incluir la propiedad 'expanded'
interface MarcaExpandida extends Marca {
  expanded: boolean; // Asegura que la propiedad expanded siempre esté presente
}

@Component({
  selector: 'app-catalogo-marca',
  templateUrl: './catalogo-marca.component.html',
  styleUrls: ['./catalogo-marca.component.css']
})
export class CatalogoMarcaComponent implements OnInit {

  listaMarcas: MarcaExpandida[] = []; // Usar el modelo extendido

  constructor(private serviciosmarcaservice: MarcaService) {}

  ngOnInit(): void {
    this.serviciosmarcaservice.get_marcas()
      .subscribe(data => {
        // Añadir la propiedad 'expanded' a cada marca con valor inicial 'false'
        this.listaMarcas = data.map(marca => ({
          ...marca,
          expanded: false // Inicializar todas las marcas como colapsadas
        }));
      });
  }
}
