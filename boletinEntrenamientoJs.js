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
    let numero = parseFloat(window.prompt("Introduce un número:"));

    if(numero < 0){
        console.log(`¡El ${numero} es un número negativo!`);
    }else if(numero==0){
        console.log(`¡El ${numero} es un cero!`);
    }else{
        console.log(`¡El ${numero} es un número positivo!`);
    }

}
//ej9();


// EJ 10. Número mayor. Dados dos números, muestra cuál de ellos 
// es mayor o indica si son iguales.
function ej10(){
    let numero1 = parseFloat(window.prompt("Introduce el primer número:"));
    let numero2 = parseFloat(window.prompt("Introduce el segundo número:"));

    if(numero1 > numero2){
        console.log(`El número ${numero1} es mayor que el número ${numero2}.`);
    }else if(numero1==numero2){
        console.log(`El número ${numero1} y el número ${numero2} son iguales.`);
    }else{
        console.log(`El número ${numero2} es mayor que el número ${numero1}.`);
    }
}
//ej10();


//EJ 11. Calificación. Dada una nota entre 0 y 10, muestra si 
// corresponde a un suspenso, aprobado, notable o sobresaliente.
function ej11(){
    let nota = parseFloat(window.prompt("Introduce tu nota del 0 al 10:"));

    switch(true){
        case nota >=0 && nota < 5:
            console.log(`Suspenso.`);
            break;
        case nota >= 5 && nota < 7:
            console.log(`Aprobado.`);
            break;
        case nota >= 7 && nota < 9:
            console.log(`Notable.`);
            break;
        case nota >= 9 && nota <= 10:
            console.log(`Sobresaliente.`);
            break;
        default:
            console.log(`Introduce una nota válida.`);
    }
}
//ej11();


// EJ 12. Año bisiesto. Dado un año, determina si es bisiesto.
function ej12(){
    let anyo = parseInt(window.prompt("Introduce un año para saber si es bisiesto:"));

    if((anyo%4==0 && anyo%100!=0) || anyo%400==0){
        console.log(`El año ${anyo} es bisiesto.`);
    }else {
        console.log(`El año ${anyo} NO es bisiesto.`);
    }
}
//ej12();


// EJ 13. Calculadora. Dados dos números y un operador 
// (+, -, * o /), realiza la operación correspondiente 
// utilizando una estructura de selección.
function ej13(){
    let operando1 = parseFloat(window.prompt("Introduce el primer operando:"));
    let operando2 = parseFloat(window.prompt("Introduce el segundo operando:"));

    let salir = false;

    let resultado;

    do{
        let operador = window.prompt(`Elige un operador:\n` +
            `a. Suma\n` +
            `b. Resta\n` +
            `c. Multiplicación\n` +
            `d. División\n` +
            `e. Potencia\n` +
            `f. Salir`
        );

        switch(operador){
            case 'a':
                //Suma
                resultado = operando1 + operando2;
                console.log(resultado);
                break;
            case 'b':
                //Resta
                resultado = operando1 - operando2;
                console.log(resultado);
                break;
            case 'c':
                //Multiplicación
                resultado = operando1 * operando2;
                console.log(resultado);
                break;
            case 'd':
                //División
                if(operando2==0){
                    console.error(`No se puede dividir entre 0.`);
                }else{
                    resultado = operando1 / operando2;
                    console.log(resultado);
                }
                break;
            case 'e':
                //Potencia
                resultado = operando1 ** operando2;
                console.log(resultado);
                break;
            case 'f':
                //Salir
                salir = true;
                console.log(`¡Gracias por usar nuestra calculadora, hasta pronto!`);
                break;
        }
    }while(!salir)

}
//ej13();


// EJ 14. Números del 1 al 10. Muestra por consola los números 
// del 1 al 10 utilizando una estructura de repetición.
function ej14(){
    for(let i = 1; i<=10; i++){
        console.log(i);
    }
}
//ej14();


// EJ 15. Números pares. Muestra todos los números pares 
// comprendidos entre 1 y 100.
function ej15(){
    for(let i = 1; i <= 100; i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
//ej15();


// EJ 16. Tabla de multiplicar. Dado un número, muestra su tabla 
// de multiplicar del 1 al 10.
function ej16(){
    let numero = parseInt(window.prompt("Introduce un número para saber su tabla de multiplicar:"));

    for(let i = 1; i <= 10; i++){
        console.log(`${numero} x ${i} = ${numero*i}`);
    }
}
//ej16();


// EJ 17. Suma hasta N. Dado un número N, calcula la suma de 
// todos los números comprendidos entre 1 y N.
function ej17(){
    let numero = parseInt(window.prompt("Introduce un número para saber la suma desde 1 hasta ese número:"));

    let resultado = 0;

    for(let i = 1; i <= numero; i++){
        resultado += i;
    }

    console.log(`La suma de todos los números entre 1 y ${numero} es ${resultado}.`);
}
//ej17();


// EJ 18. Factorial. Dado un número entero positivo, calcula 
// y muestra su factorial.
function ej18(){
    let numero = parseInt(window.prompt("Introduce un número entero positivo para ver su factorial:"));

    let resultado = 1;

    for(let i = numero; i >= 1; i--){
        resultado *= i;
    }

    console.log(`El factorial de ${numero} es ${resultado}`);
}
//ej18();


// EJ 19. Múltiplos de 3. Dado un número N, muestra todos los 
// múltiplos de 3 comprendidos entre 1 y N.
function ej19(){
    let numero = parseInt(window.prompt("Introduce un número para saber los múltiplos de 3 entre 1 y ese número:"));

    for(let i = 1; i <= numero; i++){
        if(i%3==0){
            console.log(i);
        }
    }
}
//ej19();


// EJ 20. Función saludar. Crea una función saludar(nombre) que 
// reciba un nombre como parámetro y muestre un saludo 
// personalizado.
function ej20(){
    let nombre = window.prompt("Introduce tu nombre para ser saludado:");

    saluda(nombre);
}

function saluda(nombre){
    console.log(`¡Hola ${nombre}!`);
}
//ej20();


// EJ 21. Función para calcular un área. Crea una función 
// calcularArea(base, altura) que reciba la base y la altura 
// de un rectángulo y devuelva su área.
function ej21(){
    let base = parseFloat(window.prompt("Introduce la base del rectángulo:"));
    let altura = parseFloat(window.prompt("Introduce la altura del rectángulo:"));

    calcularArea(base, altura);

}

function calcularArea(base, altura){
    let area = base * altura;
    console.log(`Base del rectángulo: ${base}\n` +
        `Altura del rectángulo: ${altura}\n` +
        `Área del rectángulo: ${area}`
    );
}
//ej21();


// EJ 31. Sistema de calificaciones. Crea un programa que permita 
// introducir las notas de un alumno. El programa deberá solicitar
//  inicialmente el número de notas que se van a introducir y, 
// mediante un bucle, solicitar cada una de ellas. Utiliza 
// funciones para calcular la nota media y determinar la 
// calificación final: Suspenso, Aprobado, Notable o 
// Sobresaliente. Comprueba que las notas introducidas estén 
// comprendidas entre 0 y 10.
function ej31() {

    let numNotas = parseInt(window.prompt("Introduce el número de notas que vas a introducir:"));
    let acumulador = 0;

    for(let i = 1; i <= numNotas; i++) {
        let nota = parseFloat(window.prompt(`Introduce la ${i} nota:`));
        acumulador += nota;
    }

    const notaFinal = acumulador / numNotas;
    console.log(notaFinal);
    console.log(calificacion(notaFinal));
}
//ej31();

function calificacion(nota){
    let result;

    switch(true) {
        case nota >= 0 && nota < 5:
            result = "SUSPENSO.";
            break;
        case nota >= 5 && nota < 6:
            result = "APROBADO.";
            break;
        case nota >= 6 && nota < 7:
            result = "BIEN.";
            break;
        case nota >= 7 && nota < 9:
            result = "NOTABLE.";
            break;
        case nota >= 9 && nota <= 10:
            result = "SOBRESALIENTE.";
            break;
        default:
            result = "Introduce una nota válida entre 0 y 10.";
    }

    return result;

}


// EJ 32. Cajero automático. Simula el funcionamiento de un 
// cajero automático. El usuario comienza con un saldo 
// determinado y puede consultar su saldo, retirar dinero, 
// ingresar dinero o salir. Crea una función para cada operación 
// y utiliza un menú que se repita hasta seleccionar la opción 
// de salida. El programa deberá impedir retirar una cantidad 
// superior al saldo disponible y cantidades negativas o 
// iguales a cero.
function ej32() {

    let saldo = 1000.0;
    let opcion;

    do{
        opcion = parseInt(window.prompt("Introduce una opción:\n"
            + "1. Consultar saldo.\n"
            + "2. Retirar dinero.\n"
            + "3. Ingresar dinero.\n"
            + "4. Salir.\n"
        ));

        switch(opcion){
            case 1:
                console.log(`Su saldo actual es ${saldo}.`);
                break;
            case 2:
                const retirar = parseFloat(window.prompt("Introduce la cantidad a retirar:"));
                saldo = retirarDinero(saldo, retirar);
                break;
            case 3:
                //Ingresar dinero
                const ingresar = parseFloat(window.prompt("Introduce la cantidad a ingresar:"));
                saldo = ingresarDinero(saldo, ingresar);
                break;
            case 4:
                //Salir
                console.log("Gracias por usar nuestro programa.");
                break;
            default:
                console.log("Introduce una opción válida.");
                break;
        }

    }while(opcion != 4);
}
//ej32();

function retirarDinero(saldo, retirar){

    let result = saldo;

    if(saldo < retirar) {
        console.error("No se puede retirar más dinero del que hay.");
    }else if(retirar <= 0){
        console.error("Debes retirar una cantidad positiva.");
    }else if(isNaN(retirar)){
        console.error("Debes introducir una cantidad válida.");
    }else {
        result = saldo - retirar;
    }

    return result;
}

function ingresarDinero(saldo, ingresar){
    
    let result = saldo;

    if(ingresar <= 0){
        console.error("Debes ingresar una cantidad positiva.");
    }else if(isNaN(ingresar)){
        console.error("Debes ingresar una cantidad válida.");
    }else {
        result = saldo + ingresar;
    }

    return result;

}


// EJ 33. Juego de adivinanza. Crea un juego en el que el 
// programa genere un número aleatorio entre 1 y 100 y el 
// usuario tenga que adivinarlo. Después de cada intento, el 
// programa indicará si el número introducido es mayor o menor 
// que el número secreto. El juego deberá contar el número de 
// intentos y finalizar cuando el jugador acierte. Organiza 
// el programa utilizando funciones.
function ej33(){
    let numeroAdivinar = numAleatorio();
    let intentos = 0;
    let acertado = false;

    let numero;

    do{
        numero = parseInt(window.prompt("¡Introduce un número del 1 al 100 a ver si lo adivinas!\n" +
            "Usa el número 0 para salir del programa.\n"
        ));

        if(numero === numeroAdivinar){
            intentos++;
            console.log(`¡Has ganado! El número era ${numeroAdivinar}.\n`
                + `Número de intentos: ${intentos}.\n`
            );
            acertado = true;
        }else if(isNaN(numero)){
            console.error("Debes introducir un número.");
        }else if(numero === 0){
            console.error("¡Has parado de adivinar!");
        }else if(numero < 0 || numero > 100){
            console.error("Debes introducir un número entre el 1 y el 100 o el 0 para salir.");
        }else if(numero < numeroAdivinar){
            intentos++;
            console.log("El número introducido es MENOR que el que tienes que adivinar.");
        }else if(numero > numeroAdivinar){
            intentos++;
            console.log("El número introducido es MAYOR que el que tienes que adivinar.");
        }

    }while(!acertado && numero !== 0);

}
//ej33();

function numAleatorio(){
    return parseInt(Math.floor(Math.random()*100 + 1));
}


// EJ 34. Conversor de unidades. Crea un programa que permita 
// convertir diferentes unidades. El usuario podrá elegir entre 
// convertir kilómetros a millas, grados Celsius a Fahrenheit, 
// kilogramos a libras o euros a dólares. Utiliza un menú, una 
// función para cada conversión y una estructura de repetición 
// que permita realizar varias conversiones hasta seleccionar 
// la opción de salir.