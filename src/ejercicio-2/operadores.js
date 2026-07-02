let num1 = 10;
let num2 = 3;
let sumaTotal = num1 + num2;
let restaTotal = num1 - num2;
let multiplicacionTotal = num1 * num2;
let divisionTotal = num1 / num2;
let moduloTotal = num1 % num2;
let potencia = num1**2;


let incremento = num1;
incremento++;
let decremento = num2;
decremento--;

let esMayor = num1 > num2;
let esMenor = num1 < num2;

let esMayorIgual = num1 >= 10;
let esMenorIgual = num1 <= 5;

let esIgual = 5=="5";
let esEstrictamenteIgual = 5==="5";

let esDiferente = 5 != 3;
let esEstrictamenteDiferente = 5 !== "5";

let tienePermiso = true;
let esAdulto = true;
let tieneDinero = false;

let puedeEntrar = tienePermiso && esAdulto;
let puedeComprar = tieneDinero || esAdulto;
let noTienePermiso = !tienePermiso;
let condicionCompleja = (tienePermiso && esAdulto) || tieneDinero;


let puntos = 100;

let puntosSuma = puntos+=50;

let puntosResta = puntos-=20;

let puntosMultiplica = puntos*=2;



let puntosDivide = puntos/=2;

let puntosModulo = puntos%=10;



let edad = 18;

let mensaje = edad >= 18 ? "Eres mayor de edad" : "Menor de edad";

let descuento = puntos > 100 ? 20 : 10;



let estado = esAdulto ? "Adulto" : "Joven";

let tipoNumero = typeof num1;
let tipoTexto = typeof "Hola";
let tipoBooleano = typeof true;
let tipoUndefined = typeof undefined;
let tipoNull = typeof null;


