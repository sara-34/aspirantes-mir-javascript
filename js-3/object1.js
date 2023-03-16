// Define el objeto
const pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"],
  };
  
  // Imprime el valor de la llave edad
  console.log(pedro.edad);
  
  // Agrega la propiedad estatura
  pedro.estatura = 1.8;
  
  // Elimina la propiedad activo
  delete pedro.activo;
  
  // Recorre todas las propiedades e imprímelas en consola
  for (let key in pedro) {
    console.log(`${key}: ${pedro[key]}`);
  }
  
  // Agrega una función llamada saluda
  pedro.saluda = function() {
    return `Hola, me llamo ${this.nombre}`;
  }
  
  // Llama la función saluda y verifica el resultado
  console.log(pedro.saluda());