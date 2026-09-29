// EJ 1. Datos personales. Declara variables para almacenar tu 
// nombre, edad y ciudad. Muestra por consola una frase con 
// esos datos.
function ej1(){
    let nombre = "Abraham Teba Ojeda";
    let edad = 25;
    let ciudad = "Alcalá de Guadaíra"
    console.log(`¡Hola! Te llamas ${nombre}, tienes ${edad} años y vives en ${ciudad}.`);
}
//ej1();

function ej1V2(){
    let nombre = window.prompt("Introduce tu nombre:");
    let edad = parseInt(window.prompt("Introduce tu edad:"));
    let ciudad = window.prompt("Introduce tu ciudad:");
    console.log(`¡Hola! Te llamas ${nombre}, tienes ${edad} años y vives en ${ciudad}.`);
}
//ej1V2();


// EJ 2. Área de un rectángulo. Declara las variables necesarias 
// para almacenar la base y la altura de un rectángulo y 
// calcula su área.
function ej2(){
    let base = parseFloat(window.prompt("Introduce la base del rectángulo:"));
    let altura = parseFloat(window.prompt("Introduce la altura del rectángulo:"));

    let area = base * altura;
    console.log(`La base del rectángulo es ${base} y la altura es ${altura}.\nEl área del rectángulo es: ${area}`);
}
//ej2();


// EJ 3. Conversión de temperatura. Dada una temperatura en grados 
// Celsius, calcula y muestra su equivalente en grados Fahrenheit.
function ej3(){
    let celsius = parseFloat(window.prompt("Introduce la temperatura en grados Celsius:"));

    let fahrenheit = (celsius * 1.8) + 32;

    console.log(`Temperatura introducida en Celsius: ${celsius}ºC.\nTemperatura convertida a Fahrenheit: ${fahrenheit}ºF.`);
}
//ej3();


// EJ 4. Precio de una compra. Dado el precio de un producto y el 
// número de unidades compradas, calcula y muestra el 
// importe total.
function ej4(){
    let precioProducto = parseFloat(window.prompt("Introduce el precio del producto:"));
    let unidades = parseInt(window.prompt("Introduce las unidades compradas:"));

    let precioTotal = precioProducto * unidades;
    console.log(`Precio del producto: ${precioProducto}€.\n` +
        `Unidades compradas: ${unidades}.\n` +
        `Precio total: ${precioTotal}€.`
    );
}
//ej4();


// EJ 5. Nómina sencilla. Dado un salario bruto, calcula una 
// retención del 15 % y muestra el salario neto
function ej5(){
    let salarioBruto = parseFloat(window.prompt("Introduce el salario en BRUTO:"));

    let salarioNeto = salarioBruto * 0.85;
    console.log(`Salario bruto introducido: ${salarioBruto}€.\n` +
        `Salario neto con 15%: ${salarioNeto}€.`
    );
}
//ej5();


// EJ 6. Conversión de segundos. Dado un número de segundos, 
// calcula cuántas horas, minutos y segundos representa.
function ej6(){
    let tiempoSegundos = parseFloat(window.prompt("Introduce el tiempo en segundos:"));

    let horas = Math.floor(tiempoSegundos/3600);

    let numRestante = tiempoSegundos%3600;
    let minutos = Math.floor(numRestante/60);

    let segundos = Math.floor(numRestante%60);

    console.log(`Tiempo total introducido en segundos: ${tiempoSegundos} segundos.\n` +
        `H: ${horas} horas.\n` +
        `M: ${minutos} minutos.\n` +
        `S: ${segundos} segundos.`
    );
}
//ej6();


// EJ 7. Intercambio de valores. Declara dos variables 
// a y b e intercambia sus valores. Muestra el resultado antes 
// y después del intercambio.
function ej7(){
    let a = parseFloat(window.prompt("Introduce el valor de a:"));
    let b = parseFloat(window.prompt("Introduce el valor de b:"));

    console.log(`Variable a ANTES del cambio: ${a}\n` +
        `Variable b ANTES del cambio: ${b}`
    );

    let guarda = a;
    a = b;
    b = guarda;

    console.log(`Variable a DESPUÉS del cambio: ${a}\n` +
        `Variable b DESPUÉS del cambio: ${b}`
    );
}
//ej7();


// EJ 8. Mayor de edad. Dada una edad, indica mediante un mensaje 
// si la persona es mayor o menor de edad.
function ej8(){
    let edad = parseInt(window.prompt("Introduce tu edad:"));

    if(edad < 18){
        console.log(`Tienes ${edad} años, aún eres MENOR de edad.`);
    }else{
        console.log(`Tienes ${edad} años, eres MAYOR de edad.`);
    }
}
//ej8();


// EJ 9. Número positivo, negativo o cero. Dado un número, 
// indica si es positivo, negativo o igual a cero.
function ej9(){

}
ej9();