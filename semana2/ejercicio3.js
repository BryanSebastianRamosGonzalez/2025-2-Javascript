const { ask } = require('../helpers/input');

async function main() {
    const nombres = ['Ana', 'Roberto', 'Luis', 'Mariana', 'Sol'];

    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i].length>=5){
            console.log( `${nombres[i]} tiene más de 5 caracteres` );
        }
        else {
            console.log( `${nombres[i]} tiene solo ${nombres[i].length} caracteres` );
        }
    }

    const nombres2 = ['Oscar', 'Ana', 'Luis ', 'Edurado', 'Isabel', 'Maria', 'Ursula', 'Pedro'];
    const vocales = ['a', 'e', 'i', 'o', 'u'];


    for (let i = 0; i < nombres2.length; i++) {
        const primeraLetra = nombres2[i][0].toLowerCase();
        for (let j = 0; j < vocales.length; j++) {
            if (primeraLetra === vocales[j]) {
                console.log(`${nombres2[i]} empieza con una vocal`);
                break;
            } else if (j === vocales.length - 1) {
                console.log(`${nombres2[i]} no empieza con una vocal`);
            }
        }
    }

    const palabraAlReves = await ask('Escribe una palabra: ');
    let resultado = '';
    for (let k = palabraAlReves.length - 1; k >= 0; k--) {
        resultado = resultado + palabraAlReves[k];
    }
    console.log(`La palabra al revés es: ${resultado}`);
}

main();