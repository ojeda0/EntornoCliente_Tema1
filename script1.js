//Ejemplo 1: Hola mundo
function ejemplo1() {
    console.log("Hola mundo");
}
//ejemplo1();


//Ejemplo 2: Hola con variable
function ejemplo2(){
    var nombre1 = "Abraham";
    console.log(`Hola ${nombre1}`);
}
//ejemplo2();


//Ejemplo 3: Ejemplo scanner
function ejemplo3(){
    var nombre2 = window.prompt("Introduce tu nombre: ");
    console.log(`Hola ${nombre2}`);
}
//ejemplo3();


//Ejemplo 4: Primer if
function ejemplo4(){
    var edad = Number(window.prompt("Introduce tu edad: "));

    console.log(`Tienes ${edad} años`);

    if (edad < 18) {
        console.log("Eres menor de edad.");
    } else {
        console.log("Eres mayor de edad.");
    }
}
//ejemplo4();


//Definicion de variables: let , var , const
//const: constante (no varía su valor) 1
//let: ambito de bloque 2
//var: ambito de funcion 3


//Ejemplo 5
function ejemplo5(){
    const edad2 = Number(window.prompt("Introduce tu edad: "));

    if (edad2 < 18) {
        let mensaje = "Eres menor de edad.";
        console.log(mensaje);
    } else {
        let mensaje = "Eres mayor de edad.";
        console.log(mensaje);
    }
}
//ejemplo5();


//Definicion funcion
function calculaEdad() {
    const edad3 = Number(window.prompt("Introduce tu edad: "));

    if (edad3 < 18) {
        var mensaje = "Eres menor de edad.";
    } else {
        mensaje = "Eres mayor de edad.";
    }
    console.log(mensaje);
}

//Llamamos la funcion
//calculaEdad();


// Ejemplo 6
function ejemplo6(){
    let auxiliar;
    auxiliar = 10;
    console.log(auxiliar);

    auxiliar = "Mi casa es roja";
    console.log(auxiliar);

    auxiliar = true;
    console.log(auxiliar);

    auxiliar = 1432.12;
    console.log(auxiliar);
}
//ejemplo6();


//Ejemplo 7: Primer bucle
function potencia(base, exponente) {

    let resultado = 1;

    while (exponente > 0) {
        resultado *= base;
        exponente--;
    }

    return resultado;
}

let base = 2;
let exponente = 3;
//console.log(`El resultado de ${base}^${exponente} es: ${potencia(base, exponente)}`);


//Ejercicio 8: Más bucles, solicita numero y muestra el acumulado de 10 en 10.
function sumaDiez(numVueltas) {

    let resultado = 0;

    for (let i = 0; i < numVueltas; i++) {
        resultado += 10; //Resultado = resultado + 10
    }

    return resultado;
}
function ejemplo8(){
    console.log("Ejercicio 8: " + sumaDiez(50));
}
//ejemplo8();


//Ejercicio 9: Mas bucles, solicita numero y muestra el acumulado de 10 en 10. Da
// error si introduces un numero negativo
function sumaDiez2(numVueltas){
    let resultado = 0;

    if(numVueltas < 0){
        console.error("El numero de vueltas debe ser positivo.");
    }else{
        for(let i = 0; i < numVueltas; i++){
            resultado += 10; // resultado = resultado + 10;
        }
    }
    
    return resultado;

}

function ejemplo9(){
    console.log("Ejercicio 9: " + sumaDiez2(-7));
}
//ejemplo9();


//Ejercicio 10: Calculadora. Pide dos numeros y muestra un meno para que los
//sume, reste, multiplique o divida segun la opción marcada, valid datos.
function calculadora(){

    let operando1 = parseInt(window.prompt("Introduce el primer número: "));
    let operando2 = parseInt(window.prompt("Introduce el segundo número: "));

    let salir = false;

    let resultado;

    do{
        let operador = window.prompt("Elige un operador: \n" +
            "a. Suma \n" +
            "b. Resta \n" +
            "c. Multiplicación \n" +
            "d. División \n" +
            "e. Potencia \n" +
            "f. Salir");

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
            if(operando2 == 0) {
                console.error("No se puede dividir entre 0.");
            }else {
                resultado = operando1 / operando2;
                console.log(resultado);
            }
            break;
        case 'e':
            //Potencia
            resultado = potencia(operando1, operando2);
            console.log(resultado);
            break;
        case 'f':
            //Salir
            salir = true;
            console.log("¡Hasta luego! Gracias por usar nuestra calculadora.");
            break;
        }

    }while(!salir)

}
//calculadora();


//Ejemplo ternario
function ternario() {

    let precio = 150;
    console.log("Precio original: " + precio);

    let edad = parseInt(window.prompt("Introduce tu edad: "));

    // if(edad >= 18) {
    //     precio *= 0.80;
    // }else{
    //     precio *= 0.75;
    // }

    precio = (edad >= 18) ? precio*0.80 : precio*0.75;

    console.log("El precio tras el descuento es: " + precio);

}
//ternario();


//Ejemplo ternario práctica: pedir por pantalla precio del producto, si es superior a 50€ el envío sale gratis sino 5€. El sistema debe mostrar
//al principio el precio original y al final el precio total

function ternario2() {

    let precio = parseInt(window.prompt("Introduce el precio del producto: "));
    console.log("Precio original: " + precio);

    precio = (precio > 50) ? precio : precio+5;

    console.log("El precio final junto al envío es de: " + precio);

}
//ternario2();


//Crea un programa que calcule un número aleatorio y pida al usuario
//números hasta que lo acierte. Si el numero de intentos es superior a 10
// pintará por pantalla ¡Has perdido! y ¡Has ganado! si es inferior.

function numeroAleatorio(){
    let numeroGenerado = Math.floor(Math.random()*100 + 1);
    let intentos = 0;

    do{

        var numeroIntroducido = parseInt(window.prompt("He pensado un número del 0 al 100, ¡intenta adivinarlo!: "));
        intentos++;

    }while(intentos <= 10 && numeroIntroducido != numeroGenerado);

    numeroIntroducido == numeroGenerado ? console.log("¡Has ganado en " + intentos + " intentos!" + " El número era: " + numeroGenerado) : console.log("¡Has perdido y has hecho " + intentos + " intentos!" + " El número era: " + numeroGenerado);

}
//numeroAleatorio();


//Ejemplo 14: Pide números hasta introducir el 0 y pinta por pantalla
// el menor, el mayor y la media
function ejemplo14() {

    let numeroIntroducido;
    let numeroMenor = Infinity;
    let numeroMayor = -Infinity;
    let media = 0;
    let contador = 0;

    do{
        numeroIntroducido = parseInt(window.prompt("Introduce números para saber el menor, el mayor y la media. Pulsa 0 para salir: "));

        if(numeroIntroducido != 0){
            contador++;
            media += numeroIntroducido;
            numeroMayor = numeroMayor > numeroIntroducido ? numeroMayor : numeroIntroducido;
            numeroMenor = numeroMenor < numeroIntroducido ? numeroMenor : numeroIntroducido;
        }

    }while(numeroIntroducido != 0);

    console.log("El número menor es: " + numeroMenor);
    console.log("El número mayor es: " + numeroMayor);
    console.log("La media es: " + media/contador);

}
//ejemplo14();


//Ejemplo 15: Pide una nota numérica y muestra por pantalla si es
// suspenso (0-4), suficiente (5), bien (6), notable(7-8), sobresaliente(9-10)
function ejemplo15(){

    let nota = parseInt(window.prompt("Introduce tu nota del examen: "));
    let notaTexto = "";

    switch(true){
        case nota >= 0 && nota < 5:
            notaTexto = "Suspenso";
            break;
        case nota >= 5 && nota < 6:
            notaTexto = "Suficiente";
            break;
        case nota >= 6 && nota < 7:
            notaTexto = "Bien";
            break;
        case nota >= 7 && nota < 9:
            notaTexto = "Notable";
            break;
        case nota >= 9 && nota <= 10:
            notaTexto = "Sobresaliente";
            break;
        default:
            notaTexto = "Nota fuera de rango, introduce un nota del 0 al 10.";
            break;
    }

    console.log("Nota: " + nota + " = " + notaTexto);

}
//ejemplo15();


//Ejemplo 16: Pide un número por pantalla y muestra el número de digitos que tiene
function ejemplo16() {

    let numero = parseInt(window.prompt("Introduce un número para contar sus dígitos: "));
    let digitos = 0;
    let numeroCopia = numero;

    do{
        numero /= 10;
        digitos++;
    }while(numero > 1)

    console.log(`El número ${numeroCopia} tiene ${digitos} dígitos.`);

}
//ejemplo16();


//Ejemplo 17: Calcula el factorial de un número solicitado por pantalla siempre y cuando este
//número sea positivo y par
function ejemplo17() {

    let numero = parseInt(window.prompt("Introduce un número positivo y par para saber su factorial: "));
    let conteo = 1;

    if(numero > 0 && numero%2==0){

        for(let i=2;i<=numero; i++){
            conteo *= i;
        }
        console.log(`El factorial`);

    }

}
//ejemplo17();


//Ejemplo 18: Pide un número por pantalla e imprimelo invertido
function ejemplo18(){
    let num = parseInt(window.prompt("Introduce un numero"));
    let num_inv = 0;

    while(num > 0){
        num_inv = num_inv * 10 + (num % 10);
        num = Math.floor(num/10);
    };

    console.log("El numero invertido es: " + num_inv);

}
//ejemplo18();


//Ejemplo 19: Muestra todos los divisores de un numero solicitado por pantalla
function ejemplo19(){
    const numero = parseInt(window.prompt("Introduce un número:"));

    for(let i = 0; i <= numero; i++) {
        if(numero % i == 0) {
            console.log(i);
        }
    }

}
//ejemplo19();


//Ejemplo 20: Numero perfecto: Pide un numero y determina si es perfecto.
//Un numero es perfecto cuando la suma de sus divisores propios sea igual al propio num.
function ejemplo20(){
    const numero = parseInt(window.prompt("Introduce un número:"));
    let sumaNumeros = 0;

    console.log("Divisores de " + numero + ":");

    for(let i = 0; i < numero; i++) {
        if(numero % i == 0) {
            console.log(i);
            sumaNumeros += i;
        }
    }

    console.log("La suma de estos divisores es de: " + sumaNumeros);

    if(sumaNumeros==numero) {
        console.log("¡El número " + numero + " es un número perfecto!");
    }else{
        console.log("El número " + numero + " NO es un número perfecto.");
    }

}
//ejemplo20();