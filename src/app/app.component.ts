import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'celularesdb';
  grupo="5A";
  producto={
    nombre:"Xiomi",
    precio:7363,
    foto:"./assets/fotos/mongofoto.png",
  }


}
