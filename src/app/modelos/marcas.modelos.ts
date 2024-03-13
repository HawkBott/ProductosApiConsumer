export interface Marca {
    marcaID: string;
    nombre_marca: string;
    logo: string;
    descripcion: string;
    sitio_web: string;
    productosId: string[]; // Array de strings, suponiendo que ObjectId es una cadena
  }
  