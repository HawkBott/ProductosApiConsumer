import { Component } from '@angular/core';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent {
  alto: number = 14.5;
  ancho: number = 7.5;
  grosor: number = 8;
  peso: number = 150;

  // Puedes añadir métodos si necesitas realizar acciones adicionales cuando los valores cambian
}



