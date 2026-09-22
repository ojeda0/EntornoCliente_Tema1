//Ejemplo 1
console.log("Hola mundo");

//Ejemplo 2
var nombre1 = "Abraham";
console.log(`Hola ${nombre1}`);

//Ejemplo 3
var nombre2 = window.prompt("Introduce tu nombre: ");
console.log(`Hola ${nombre2}`);

//Ejemplo 4
var edad = window.prompt("Introduce tu edad: ");

console.log(`Tienes ${edad} años`);

if(edad < 18) {
    console.log("Eres menor de edad.");
}else {
    console.log("Eres mayor de edad.");
}