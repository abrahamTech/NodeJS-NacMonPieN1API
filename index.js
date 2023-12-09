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

const obtenerMaterialPorId = (idMaterial) => {
    return precios[idMaterial];
};

const calcularPrestamo = (material, pesoGramos) => {
    const montoPrestamo = (pesoGramos * material.precioGramo) * 0.8;
    return montoPrestamo;
};

const lecturaDatos = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return rl;
}

const solicitarIdMaterial = (rl, callback) => {
    rl.question("Ingrese el ID del material: ", (idMaterial) => {

        idMaterial = idMaterial.trim();

        if(!isNaN(idMaterial) && /^[0-9]+$/.test(idMaterial)) {
            callback(idMaterial);
        } else {
            console.log('\nPor favor, ingrese un ID válido (números solamente).');
            rl.close();
        }

    })
}

const solicitarPeso = (rl, idMaterial) => {
    rl.question("Ingrese el peso en gramos (puede incluir decimales): ", (pesoGramos) => {
        
        pesoGramos = pesoGramos.trim();
        const peso = parseFloat(pesoGramos);

        if(!isNaN(peso) && /^[0-9]+(\.[0-9]+)?$/.test(pesoGramos) && peso>0) {   
            const material = obtenerMaterialPorId(idMaterial);
            const montoPrestamo = calcularPrestamo(material, peso);
            console.log(`\nMonto estimado del préstamo: $${montoPrestamo.toFixed(2)}`);
            rl.close();
        } else {
            console.log('\nPor favor, ingrese un peso válido en gramos.');
            rl.close();
        }

    })
}


const iniciarSolicitudPrestamo = () => {
    const rl = lecturaDatos();

    mostrarMenu();

    solicitarIdMaterial(rl, (idMaterial) => {
        const material = obtenerMaterialPorId(idMaterial);
        if(material) {
            solicitarPeso(rl, idMaterial);
        } else {
            console.log('\nID del material no encontrado en la tabla de precios.');
            rl.close();
        }
    })
}

iniciarSolicitudPrestamo();
