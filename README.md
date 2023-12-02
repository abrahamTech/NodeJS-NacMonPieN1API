# NodeJS-NacMonPieN1API
NodeJS project that evaluates the estimated loan amount, based on the material and weight of the item.

# Nacional Monte de Piedad - Calculadora de Préstamos

Este proyecto implementa una calculadora de préstamos para Nacional Monte de Piedad. Permite a los usuarios estimar el monto del préstamo basándose en el material y peso proporcionado.

## Requisitos

- Node.js instalado en el sistema.

## Instalación

55
git clone https://github.com/abrahamTech/NodeJS-NacMonPieN1API.git
55
cd NodeJS-NacMonPieN1API
55
npm install
55

## Uso

55
node index.js
55

Sigue las instrucciones para ingresar el ID del material y el peso en gramos.

## Funcionalidades

- Muestra un menú con los materiales disponibles y sus respectivos IDs.
- Calcula el monto estimado del préstamo según el material y el peso ingresados.

## Estructura del Proyecto

- `index.js`: Archivo principal que contiene la lógica principal de la aplicación.
- `modules/precios.js`: Módulo que exporta la tabla de precios de los materiales.

### Archivo `precios.js`

El archivo `precios.js` contiene la tabla de precios de los materiales utilizados en la calculadora de préstamos. La estructura de la tabla es la siguiente:

```javascript
const tablaPrecios = {
    '001': { nombre: 'Oro puro 24k', precioGramo: 1500.00 },
    '002': { nombre: 'Oro alto 18k', precioGramo: 1000.00 },
    '003': { nombre: 'Oro medio 14k', precioGramo: 800.00 },
    '004': { nombre: 'Oro bajo 10k', precioGramo: 500.00 },
    '005': { nombre: 'Plata ley .925', precioGramo: 300.00 },
    '006': { nombre: 'Titanio', precioGramo: 200.00 },
    '007': { nombre: 'Rodio', precioGramo: 100.00 }
};

module.exports = tablaPrecios;
```

### Archivo `package.json`

El archivo `package.json` contiene la información sobre el proyecto, sus dependencias y scripts. Aquí hay un resumen:


```javascript
{
  "name": "nodejs-nacmonpien1api",
  "version": "1.0.0",
  "description": "NodeJS project that evaluates the estimated loan amount, based on the material and weight of the item.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/abrahamTech/NodeJS-NacMonPieN1API.git"
  },
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/abrahamTech/NodeJS-NacMonPieN1API/issues"
  },
  "homepage": "https://github.com/abrahamTech/NodeJS-NacMonPieN1API#readme"
}
```

## Contribuciones

¡Contribuciones son bienvenidas! Si encuentras algún problema o tienes sugerencias, por favor crea un [issue](https://github.com/abrahamTech/NodeJS-NacMonPieN1API/issues).