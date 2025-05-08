// Clase 1: ¿Qué es programar? + Variables y Tipos de Datos

const { ask } = require('../helpers/input');


async function main() {
    const number = Number (await ask("ingresa un número: "));
    const multiplo5 = number % 5 == 0;
    const multiplo3 = number % 3 == 0;
    const ambos = multiplo3 && multiplo5;
    const ninguno = !multiplo3 && !multiplo5;

    switch (true) {
        case ambos:
            console.log("El número es multiplo por 3 y 5.");
            break;
        case multiplo3:
            console.log("El número es multiplo por 3.");
            break;
        case multiplo5:
            console.log("El número es multiplo por 5.");
            break;
        case ninguno:
            console.log("El número no es multiplo por 3 ni por 5.");
            break;
    }

    const dia = Number (await ask("ingresa un número del 1 al 7: "));
    const diasemana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
    const diaValido = dia >= 1 && dia <= 7;
     
    if (diaValido) {
        console.log(`El día de la semana es ${diasemana[dia - 1]}.`);
    } else {
        console.log("El número ingresado no es válido. Debe estar entre 1 y 7.");
    }
    return
}   
main();

