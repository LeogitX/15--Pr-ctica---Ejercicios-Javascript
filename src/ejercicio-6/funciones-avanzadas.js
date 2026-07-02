const multiplicarPorDos = (numero) => {
    return numero * 2;
}

const cuadrado = x => x * x;

const obtenerFechaActual = () => {
    return new Date();
}

const calcularArea = (base,altura) => {
    return base * altura;
}

function procesarNumero(numero, callback){
    return callback(numero);
}

function procesarArray(array, callback){
    return array.map(callback);
}

function doblarNumeros(numeros){
    return numeros.map(numero=>numero*2);
}

function filtrarMayoresDeEdad(personas){
    return personas.filter(persona=>persona.edad >=18);
}

function sumarEdades(personas){
    return personas.reduce((total, persona) => total + persona.edad, 0);
}

function encontrarPorNombre(personas, nombre){
    return personas.find(persona => persona.nombre === nombre);
}

let resultado = "";
function imprimirNombres(nombres) {
    

    nombres.forEach((nombre, indice) => {
        resultado += nombre;

        if (indice < nombres.length - 1) {
            resultado += ", ";
        }
    });
    return resultado;
}

function procesarNumeros(numeros) {
    return numeros
        .filter(numero => numero % 2 === 0)
        .map(numero => numero * 2)
        .reduce((total, numero) => total + numero, 0);
}

function crearContador() {
    let cuenta = 0;

    return {
        incrementar() {
            cuenta++;
            return cuenta;
        },

        obtenerValor() {
            return cuenta;
        }
    };
}

function operacionMatematica(a, b, operacion) {
    return operacion(a, b);
}

function tieneAprobados(notas) {
    return notas.some(nota => nota >= 60);
}

function todosAprobados(notas) {
    return notas.every(nota => nota >= 60);
}

