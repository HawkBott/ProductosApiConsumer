import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'; 

import { MarcaService } from 'src/app/all_services/servicios_marca/marca.service';

@Component({
  selector: 'app-eliminar-marca',
  templateUrl: './eliminar-marca.component.html',
  styleUrls: ['./eliminar-marca.component.css']
})
export class EliminarMarcaComponent implements OnInit  {

  marcaID: string | null=null;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private servicioMarca: MarcaService) { }


    ngOnInit(): void {
      this.marcaID = this.activatedRoute.snapshot.paramMap.get('id');
      console.log(this.marcaID);
      this.eliminar();
    }
    
    res: any;
    messageErr: any;
    
    eliminar() {
      try {
        this.res = this.servicioMarca.eliminar_marca(this.marcaID)
          .subscribe(data => {
            console.log(data);
          });
        alert("marca eliminado");
        // Redirecciona para cargar el componente catálogo
        this.router.navigate(['/catalogo_marca']);
      } catch (error: any) {
        this.messageErr = error.error.message;
      }
    }

}
