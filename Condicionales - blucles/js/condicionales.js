// prompt
// let nombre = prompt("Ingresa tu Nombre");
// let apellido = prompt("Ingresa tu Apellido");

// Condiciones (true o false)

if (false) {
  console.log("dentro del if");
}

// Igualdad (==)
let nombre = prompt("Ingresa tu Nombre");

if (nombre == "Juan") {
  console.log("Bienvenido Juan");
}

// Igualar estricto (===) Iguala tambien el tipo de dato
let edad = parseInt(prompt("Ingresa tu Edad"));

// cambiar un string para transformalo a number
// Valor en numero sin coma (numero entero)
console.log(parseInt(edad));
// Valor en numero con coma (numero decimal)
console.log(parseFloat(edad));

// NaN = Not A Number

if (edad === 18) {
  console.log("Felicidades por tus 18 años");
}

// Desigual (! =)
if (nombre != "Juan") {
  console.log("Vos no sos Juan!! Sali de aca!");
}

// desigual estricto (! = =)
if (edad !== 18) {
  console.log("Solo entran los que tienen 18");
}

// Menor y Mayor (< = menor que, > mayor que)

if (edad < 18) {
  console.log("Sos menor de 18, no podes pasar");
}

if (edad > 17) {
  console.log("Sos mayor de 18, podes pasar!!");
}

// Mayor/Menor e igual (<=, >=)
if (edad <= 17) {
  console.log("No sos mayor de 18");
}

if (edad >= 18) {
  console.log("Ya sos mayor de 18");
}

// anidacion de if
if (false) {
  console.log("Condicion 1");
} else if (false) {
  console.log("Condicion 2");
} else {
  console.log("Alternatica a las condiciones del if");
}

// switch
switch (nombre) {
  case "Juan":
    console.log("Hola Juan, como andas?");
    break;
  case "Gonza":
    console.log("Hola Gonza, como andas?");
    break;
  default:
    console.log("No se quien sos");
}
