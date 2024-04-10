// blucles (Ejecutar un bloque de codigo repetidamente)

// for
for (let index = 1; index <= 2; index++) {
  console.log("Hola mundo " + index);
}

// while
let number = 1;
while (number <= 5) {
  console.log("Ejecutando while " + number);
  number++;
}

// ejemplo con while
// let nombre = prompt("Ingrese el nombre correcto");

// while (nombre != "Juan") {
//   console.log("Nombre ingresado " + nombre);
//   nombre = prompt("ingresa otro nombre, porque ese no es el correcto");
// }

// do while (Por lo menos se ejecuta una vez)
let numberPrompt = parseInt(prompt("Ingresa un numero"));

do {
  console.log("Numero ingresado: " + numberPrompt);
  numberPrompt = parseInt(prompt("Ingresa otro numero, ya que ese no es"));
} while (numberPrompt != 5);
