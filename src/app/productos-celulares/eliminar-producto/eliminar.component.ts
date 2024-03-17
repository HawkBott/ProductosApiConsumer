import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'; // Importa ActivatedRoute y Params


import { ServiciosProductoService } from 'src/app/all_services/servicios_producto/servicios-producto.service';




@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {


  prodId: string | null=null;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private servicioProd: ServiciosProductoService) { }


    ngOnInit(): void {
      this.prodId = this.activatedRoute.snapshot.paramMap.get('id');
      console.log(this.prodId);
      this.eliminar();
    }
    
    res: any;
    messageErr: any;
    
    eliminar() {
      try {
        this.res = this.servicioProd.eliminar_prod(this.prodId)
          .subscribe(data => {
            console.log(data);
          });
        alert("producto eliminado");
        // Redirecciona para cargar el componente catálogo
        this.router.navigate(['/catalogo-producto']);
      } catch (error: any) {
        this.messageErr = error.error.message;
      }
    }
    
    
}
