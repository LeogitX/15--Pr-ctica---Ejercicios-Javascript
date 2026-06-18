# Ejercicios JavaScript

Este repositorio contiene una carpeta llamada "ejercicios" donde encontrarás un archivo por cada ejercicio a realizar. Cada ejercicio incluye pruebas automatizadas para autocorrección y calificación automática.

El repositorio incluye ejercicios de **JavaScript** (ejercicios 1-6), cubriendo desde conceptos básicos hasta avanzados.

## Estructura del Proyecto

```
./
├── ejercicios/          # Ejercicios a realizar.
├── src/                # Archivos de ejemplo y soluciones.
├── tests/              # Pruebas automatizadas (no tocar ni modificar nada).
├── .github/workflows/  # Configuración de GitHub Actions (no tocar ni modificar nada).
└── package.json        # Dependencias para las pruebas (no tocar ni modificar nada).
```

## Ejercicios

## Ejercicios de JavaScript

### Ejercicio 1: Variables y Tipos de Datos

**Objetivo**: Aprender a declarar variables usando `let`, `const` y `var`, y trabajar con los tipos de datos primitivos de JavaScript.

**Archivos a crear**:
- `src/ejercicio-1/variables.html`
- `src/ejercicio-1/variables.js`

**Conceptos cubiertos**:
- Variables: `let`, `const`, `var`
- Tipos de datos primitivos: String, Number, Boolean, Undefined, Null
- Template literals
- Concatenación de strings
- Operaciones aritméticas básicas

**Comandos de prueba**:
```bash
npm test -- --testPathPattern="1-variables-tipos.test.js"
```

---

### Ejercicio 2: Operadores y Expresiones

**Objetivo**: Dominar el uso de operadores aritméticos, de comparación, lógicos y de asignación para crear expresiones y evaluar condiciones.

**Archivos a crear**:
- `src/ejercicio-2/operadores.html`
- `src/ejercicio-2/operadores.js`

**Conceptos cubiertos**:
- Operadores aritméticos: `+`, `-`, `*`, `/`, `%`, `**`, `++`, `--`
- Operadores de comparación: `>`, `<`, `>=`, `<=`, `==`, `===`, `!=`, `!==`
- Operadores lógicos: `&&`, `||`, `!`
- Operadores de asignación: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
- Operador ternario: `? :`
- Operador `typeof`

**Comandos de prueba**:
```bash
npm test -- --testPathPattern="2-operadores.test.js"
```

---

### Ejercicio 3: Estructuras de Control (if/else)

**Objetivo**: Aprender a tomar decisiones en el código usando estructuras condicionales como `if`, `else if`, `else` y el operador ternario.

**Archivos a crear**:
- `src/ejercicio-3/condicionales.html`
- `src/ejercicio-3/condicionales.js`

**Conceptos cubiertos**:
- Condicionales: `if`, `else if`, `else`
- Operador ternario
- Switch statement
- Condicionales anidados
- Validaciones múltiples
- Lógica compleja con operadores

**Funciones requeridas**:
- `verificarEdad`, `verificarParImpar`, `obtenerCalificacion`
- `verificarAcceso`, `esMayorDeEdad`, `clasificarTemperatura`
- `obtenerDiaSemana`, `obtenerEstacion`, `validarUsuario`
- `calcularDescuento`

**Comandos de prueba**:
```bash
npm test -- --testPathPattern="3-condicionales.test.js"
```

---

### Ejercicio 4: Bucles y Ciclos

**Objetivo**: Dominar el uso de estructuras repetitivas para iterar sobre datos y ejecutar código múltiples veces usando `for`, `while`, `do-while` y las sentencias `break` y `continue`.

**Archivos a crear**:
- `src/ejercicio-4/bucles.html`
- `src/ejercicio-4/bucles.js`

**Conceptos cubiertos**:
- Bucle `for` (básico, con paso, inverso)
- Bucle `while`
- Bucle `do-while`
- Sentencias `break` y `continue`
- Bucles anidados
- Recorrer arrays
- Filtrar con bucles
- Algoritmos clásicos (FizzBuzz, palíndromos)

**Funciones requeridas**:
- `contarHasta`, `numerosPares`, `cuentaRegresiva`
- `sumarHasta`, `duplicarHasta`, `encontrarPrimerMultiplo`
- `numerosImpares`, `tablaMultiplicar`, `sumarArray`
- `filtrarMayores`, `fizzBuzz`, `esPalindromo`

**Comandos de prueba**:
```bash
npm test -- --testPathPattern="4-bucles.test.js"
```

---

### Ejercicio 5: Funciones Básicas

**Objetivo**: Dominar la declaración y uso de funciones, incluyendo parámetros, valores de retorno, y el concepto de scope (ámbito de las variables).

**Archivos a crear**:
- `src/ejercicio-5/funciones.html`
- `src/ejercicio-5/funciones.js`

**Conceptos cubiertos**:
- Declaración de funciones
- Parámetros y argumentos
- Parámetros por defecto
- Valores de retorno
- Scope (global y local)
- Expresiones de función
- Rest parameters (`...args`)
- Funciones recursivas
- Funciones que retornan funciones (closures básicos)

**Funciones requeridas**:
- `saludar`, `saludarPersona`, `sumar`
- `crearMensaje`, `crearPersona`, `operacionesMatematicas`
- `dividir`, `calcularTotal`, `incrementarContador`
- `esPar`, `filtrarPares`, `factorial`
- `multiplicar`, `sumarTodos`, `crearMultiplicador`

**Comandos de prueba**:
```bash
npm test -- --testPathPattern="5-funciones.test.js"
```

---

### Ejercicio 6: Funciones Avanzadas

**Objetivo**: Dominar conceptos avanzados de funciones incluyendo arrow functions, callbacks, funciones anónimas, closures, y métodos de arrays de orden superior.

**Archivos a crear**:
- `src/ejercicio-6/funciones-avanzadas.html`
- `src/ejercicio-6/funciones-avanzadas.js`

**Conceptos cubiertos**:
- Arrow functions (sintaxis básica, return implícito)
- Callbacks
- Métodos de arrays: `map()`, `filter()`, `reduce()`, `find()`, `forEach()`, `some()`, `every()`
- Encadenamiento de métodos
- Closures
- Funciones de orden superior
- Programación funcional

**Funciones requeridas**:
- `multiplicarPorDos`, `cuadrado`, `obtenerFechaActual`
- `calcularArea`, `procesarNumero`, `procesarArray`
- `doblarNumeros`, `filtrarMayoresDeEdad`, `sumarEdades`
- `encontrarPorNombre`, `imprimirNombres`, `procesarNumeros`
- `crearContador`, `operacionMatematica`
- `tieneAprobados`, `todosAprobados`

**Comandos de prueba**:
```bash
npm test -- --testPathPattern="6-funciones-avanzadas.test.js"
```

---


## Ejecución de Pruebas

Para verificar tu progreso, ejecuta las pruebas:

```bash
# Instalar dependencias
npm install

# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas de ejercicios JavaScript
npm test -- --testPathPattern="1-variables-tipos.test.js"
npm test -- --testPathPattern="2-operadores.test.js"
npm test -- --testPathPattern="3-condicionales.test.js"
npm test -- --testPathPattern="4-bucles.test.js"
npm test -- --testPathPattern="5-funciones.test.js"
npm test -- --testPathPattern="6-funciones-avanzadas.test.js"

# Ejecutar pruebas de ejercicios CSS
npm test -- --testPathPattern="4-selectores-atributo.test.js"
npm test -- --testPathPattern="5-pseudos.test.js"
npm test -- --testPathPattern="6-combinadores.test.js"
```

## Consejos Generales

### Para ejercicios de JavaScript:
- **Usa console.log()** para depurar tu código y ver los valores de las variables
- **Prueba las funciones** en la consola del navegador antes de ejecutar los tests
- **Lee los mensajes de error** de las pruebas para entender qué falta
- **Consulta MDN** (Mozilla Developer Network) para documentación oficial
- **Practica regularmente** - la programación se aprende haciendo
- **Divide problemas complejos** en pasos más pequeños

## Recursos Útiles

### JavaScript
- [MDN JavaScript Guide](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

¡Buena suerte y diviértete aprendiendo JavaScript!
