function contarHasta(numero){
    let array = [];
    for(let i=1; i<=numero; i++){
        array.push(i);
    }
    return array;
}
    
function numerosPares(limite){
    let array = [];
    for(let i=0; i<=limite; i+=2){
        array.push(i);
    } return array;
}

function cuentaRegresiva(inicio){
    let array = [];
    for(let i=inicio; i>0; i--){
        array.push(i);
    } return array;
}

function sumarHasta(limite){
    let suma = 0;
    let numero = 1;
    while(suma<limite){
        suma += numero;
        numero++;

    } return suma;
}

function duplicarHasta(numero, limite){
    do{
        numero *= 2;
    } while(numero<limite){

    } return numero;
}

function encontrarPrimerMultiplo(numero, multiplo){
    for(let i=1; ;i++){
        if(i % multiplo === 0 && i > numero){
            resultado = i;
            break;
        }
    }
    return resultado;
}

function numerosImpares(limite){
    let impares = [];
    for(let i=1; i<=limite; i++){
        if(i % 2 === 0){
            continue;
        }

        impares.push(i);
    }

    return impares;
}

function tablaMultiplicar(numero){
    let tabla = [];
    for(let i=1; i<=numero; i++){
        let fila = [];
        for(let j=1; j<=numero; j++){
            fila.push(i * j);
        }
        tabla.push(fila);
    }
    return tabla;
}

function sumarArray(numeros){
    let suma = 0;
    for(let i = 0; i < numeros.length; i++){
        suma += numeros[i];
    }
    return suma;
}

function filtrarMayores(numeros, minimo){
    let resultado = [];
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > minimo){
            resultado.push(numeros[i]);
        }
    }
    return resultado;
}

function fizzBuzz(n){

    let resultado = [];

    for(let i =1; i <= n; i++){

        if(i % 3 === 0 && i % 5 === 0){
            resultado.push("FizzBuzz");
        } else if(i % 3 === 0){
            resultado.push("Fizz");
        } else if(i % 5 === 0){
            resultado.push("Buzz");
        } else {
            resultado.push(i);
        }

    }
    return resultado;
}

function esPalindromo(texto){
    texto = texto.toLowerCase().replace(/[^a-z0-9]/g, "");
    let invertido = "";
    for(let i = texto.length - 1; i >= 0; i--){
        invertido += texto[i];

    }
    return texto === invertido;
}

