export interface Proveedor {
    _id:{
      $oid:string,
    };
    nombre: string;
    sitio_web: string;
    RFC: string;
    telefono: string;
    direccion: Direccion;
  }
  
  interface Direccion {
    pais: string;
    estado: string;
    municipio: string;
    cp: string;
    calle: string;
    numero_interior: string;
    numero_exterior: string;
    colonia: string;
  }
  