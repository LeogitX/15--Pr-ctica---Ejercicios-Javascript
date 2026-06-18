# Ejercicio 6: Funciones Avanzadas en JavaScript

## Configuración del Entorno de Desarrollo

### Instalación de Docker y DevContainer

Antes de comenzar, asegúrate de tener Docker instalado y configurado:

1. **Instalar Docker Desktop:**
   - Descarga Docker Desktop desde [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)
   - Sigue las instrucciones de instalación para tu sistema operativo
   - Inicia Docker Desktop y verifica que esté ejecutándose

2. **Abrir el proyecto en DevContainer:**
   - Abre VS Code en la carpeta del proyecto
   - Instala la extensión "Dev Containers" de Microsoft si no la tienes
   - Presiona `F1` o `Ctrl+Shift+P` (Cmd+Shift+P en Mac)
   - Escribe y selecciona: **"Dev Containers: Reopen in Container"**
   - Espera a que el contenedor se construya e inicie (puede tardar unos minutos la primera vez)

## Cómo visualizar este ejercicio

Para ver tu trabajo en el navegador mientras desarrollas:

1. Asegúrate de tener la extensión **Live Server** instalada en VS Code
2. Abre el archivo `src/index.html` 
3. Haz clic derecho en el archivo y selecciona **"Open with Live Server"**
4. Tu navegador se abrirá automáticamente mostrando la página
5. Los cambios se actualizarán automáticamente al guardar

## Objetivo
Dominar conceptos avanzados de funciones incluyendo arrow functions, callbacks, funciones anónimas, closures, y métodos de arrays de orden superior.

## Instrucciones

Crea los siguientes archivos en la carpeta `src/ejercicio-6/`:
- `funciones-avanzadas.html`
- `funciones-avanzadas.js`

### Requisitos del HTML (`funciones-avanzadas.html`)

Crea un documento HTML básico que:
1. Tenga un título "Ejercicio 6: Funciones Avanzadas"
2. Incluya un `<div>` con id `"contenido"` para mostrar resultados
3. Incluya botones interactivos para demostrar callbacks
4. Enlace el archivo JavaScript `funciones-avanzadas.js`
5. Aplicar estilos básicos para mejorar la presentación (por ejemplo, márgenes, colores, fuentes).

![CSS](img/css.png)

### Requisitos del JavaScript (`funciones-avanzadas.js`)

#### 1. Arrow Function Básica
Crea una arrow function `multiplicarPorDos` que:
- Reciba un parámetro `numero`
- Retorne el número multiplicado por 2
- Use sintaxis de arrow function (`=>`)

#### 2. Arrow Function con Parámetro Implícito
Crea una arrow function `cuadrado` que:
- Reciba un parámetro `x`
- Retorne el cuadrado de x
- Use sintaxis de arrow function con return implícito (sin llaves)
- Ejemplo: `const cuadrado = x => x * x;`

#### 3. Arrow Function sin Parámetros
Crea una arrow function `obtenerFechaActual` que:
- No reciba parámetros
- Retorne un objeto Date con la fecha actual
- Use sintaxis de arrow function

#### 4. Arrow Function con Múltiples Parámetros
Crea una arrow function `calcularArea` que:
- Reciba dos parámetros: `base` y `altura`
- Retorne el área del rectángulo (base * altura)
- Use sintaxis de arrow function

#### 5. Callback Simple
Crea una función `procesarNumero` que:
- Reciba dos parámetros: `numero` y `callback`
- Llame al callback pasándole el número
- Retorne el resultado del callback
- Ejemplo: `procesarNumero(5, x => x * 2)` retorna `10`

#### 6. Callback con Array
Crea una función `procesarArray` que:
- Reciba dos parámetros: `array` y `callback`
- Aplique el callback a cada elemento del array
- Retorne un nuevo array con los resultados
- Ejemplo: `procesarArray([1, 2, 3], x => x * 2)` retorna `[2, 4, 6]`

#### 7. Método map()
Crea una función `doblarNumeros` que:
- Reciba un array de números
- Use el método `map()` para doblar cada número
- Retorne el nuevo array
- Ejemplo: `doblarNumeros([1, 2, 3, 4])` retorna `[2, 4, 6, 8]`

#### 8. Método filter()
Crea una función `filtrarMayoresDeEdad` que:
- Reciba un array de objetos persona con propiedad `edad`
- Use el método `filter()` para obtener solo personas mayores de 18 años
- Retorne el array filtrado
- Ejemplo: `filtrarMayoresDeEdad([{edad: 15}, {edad: 20}, {edad: 17}])` retorna `[{edad: 20}]`

#### 9. Método reduce()
Crea una función `sumarEdades` que:
- Reciba un array de objetos persona con propiedad `edad`
- Use el método `reduce()` para sumar todas las edades
- Retorne la suma total
- Ejemplo: `sumarEdades([{edad: 20}, {edad: 30}, {edad: 25}])` retorna `75`

#### 10. Método find()
Crea una función `encontrarPorNombre` que:
- Reciba dos parámetros: `personas` (array) y `nombre` (string)
- Use el método `find()` para encontrar la primera persona con ese nombre
- Retorne el objeto persona o `undefined` si no se encuentra
- Ejemplo: `encontrarPorNombre([{nombre: "Ana"}, {nombre: "Juan"}], "Juan")` retorna `{nombre: "Juan"}`

#### 11. Método forEach()
Crea una función `imprimirNombres` que:
- Reciba un array de nombres
- Use `forEach()` para crear un string con todos los nombres separados por comas
- Retorne el string resultante
- Ejemplo: `imprimirNombres(["Ana", "Juan", "María"])` retorna `"Ana, Juan, María"`

#### 12. Encadenamiento de Métodos
Crea una función `procesarNumeros` que:
- Reciba un array de números
- Use encadenamiento para:
  1. Filtrar solo los números pares
  2. Multiplicar cada uno por 2
  3. Sumar todos los resultados
- Retorne la suma final
- Ejemplo: `procesarNumeros([1, 2, 3, 4, 5, 6])` retorna `24` (2*2 + 4*2 + 6*2 = 4 + 8 + 12 = 24)

#### 13. Closure
Crea una función `crearContador` que:
- No reciba parámetros
- Declare una variable privada `cuenta` inicializada en 0
- Retorne un objeto con dos métodos:
  - `incrementar()`: incrementa cuenta y retorna el nuevo valor
  - `obtenerValor()`: retorna el valor actual de cuenta
- Ejemplo:
  ```javascript
  const contador = crearContador();
  contador.incrementar(); // retorna 1
  contador.incrementar(); // retorna 2
  contador.obtenerValor(); // retorna 2
  ```

#### 14. Función de Orden Superior con Múltiples Callbacks
Crea una función `operacionMatematica` que:
- Reciba tres parámetros: `a`, `b`, y `operacion` (callback)
- Ejecute la operación con los dos números
- Retorne el resultado
- Debe funcionar con diferentes operaciones pasadas como callbacks
- Ejemplo:
  ```javascript
  operacionMatematica(10, 5, (x, y) => x + y); // retorna 15
  operacionMatematica(10, 5, (x, y) => x - y); // retorna 5
  ```

#### 15. Método some() y every()
Crea dos funciones:

`tieneAprobados` que:
- Reciba un array de notas
- Use `some()` para verificar si al menos una nota es >= 60
- Retorne `true` o `false`

`todosAprobados` que:
- Reciba un array de notas
- Use `every()` para verificar si todas las notas son >= 60
- Retorne `true` o `false`

## Conceptos Clave

### Arrow Functions
```javascript
// Sintaxis completa
const suma = (a, b) => {
  return a + b;
};

// Return implícito
const suma = (a, b) => a + b;

// Un parámetro sin paréntesis
const doble = x => x * 2;

// Sin parámetros
const saludar = () => "Hola";
```

### Callbacks
Una función que se pasa como argumento a otra función:
```javascript
function procesar(valor, callback) {
  return callback(valor);
}
procesar(5, x => x * 2); // 10
```

### Métodos de Array
- `map()`: Transforma cada elemento
- `filter()`: Filtra elementos
- `reduce()`: Reduce a un solo valor
- `find()`: Encuentra el primer elemento que cumple condición
- `forEach()`: Ejecuta función para cada elemento
- `some()`: Verifica si al menos uno cumple condición
- `every()`: Verifica si todos cumplen condición

### Closures
Funciones que "recuerdan" el entorno donde fueron creadas:
```javascript
function crearSumador(x) {
  return function(y) {
    return x + y;
  };
}
const sumar5 = crearSumador(5);
sumar5(3); // 8
```

## Validación

Ejecuta las pruebas con:
```bash
npm test 6-funciones-avanzadas.test.js
```

## Recursos
- [MDN: Arrow Functions](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN: Callbacks](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
- [MDN: Array.prototype.map()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN: Array.prototype.filter()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [MDN: Array.prototype.reduce()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [MDN: Closures](https://developer.mozilla.org/es/docs/Web/JavaScript/Closures)
