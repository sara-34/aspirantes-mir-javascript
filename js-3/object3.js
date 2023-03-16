// Crear el objeto vacío
const receta = {};

// Agregar propiedades
receta.nombre = "Sandwich";
receta.ingredientes = [];

// Agregar objetos al arreglo ingredientes
receta.ingredientes.push({nombre: "Pan", cantidad: 2});
receta.ingredientes.push({nombre: "Queso", cantidad: 1});

// Imprimir el nombre del primer ingrediente
console.log(receta.ingredientes[0].nombre);

// Sumar las cantidades de los ingredientes
let total = 0;
for (let i = 0; i < receta.ingredientes.length; i++) {
  total += receta.ingredientes[i].cantidad;
}

// Imprimir el total de las cantidades
console.log("Total de ingredientes:", total);