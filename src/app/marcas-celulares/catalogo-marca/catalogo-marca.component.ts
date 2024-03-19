import { Component, OnInit  } from '@angular/core';

//importar servicios y modelo
import { Marca } from 'src/app/modelos/marcas.modelos';
import { MarcaService } from 'src/app/all_services/servicios_marca/marca.service';



@Component({
  selector: 'app-catalogo-marca',
  templateUrl: './catalogo-marca.component.html',
  styleUrls: ['./catalogo-marca.component.css']
})
export class CatalogoMarcaComponent implements OnInit  {

  listaMarcas: Marca[]=[]

  constructor(private serviciosmarcaservice:MarcaService){}

  ngOnInit(): void {
    this.serviciosmarcaservice.get_marcas()
    .subscribe(data=>{
      console.log(data);
      this.listaMarcas=data;
    });
  }

}
