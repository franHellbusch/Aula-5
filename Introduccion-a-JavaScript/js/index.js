// Variables

// var (no se utiliza nunca, por convenio entre desarrolladores actules)
var nombre = "Hola mundo";
// nos permite repetir la declaracion de la variable
var nombre = "Hola mundo";
var edad = 10;
// nos permite sobreescribir el valor
edad = 18;

// let (nos permite sobreescribir el valor y no permite redecrarar la varibale)
let email = "email@gmail.com";
email = 12039;

// const (no nos permite sobreescribir el valor ni redecrarar la varibale)
const password = "password123";

// palabras reservadas (Palabras o funcionalidades que estan directamente en javascript)

// console (interaccion con la consola)
// console log
console.log("Hola mundo desde el console");
// console info
console.info("Hola mundo desde el console");
// console error
console.error("Ocurrio un error en la consola");

// alert
alert("Una alerta en el navegador");

// mostrar informacion de las variables
let ejemplo = "Ejemplo de muestra";
console.log(ejemplo);
alert(ejemplo);

// interaccion con Objects
const usuario = {
  nombre: "Juan",
  apellido: "Chavez",
  edad: 21,
};

// acceder a una clave de un objeto
console.log(usuario.nombre, usuario["apellido"]);

// sobreecribir una clave de un objeto
// si sobreescribimos el valor de una clave dentro de una const, nos dejaria ya que no es el tipo principal de la variable
usuario.nombre = "Felipe";
console.log(usuario.nombre, usuario["apellido"]);

// operaciones matematicas
// sumar
let suma = 10 + 20;
// restar
let resta = 10 - 20;
// multiplicacion
let multiplicar = 10 * 20;
// divicion
let dividir = 10 / 20;

// operacion con otro tipo de dato
// juntar cadenas de texto
let sumarStrings = "Hola " + "Mundo";

// Excepciones para sumar numeros y strings
let sumaEntreNumberYString = 20 + "10";

console.log(sumaEntreNumberYString);
