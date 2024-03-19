import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


import { Marca } from 'src/app/modelos/marcas.modelos';
import { MarcaService } from 'src/app/all_services/servicios_marca/marca.service';


@Component({
  selector: 'app-nueva-marca',
  templateUrl: './nueva-marca.component.html',
  styleUrls: ['./nueva-marca.component.css']
})
export class NuevaMarcaComponent {

  listaMarca: Marca[] = [];

  logo: string | ArrayBuffer | null = null; 


  constructor(private servicioMarca: MarcaService, 
    private router: Router
    ) { }


  marcaVacia: Marca = {
    _id: {
      $oid: "", // String
    },
    marcaID: '',
    nombre_marca: '',
    logo: '',
    descripcion: '',
    sitio_web: '',
    productosId: []
  };


ngOnInit(): void {
    
  
  this.servicioMarca.get_marcas()
  .subscribe(data =>{
    console.log(data)
    this.listaMarca=data;
  });
}



convertir_B64(event: any) {
  //alert(event.target.files[0].name)
  if (event.target.files && event.target.files[0])
  {
    var file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.logo = reader.result;
    reader.readAsDataURL(file);
  }
}

enviarMarca() {

  this.marcaVacia.logo = this.logo as string || '';
    
  this.servicioMarca.new_marca(this.marcaVacia).subscribe(data => {
      console.log("MARCA", data);
    
      if (data) {
          this.router.navigateByUrl('/catalogo_marca');
      } else {
          console.log("error");
      }
  });
}



}
