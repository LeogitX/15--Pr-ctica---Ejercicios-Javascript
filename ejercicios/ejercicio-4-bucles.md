# Ejercicio 4: Bucles y Ciclos en JavaScript

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
Dominar el uso de estructuras repetitivas para iterar sobre datos y ejecutar código múltiples veces usando `for`, `while`, `do-while` y las sentencias `break` y `continue`.

## Instrucciones

Crea los siguientes archivos en la carpeta `src/ejercicio-4/`:
- `bucles.html`
- `bucles.js`

### Requisitos del HTML (`bucles.html`)

Crea un documento HTML básico que:
1. Tenga un título "Ejercicio 4: Bucles y Ciclos"
2. Incluya un `<div>` con id `"resultados"` para mostrar resultados
3. Incluya varios `<ul>` o `<div>` para mostrar los resultados de cada función
4. Enlace el archivo JavaScript `bucles.js`
5. Aplicar estilos básicos para mejorar la presentación (por ejemplo, márgenes, colores, fuentes).

![CSS](img/css.png)

### Requisitos del JavaScript (`bucles.js`)

#### 1. Bucle For Básico
Crea una función `contarHasta` que:
- Reciba un parámetro `numero`
- Use un bucle `for` para crear un array con los números del 1 hasta `numero`
- Retorne el array
- Ejemplo: `contarHasta(5)` retorna `[1, 2, 3, 4, 5]`

#### 2. Bucle For con Paso
Crea una función `numerosPares` que:
- Reciba un parámetro `limite`
- Use un bucle `for` con incremento de 2 para obtener los números pares del 0 hasta `limite`
- Retorne un array con los números pares
- Ejemplo: `numerosPares(10)` retorna `[0, 2, 4, 6, 8, 10]`

#### 3. Bucle For Inverso
Crea una función `cuentaRegresiva` que:
- Reciba un parámetro `inicio`
- Use un bucle `for` que cuente de forma descendente desde `inicio` hasta 1
- Retorne un array con los números
- Ejemplo: `cuentaRegresiva(5)` retorna `[5, 4, 3, 2, 1]`

#### 4. Bucle While
Crea una función `sumarHasta` que:
- Reciba un parámetro `limite`
- Use un bucle `while` para sumar números consecutivos (1 + 2 + 3 + ...) hasta que la suma sea mayor o igual a `limite`
- Retorne la suma final
- Ejemplo: `sumarHasta(10)` retorna `10` (1+2+3+4 = 10)

#### 5. Bucle Do-While
Crea una función `duplicarHasta` que:
- Reciba dos parámetros: `numero` y `limite`
- Use un bucle `do-while` para duplicar `numero` hasta que sea mayor o igual a `limite`
- Retorne el número final
- Ejemplo: `duplicarHasta(3, 50)` retorna `48` (3 -> 6 -> 12 -> 24 -> 48)

#### 6. Break en Bucles
Crea una función `encontrarPrimerMultiplo` que:
- Reciba dos parámetros: `numero` y `multiplo`
- Use un bucle `for` que empiece en 1
- Cuando encuentre el primer múltiplo de `multiplo` que sea mayor que `numero`, use `break` para salir
- Retorne ese múltiplo
- Ejemplo: `encontrarPrimerMultiplo(25, 7)` retorna `28` (primer múltiplo de 7 mayor que 25)

#### 7. Continue en Bucles
Crea una función `numerosImpares` que:
- Reciba un parámetro `limite`
- Use un bucle `for` del 1 hasta `limite`
- Use `continue` para saltar los números pares
- Retorne un array con solo los números impares
- Ejemplo: `numerosImpares(10)` retorna `[1, 3, 5, 7, 9]`

#### 8. Bucles Anidados
Crea una función `tablaMultiplicar` que:
- Reciba un parámetro `numero`
- Use bucles anidados para crear la tabla de multiplicar del 1 hasta `numero`
- Retorne un array de arrays
- Ejemplo: `tablaMultiplicar(3)` retorna:
  ```
  [
    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9]
  ]
  ```

#### 9. Recorrer Arrays
Crea una función `sumarArray` que:
- Reciba un parámetro `numeros` (array de números)
- Use un bucle `for` para recorrer el array
- Retorne la suma de todos los elementos
- Ejemplo: `sumarArray([1, 2, 3, 4, 5])` retorna `15`

#### 10. Filtrar con Bucles
Crea una función `filtrarMayores` que:
- Reciba dos parámetros: `numeros` (array) y `minimo` (número)
- Use un bucle para iterar sobre el array
- Retorne un nuevo array con solo los números mayores que `minimo`
- Ejemplo: `filtrarMayores([1, 5, 10, 15, 3], 7)` retorna `[10, 15]`

#### 11. FizzBuzz
Crea una función `fizzBuzz` que:
- Reciba un parámetro `n`
- Use un bucle del 1 hasta `n`
- Para cada número:
  - Si es múltiplo de 3 y 5, agrega "FizzBuzz"
  - Si es múltiplo de 3, agrega "Fizz"
  - Si es múltiplo de 5, agrega "Buzz"
  - Si no es múltiplo de ninguno, agrega el número
- Retorne un array con los resultados
- Ejemplo: `fizzBuzz(15)` retorna `[1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]`

#### 12. Palíndromo
Crea una función `esPalindromo` que:
- Reciba un parámetro `texto` (string)
- Use un bucle para verificar si el texto es igual al revés
- Retorne `true` si es palíndromo, `false` si no
- Ignora mayúsculas/minúsculas y espacios
- Ejemplo: `esPalindromo("anita lava la tina")` retorna `true`

## Conceptos Clave

### Bucle For
```javascript
for (inicializacion; condicion; incremento) {
  // código a repetir
}
```

### Bucle While
```javascript
while (condicion) {
  // código a repetir
  // actualizar condición
}
```

### Bucle Do-While
```javascript
do {
  // código a repetir
  // actualizar condición
} while (condicion);
```

### Break y Continue
- `break`: Sale completamente del bucle
- `continue`: Salta a la siguiente iteración

### Bucles Anidados
```javascript
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    // código
  }
}
```

### Recorrer Arrays
```javascript
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

## Validación

Ejecuta las pruebas con:
```bash
npm test 4-bucles.test.js
```

## Recursos
- [MDN: for](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for)
- [MDN: while](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/while)
- [MDN: do...while](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/do...while)
- [MDN: break](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/break)
- [MDN: continue](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/continue)
