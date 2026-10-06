//Diálogos con usuarios

    // Alerta al usuario con un mensaje
    window.alert("Esto es un window alert");

    // Devuelve boolean, confirmación
    const confirmar = window.confirm("¿Desea continuar?");

    // Pide al usuario datos, con un placeholder
    const pedir = window.prompt("Introduce tus datos:", "Invitado");


//Temporizadores

    // Ejecutar una función una sola vez tras un retardo (en ms)
    const retardo = window.setTimeout(() => {
        console.log("Se ejecuta después de 2 segundos.");
    }, 2000);

    //Cancela el retardo antes de que pase
    window.clearTimeout(retardo);