// funciones
function saludar(nombre) {
  console.log("Hola mundo " + nombre);
}

// scope (alcance)

const numero = 10;

function saludarConApellido() {
  console.log(numero);
  const apellido = "fran";
  console.log("Hola mundo " + apellido);
}

// esto no funciona, ya que la funcion es un bloque aislado de codigo
// console.log(apellido);

// Return (devolver informacion desde la funcion)

// sin devolver
function sumar(n1, n2) {
  return n1 + n2;
}

// let nombre = prompt("ingrese su nombre");
// let numero1 = parseInt(prompt("ingrese el primer numero para sumar"));
// let numero2 = parseInt(prompt("ingrese el segundo numero para sumar"));

// let resultado = sumar(numero1, numero2);

// console.log(nombre + " su resultado es: " + resultado);

function emailValidation(email) {
  if (!email.includes("@")) {
    console.log("el email debe incluir un @");
    return;
  }

  return email;
}

// const emailValidado = emailValidation("hflkashdklg");

// if (!emailValidado) {
//   console.log("El email no tiene el formato correcto");
// } else {
//   console.log(emailValidado);
// }

// funciones anonimas
const restar = function (n1, n2) {
  return n1 - n2;
};

// Callback
// function formulario(operacion) {
//   let nombre = prompt("ingrese su nombre");
//   let numero1 = parseInt(prompt("ingrese el primer numero de la operacion"));
//   let numero2 = parseInt(prompt("ingrese el segundo numero de la operacion"));

//   const resultado = operacion(numero1, numero2);
//   console.log(nombre + " su resultado es " + resultado);
// }

// formulario(function (n1, n2) {
//   return n1 * n2;
// });

// formulario(function (n1, n2) {
//   return n1 / n2;
// });

// FUNCIONES FLECHA
const restarConFlecha = (n1, n2) => {
  return n1 - n2;
};

// RETURN IMPLICITO
const sumarConFlecha = (n1, n2) => n1 + n2;

// RECIBIR UN UNICO PARAMETRO SIN PARENTESIS
const saludarConFlecha = (nombre) => console.log("Bienvenido " + nombre);
