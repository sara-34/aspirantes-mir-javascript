// Define el objeto persona
const persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Bogotá",
    profesion: "Ingeniero"
  };
  
  // Imprime el objeto persona completo
  console.log(persona);
  
  // Define la función presentacion
  function presentacion(objeto) {
    return `Hola, mi nombre es ${objeto.nombre}, tengo ${objeto.edad} años y vivo en ${objeto.ciudad}.`;
  }
  
  // Llama a la función presentacion y almacena el resultado en una variable
  const mensaje = presentacion(persona);
  
  // Imprime el valor de la variable mensaje
  console.log(mensaje);
  
  // Agrega la propiedad hobbies al objeto persona
  persona.hobbies = ["leer", "viajar", "jugar fútbol"];
  
  // Imprime la propiedad hobbies del objeto persona
  console.log(persona.hobbies);
  
  // Usa un ciclo for para imprimir cada uno de los elementos del arreglo de hobbies
  for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
  }