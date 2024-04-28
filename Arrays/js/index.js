// Array (lista de frutas)
const frutas = ["Naranja", "manzana", "Banana"];

// la primeracion es 0
frutas[0];
frutas[1];
frutas[2];

// Metodos de arrays

// .length (cantidad de elementos)
frutas.length;
"Hola mundo".length;

// .push() (guardar un elemnto al final de un array)
frutas.push("Mandarina");

// .pop() (elimina un elento del final de un array)
frutas.pop();

// .unshift() (guarda un elemento al principio del array)
frutas.unshift("Kiwi");

// .shift() (elimina un elento del principio de un array)
frutas.shift();

// .find() (buscar un elemento por condicion)
let frutaEncontrada = frutas.find((fruta) => fruta == "Banana");

// .some() (busca un elemento por condicion y dependiendo si este existe nos devuelve un boolean true/false)
let validacionDeFruta = frutas.some((fruta) => fruta == "Banana");

// .includes() (burcar un elemento y obtenes true/false)
frutas.includes("Banana");

// Recorrer arrays
const products = [
  {
    nombre: "Remera",
    precio: 800,
  },
  {
    nombre: "Pantalon",
    precio: 600,
  },
  {
    nombre: "Camisa",
    precio: 1000,
  },
  {
    nombre: "Maya",
    precio: 700,
  },
];

// bucle for
for (let i = 0; i < products.length; i++) {
  products[i];
}

// for of
for (const prod of products) {
}

// .forEach() (recorre el array y ejecuta una funcion por cada elemento)
products.forEach((prod, index, arrayDeProductos) => {
  if (prod.precio < 800) {
  }
});

// .map() (recorrer un array para modificar sus valores y devolvernos en un array nuevo)
let productosActualizados = products.map((prod, index) => {
  //   prod.id = index + 1;
  return prod;
});

// .filter() (filtra los productos de un array)
let productosFiltrados = products.filter((prod) => prod.precio > 800);
