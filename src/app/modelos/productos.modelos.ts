// Definición de la interfaz para las dimensiones del producto
export interface Dimensiones {
    alto: number;
    ancho: number;
    grosor: number;
    peso: number;
}
  
  // Definición de la interfaz para las especificaciones técnicas del producto
export interface EspecificacionesTecnicas {
    sistemaOperativo: string;
    resolucionPantalla: number;
    tipoBateria: string;
    memoriaInterna: string;
    CPU: string;
    camara: string;
    memoriaRAM: string;
}
  
  // Definición de la interfaz para el descuento del producto
export interface Descuento {
    porcentaje: number;
    temporada: string;
}
  
  // Definición de la interfaz principal del Producto
export interface Producto {
    _id:{
      $oid:string,
    };
    clave: string;
    nombre: string;
    dimensiones: Dimensiones;
    modelo: string;
    costo: number;
    precio: number;
    cantidadExistente: number;
    status: string; // Uso de union type para restringir los valores
    especificacionesTecnicas: EspecificacionesTecnicas;
    conexiones: string[];
    fechaAdquisicion: Date | string; // Se puede usar Date o string dependiendo de cómo se manejen las fechas
    origen: string;
    foto: string;
    descuento: Descuento;
    proveedorId: string; // ObjectId se representa como un string en TypeScript
    marcaId: string; // Similarmente, ObjectId se representa como un string
}
  