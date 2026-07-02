function saludar(){
    return "¡Hola, mundo!"
}

function saludarPersona(nombre){
    return `¡Hola, ${nombre}!`;
}

function sumar(a,b){
    let suma = 0;
    suma = a + b;
    return suma;
}

function crearMensaje(texto,veces){
    return Array(veces).fill(texto).join(" ");

}

function crearPersona(nombre, edad, ciudad){
    return {
        "nombre": nombre,
        "edad": edad,
        "ciudad": ciudad
    };
}

function operacionesMatematicas(num1, num2){

    return[
        num1 + num2,
        num1 - num2,
        num1 * num2,
        num1 / num2
    ];
}

function dividir(dividendo, divisor){
    if(divisor === 0){
        return "Error: No se puede dividir por cero"
    } else {
        return dividendo / divisor;
    }

    
}

function calcularTotal(precio){
    let impuesto = 0.21;
    let total = precio + (precio*impuesto);

    return total;
}

let contador = 0;

function incrementarContador(){
    contador++;
    return contador;
}

function esPar(numero){
    return numero%2===0;
}

function filtrarPares(numeros){
    return numeros.filter(esPar);
}

function factorial(n){

    if(n === 0 || n === 1){
        return 1;
    }

    return n * factorial(n-1);
}

let multiplicar = function (a,b){
    return a * b;
}

function sumarTodos(...numeros){
    return numeros.reduce((a, b)=> a + b, 0);
}

function crearMultiplicador(factor){
    return function(numero){
        return numero * factor;
    }
}