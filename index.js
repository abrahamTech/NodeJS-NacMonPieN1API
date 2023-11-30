const readline = require('readline');
const precios = require('./modules/precios');

const mostrarMenu = () => {
    console.log('\n** Bienvenido a Nacional Monte de Piedad **\n');
    console.log('-----------------------');
    console.log('ID   | Material');
    console.log('-----------------------');
    for (const [id, material] of Object.entries(precios)) {
        console.log(`${id}  | ${material.nombre}`);
    }
    console.log('-----------------------');
};

const calcularPrestamo = (idMaterial, pesoGramos) => {
    const material = precios[idMaterial];
    const montoPrestamo = (pesoGramos * material.precioGramo) * 0.8;
    return montoPrestamo;
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

mostrarMenu();

rl.question('Ingrese el ID del material: ', (idMaterial) => {
    const material = precios[idMaterial];

    if (material !== undefined) {
        rl.question('Ingrese el peso en gramos: ', (pesoGramos) => {
            const montoPrestamo = calcularPrestamo(idMaterial, parseFloat(pesoGramos));
            console.log(`\nMonto estimado del préstamo: $${montoPrestamo.toFixed(2)}`);
            rl.close();
        });
    } else {
        console.log('\nMaterial NO encontrado en la tabla de precios');
        rl.close();
    }
});
