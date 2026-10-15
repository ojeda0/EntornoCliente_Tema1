// EJ 1. Introduce un número de segundos.
// Introduce un mensaje
// Dicho mensaje debe aparecer por alert transcurridos esos
// segundos.
function ej1(){
    const segundos = parseInt(window.prompt("Introduce la cantidad de segundos:"));
    const mensaje = window.prompt("Introduce el mensaje:");

    window.setTimeout(() => window.alert(mensaje), segundos*1000);
}
//ej1();


// EJ 2. Modifica el ejercicio 5 para que mientras
// muestra el mensaje se muestre por consola la cuenta atrás
// antes de pintarse el mensaje
function ej2(){
    const segundos = parseInt(window.prompt("Introduce la cantidad de segundos:"));
    const mensaje = window.prompt("Introduce el mensaje:");

    let contador = segundos;

    let intervalo = window.setInterval(() => {
        console.log(`Alerta en ${contador--} segundos.`)

        if(contador == 0){
            clearInterval(intervalo);
        }

    }, 1000);

    window.setTimeout(() => window.alert(mensaje), segundos*1000);

}
//ej2();


// EJ 3. Pide por prompt una URL y redirige la página a
//la misma
function ej3(){
    const url = window.prompt("Introduce la URL para navegar:", "https://");

    window.location.href = url;
}
//ej3();


// EJ 4. Muestra un menú con varias opciones.
// a. Ir atrás
// b. Ir hacia delante
// c. Ir a una dirección (entonces la solicita)
// d. Mostrar la dirección actual
// e. Actualizar página.
// f. Salir.
function ej4(){

    let salir = false;

    do{
        const operador = window.prompt("Introduce una opción:\n" +
            "a. Ir atrás.\n" +
            "b. Ir hacia delante.\n" +
            "c. Ir a una dirección web (URL).\n" +
            "d. Mostrar la dirección actual.\n" +
            "e. Actualizar página.\n" +
            "f. Salir\n"
        );

        switch(operador){
            case 'a':
                //Ir atrás
                window.history.back();
                salir = true;
                break;
            case 'b':
                //Ir hacia delante
                window.history.forward();
                salir = true;
                break;
            case 'c':
                //Ir a una dirección web
                ej3();
                salir = true;
                break;
            case 'd':
                //Mostrar la dirección actual
                console.log(window.location.href);
                salir = true;
                break;
            case 'e':
                //Actualizar página
                window.location.reload();
                break;
            case 'f':
                //Salir
                console.log("¡Gracias por usar nuestro programa!");
                salir = true;
                break;
            default:
                //default
                console.error("Introduce una opción válida.");
                break;
        }

    }while(!salir);
}
//ej4();


// EJ 5. Al cargar la pagina consulta el nombre de usuario 
// (username) almacenado en el localStorage. Si existe saluda, 
// si no lo pide.
function ej5(){

    let nombre = localStorage.getItem('username');

    if(nombre == null){
        nombre = window.prompt("Introduce tu username:");
        localStorage.setItem('username', nombre);
    }
    
    console.log(`¡Hola ${nombre}!`);
    //localStorage.clear();

}
//ej5();

// EJ 6. Contador de recargas. Cada vez que el usuario abra la 
// página, acceda o actualice debe incrementar el numero 
// de visitas.
function ej6(){

    let visitas = localStorage.getItem('views');

    let contador = visitas != null ? parseInt(visitas) : 0;

    contador += 1;

    localStorage.setItem('views', contador);

    console.log(`¡Has visitado la página ${contador} veces!`);
    //localStorage.clear();
}
//ej6();
