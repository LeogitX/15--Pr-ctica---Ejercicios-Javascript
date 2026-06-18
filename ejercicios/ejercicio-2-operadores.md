# Ejercicio 2: Operadores y Expresiones en JavaScript

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

## 🎯 Objetivo
Dominar el uso de operadores aritméticos, de comparación, lógicos y de asignación para crear expresiones y evaluar condiciones en JavaScript.

## Instrucciones

## 📁 Archivos a Crear

Crea los siguientes archivos en la carpeta `src/ejercicio-2/`:

Debes crear los siguientes archivos en la carpeta `src/ejercicio-2/`:- `operadores.html`

- `operadores.html`- `operadores.js`

- `operadores.js`

### Requisitos del HTML (`operadores.html`)

---

Crea un documento HTML básico que:

## 📝 PARTE 1: Archivo HTML (`operadores.html`)
1. Tenga un título "Ejercicio 2: Operadores y Expresiones"
2. **Configuración del head**:
   - Incluye `<meta charset="UTF-8">` para soporte de caracteres especiales
   - Incluye `<meta name="viewport" content="width=device-width, initial-scale=1.0">` para diseño responsive
   - El título de la página debe ser exactamente: **"Ejercicio 2: Operadores y Expresiones"**

Declara las siguientes variables:

3. **Contenido del body**:- `num1`: un número (ejemplo: 10)

   - Agrega un encabezado `<h1>` con el texto que prefieras sobre el tema del ejercicio- `num2`: otro número (ejemplo: 3)
   - Crea un `<div>` con el atributo `id="resultado"`. Este div será utilizado para mostrar los resultados mediante JavaScript
   - El div puede incluir un texto inicial como "Cargando resultados..." o estar vacíoCrea estas operaciones:
   - `sumaTotal`: suma de num1 y num2

4. **Enlace al archivo JavaScript**:- `restaTotal`: resta de num1 y num2
3. **Contenido del body**:
   - Agrega un encabezado `<h1>` con el texto que prefieras sobre el tema del ejercicio
   - Crea un `<div>` con el atributo `id="resultado"`. Este div será utilizado para mostrar los resultados mediante JavaScript
   - El div puede incluir un texto inicial como "Cargando resultados..." o estar vacío
5. **Estilos CSS (opcional pero recomendado)**:
   - `incremento`: incrementa num1 en 1 usando `++`
   - Puedes agregar una etiqueta `<style>` en el `<head>` para mejorar la presentación- `decremento`: decrementa num2 en 1 usando `--`
   - Sugerencias: establece márgenes al body, cambia la fuente, agrega colores de fondo, padding al div resultado
   - Puedes reutilizar los estilos del Ejercicio 1 si lo deseas#### 2. Operadores de Comparación

Crea variables booleanas usando comparaciones:

---- 
- `esMayor`: num1 es mayor que num2 (usar `>`)    
- `esMenor`: num1 es menor que num2 (usar `<`)

## 💻 PARTE 2: Archivo JavaScript (`operadores.js`)
- `esMayorIgual`: num1 es mayor o igual que 10 (usar `>=`)
- `esMenorIgual`: num2 es menor o igual que 5 (usar `<=`)

### 1️⃣ OPERADORES ARITMÉTICOS
- `esIgual`: compara si 5 es igual a "5" usando `==`
- `esEstrictamenteIgual`: compara si 5 es estrictamente igual a "5" usando `===`

Los operadores aritméticos realizan operaciones matemáticas básicas con números.- `esDiferente`: compara si 5 es diferente de 3 usando `!=`

- `esEstrictamenteDiferente`: compara si 5 es estrictamente diferente de "5" usando `!==`

#### Variables Base (Paso 1):

Primero, declara dos variables numéricas usando `let`:#### 3. Operadores Lógicos

- **`num1`**: Asígnale cualquier número entero o decimal que desees (sugerido: 10)Declara estas variables:
- **`num2`**: Asígnale otro número diferente (sugerido: 3)- `tienePermiso`: true

### 1️⃣ OPERADORES ARITMÉTICOS

Los operadores aritméticos realizan operaciones matemáticas básicas con números.

#### Variables Base (Paso 1):

Primero, declara dos variables numéricas usando `let`:

- **`num1`**: Asígnale cualquier número entero o decimal que desees (sugerido: 10)
- **`num2`**: Asígnale otro número diferente (sugerido: 3)

- Crea una variable que contenga la RESTA de `num1` menos `num2`#### 4. Operadores de Asignación
- Utiliza el operador de resta `-`Declara `puntos` con valor inicial 100, luego:
- El orden importa: primero num1, luego resta, luego num2- `puntosSuma`: usa `+=` para sumar 50 a puntos
- `puntosResta`: usa `-=` para restar 20 a puntos

**c) Variable `multiplicacionTotal`:**
- `puntosMultiplica`: usa `*=` para multiplicar puntos por 2
- Crea una variable que contenga la MULTIPLICACIÓN de `num1` por `num2`- `puntosDivide`: usa `/=` para dividir puntos entre 2
- Utiliza el operador de multiplicación `*`- `puntosModulo`: usa `%=` para obtener el módulo de puntos entre 10
- Este operador calcula el producto de dos números

Nota: Debes aplicar cada operación consecutivamente sobre la variable `puntos`.

**d) Variable `divisionTotal`:**

- Crea una variable que contenga la DIVISIÓN de `num1` entre `num2`#### 5. Operador Ternario
- Utiliza el operador de división `/`Crea estas variables usando el operador ternario `? :`:
- Recuerda: el primer número es el dividendo, el segundo el divisor- `edad`: un número (ejemplo: 18)
- `mensaje`: si edad >= 18, debe ser "Mayor de edad", sino "Menor de edad"

**e) Variable `moduloTotal`:**- `descuento`: si puntos > 100, debe ser 20, sino 10

- Crea una variable que contenga el MÓDULO (resto) de dividir `num1` entre `num2`- `estado`: si esAdulto es true, debe ser "Adulto", sino "Joven"
- Utiliza el operador módulo `%`
- El módulo devuelve el resto de una división (por ejemplo: 10 % 3 = 1, porque 10 dividido entre 3 es 3 con resto 1)

#### 6. Operador typeof

Crea variables que usen `typeof` para obtener el tipo de dato:

**f) Variable `potencia`:**
- `tipoNumero`: tipo de dato de num1
- Crea una variable que eleve `num1` a la POTENCIA de 2- `tipoTexto`: tipo de dato de "Hola"
- Utiliza el operador de exponenciación `**`- `tipoBooleano`: tipo de dato de true
- La sintaxis es: base ** exponente- `tipoUndefined`: tipo de dato de undefined
- Esto calcula num1 multiplicado por sí mismo (num1 al cuadrado)- `tipoNull`: tipo de dato de null (nota: esto retorna "object", es un bug histórico de JS)

**g) Variable `incremento`:**

## Conceptos Clave

- Primero, crea una variable llamada `incremento` y asígnale el valor de `num1`
- Luego, en la siguiente línea, usa el operador de incremento `++` para aumentar su valor en 1

### Operadores Aritméticos

- Puedes usar `incremento++` (post-incremento) o `++incremento` (pre-incremento)- `+` suma
- Este operador es equivalente a sumar 1 a la variable- `-` resta
- `*` multiplicación

**h) Variable `decremento`:**- `/` división

- Primero, crea una variable llamada `decremento` y asígnale el valor de `num2`- `%` módulo (resto)
- Luego, en la siguiente línea, usa el operador de decremento `--` para disminuir su valor en 1- `**` exponenciación
- Puedes usar `decremento--` o `--decremento`- `++` incremento
- Este operador es equivalente a restar 1 a la variable- `--` decremento

---
### Operadores de Comparación

- `>` mayor que

### 2️⃣ OPERADORES DE COMPARACIÓN- `<` menor que

- `>=` mayor o igual

Los operadores de comparación comparan dos valores y devuelven un resultado booleano (`true` o `false`).- `<=` menor o igual

- `==` igual (con conversión de tipo)

#### Instrucciones Detalladas:- `===` estrictamente igual (sin conversión)

- `!=` diferente

**a) Variable `esMayor`:**- `!==` estrictamente diferente

- Crea una variable booleana que compare si `num1` es MAYOR QUE `num2`

- Utiliza el operador `>` (mayor que)### Operadores Lógicos

- La expresión completa será: num1 > num2- `&&` AND (y)

- Esto devolverá `true` si num1 es mayor, o `false` si no lo es- `||` OR (o)

- `!` NOT (no)

**b) Variable `esMenor`:**

Los operadores de comparación comparan dos valores y devuelven un resultado booleano (`true` o `false`).

#### Instrucciones Detalladas:

**a) Variable `esMayor`:**
- Crea una variable booleana que compare si `num1` es MAYOR QUE `num2`
- Utiliza el operador `>` (mayor que)
- La expresión completa será: num1 > num2
- Esto devolverá `true` si num1 es mayor, o `false` si no lo es

**b) Variable `esMenor`:**
- Crea una variable que compare si `num1` es MENOR QUE `num2`
- Utiliza el operador `<` (menor que)
- Analiza: ¿es 10 menor que 3? La respuesta será tu resultado

**c) Variable `esMayorIgual`:**
- Crea una variable que compare si `num1` es MAYOR O IGUAL QUE el número 10
- Utiliza el operador `>=` (mayor o igual que)
- Importante: compara num1 con el valor literal 10, no con num2
- Esta comparación devuelve `true` si num1 es mayor que 10 O si es exactamente igual a 10

**d) Variable `esMenorIgual`:**
- Crea una variable que compare si `num2` es MENOR O IGUAL QUE el número 5
- Utiliza el operador `<=` (menor o igual que)
- Compara num2 con el valor literal 5

**e) Variable `esIgual`:**
- Crea una variable que compare si el número 5 es IGUAL al string "5"
- Utiliza el operador `==` (igualdad con conversión de tipo)
- Este operador convierte los tipos de datos antes de comparar, por lo que un número puede ser igual a un string
- La comparación 5 == "5" devuelve `true` porque JavaScript convierte el string a número

**f) Variable `esEstrictamenteIgual`:**
- Crea una variable que compare si el número 5 es ESTRICTAMENTE IGUAL al string "5"
- Utiliza el operador `===` (igualdad estricta sin conversión)
- Este operador NO convierte tipos, por lo que compara tanto el valor como el tipo de dato
- La comparación 5 === "5" devuelve `false` porque uno es número y otro es string

**g) Variable `esDiferente`:**

## Recursos

**f) Variable `esEstrictamenteIgual`:**
- [MDN: Expresiones y Operadores](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators)
- Crea una variable que compare si el número 5 es ESTRICTAMENTE IGUAL al string "5"- [MDN: Operadores de Comparación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators#operadores_de_comparaci%C3%B3n)
- Utiliza el operador `===` (igualdad estricta sin conversión)- [MDN: Operadores Lógicos](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators#operadores_l%C3%B3gicos)
- Este operador NO convierte tipos, por lo que compara tanto el valor como el tipo de dato
- La comparación 5 === "5" devuelve `false` porque uno es número y otro es string

**g) Variable `esDiferente`:**
- Crea una variable que compare si el número 5 es DIFERENTE del número 3
- Utiliza el operador `!=` (desigualdad con conversión)
- Este operador devuelve `true` si los valores son diferentes después de la conversión de tipos

**h) Variable `esEstrictamenteDiferente`:**
- Crea una variable que compare si el número 5 es ESTRICTAMENTE DIFERENTE del string "5"
- Utiliza el operador `!==` (desigualdad estricta)
- Devuelve `true` si los valores son diferentes O si son de tipos diferentes
- En este caso será `true` porque aunque el valor es el mismo (5), el tipo es diferente (number vs string)

---

### 3️⃣ OPERADORES LÓGICOS

Los operadores lógicos se utilizan para combinar o invertir condiciones booleanas. Son fundamentales para crear lógica compleja en tus programas.

#### Variables Base (Paso 1):
Primero, declara estas tres variables booleanas usando `let`:
- **`tienePermiso`**: Asígnale el valor `true`
- **`esAdulto`**: Asígnale el valor `true`
- **`tieneDinero`**: Asígnale el valor `false`

#### Expresiones Lógicas Requeridas (Paso 2):

**a) Variable `puedeEntrar`:**
- Crea una variable que evalúe si AMBAS condiciones son verdaderas: tienePermiso Y esAdulto
- Utiliza el operador lógico AND que se escribe como `&&`
- La sintaxis es: condicion1 && condicion2
- El operador AND devuelve `true` solo si AMBAS condiciones son verdaderas
- Si usas los valores sugeridos (true && true), el resultado será `true`
- Piensa en esto como: "Solo puede entrar si tiene permiso Y ADEMÁS es adulto"

**b) Variable `puedeComprar`:**
- Crea una variable que evalúe si AL MENOS UNA de estas condiciones es verdadera: tienePermiso O tieneDinero
- Utiliza el operador lógico OR que se escribe como `||` (doble barra vertical)
- La sintaxis es: condicion1 || condicion2
- El operador OR devuelve `true` si al menos UNA de las condiciones es verdadera
- Con los valores sugeridos (true || false), el resultado será `true`
- Piensa en esto como: "Puede comprar si tiene permiso O si tiene dinero (o ambos)"

**c) Variable `noTienePermiso`:**
- Crea una variable que INVIERTA el valor de `tienePermiso`
- Utiliza el operador lógico NOT que se escribe como `!` (signo de exclamación)
- La sintaxis es: !variable
- El operador NOT convierte `true` en `false` y viceversa
- Si tienePermiso es `true`, entonces !tienePermiso será `false`
- Piensa en esto como una negación: "NO tiene permiso"

**d) Variable `condicionCompleja`:**
- Crea una variable que evalúe una condición más compleja combinando AND y OR
- La condición es: (tienePermiso AND esAdulto) OR tieneDinero
- Usa paréntesis para agrupar: primero evalúa (tienePermiso && esAdulto), luego ese resultado lo combinas con || tieneDinero
- Los paréntesis son importantes porque establecen el orden de evaluación
- Con los valores sugeridos: (true && true) || false = true || false = true
- Piensa en esto como: "La condición se cumple si tiene permiso Y es adulto, O si tiene dinero (aunque no cumpla las otras dos)"

---

### 4️⃣ OPERADORES DE ASIGNACIÓN

Los operadores de asignación modifican el valor de una variable. Son atajos para operaciones comunes.

#### ⚠️ IMPORTANTE - LEE ESTO PRIMERO:
- Todas las operaciones deben aplicarse **consecutivamente** sobre la MISMA variable `puntos`
- Cada operación modifica `puntos` y luego guardas ese valor en una nueva variable
- Es como una cadena: puntos comienza en 100, luego cambia a 150, luego a 130, etc.

#### Secuencia de Operaciones (Paso a Paso):

**Paso 1 - Inicialización:**
- Declara una variable `puntos` con el valor inicial 100
- Usa `let` porque el valor va a cambiar

**Paso 2 - Variable `puntosSuma`:**
- Aplica el operador `+=` para SUMAR 50 a la variable `puntos`
- El operador `+=` es un atajo: `puntos += 50` es equivalente a `puntos = puntos + 50`
- Después de esta operación, `puntos` ahora vale 150 (100 + 50)
- Luego, crea una nueva variable `puntosSuma` y asígnale el valor actual de `puntos` (que es 150)

**Paso 3 - Variable `puntosResta`:**
- Aplica el operador `-=` para RESTAR 20 a `puntos`
- El operador `-=` es un atajo: `puntos -= 20` equivale a `puntos = puntos - 20`
- Ahora `puntos` vale 130 (150 - 20)
- Crea la variable `puntosResta` y asígnale el valor actual de `puntos` (que es 130)

**Paso 4 - Variable `puntosMultiplica`:**
- Aplica el operador `*=` para MULTIPLICAR `puntos` por 2
- El operador `*=` es un atajo: `puntos *= 2` equivale a `puntos = puntos * 2`
- Ahora `puntos` vale 260 (130 * 2)
- Crea la variable `puntosMultiplica` y asígnale el valor actual de `puntos` (que es 260)

**Paso 5 - Variable `puntosDivide`:**
- Aplica el operador `/=` para DIVIDIR `puntos` entre 2
- El operador `/=` es un atajo: `puntos /= 2` equivale a `puntos = puntos / 2`
- Ahora `puntos` vale 130 (260 / 2)
- Crea la variable `puntosDivide` y asígnale el valor actual de `puntos` (que es 130)

**Paso 6 - Variable `puntosModulo`:**
- Aplica el operador `%=` para obtener el MÓDULO de `puntos` entre 10
- El operador `%=` es un atajo: `puntos %= 10` equivale a `puntos = puntos % 10`
- El módulo es el RESTO de la división: 130 dividido entre 10 es 13 con resto 0
- Ahora `puntos` vale 0 (el resto de 130 / 10)
- Crea la variable `puntosModulo` y asígnale el valor actual de `puntos` (que es 0)

**Resumen del flujo:**
- puntos = 100 (inicio)
- puntos += 50 → puntos = 150 → guardar en puntosSuma
- puntos -= 20 → puntos = 130 → guardar en puntosResta
- puntos *= 2 → puntos = 260 → guardar en puntosMultiplica
- puntos /= 2 → puntos = 130 → guardar en puntosDivide
- puntos %= 10 → puntos = 0 → guardar en puntosModulo

---

### 5️⃣ OPERADOR TERNARIO

El operador ternario es una forma abreviada de escribir una estructura if-else. Es muy útil para asignaciones condicionales simples.

#### 📖 Sintaxis del Operador Ternario:
`variable = condicion ? valorSiVerdadero : valorSiFalso`

- **condicion**: Una expresión que se evalúa como `true` o `false`
- **?**: Separa la condición de los valores posibles
- **valorSiVerdadero**: El valor que se asigna si la condición es `true`
- **:**: Separa los dos posibles valores
- **valorSiFalso**: El valor que se asigna si la condición es `false`

#### Variables Requeridas:

**Paso 1 - Variable `edad`:**
- Declara una variable `edad` y asígnale cualquier número que represente una edad (sugerido: 18)
- Usa `let` para declararla

**Paso 2 - Variable `mensaje`:**
- Crea una variable que use el operador ternario para determinar un mensaje
- La condición debe evaluar: ¿edad es mayor o igual a 18? (usa `edad >= 18`)
- Si la condición es verdadera (edad >= 18), el valor debe ser el string "Mayor de edad"
- Si la condición es falsa (edad < 18), el valor debe ser el string "Menor de edad"
- Usa el operador ternario con la sintaxis explicada arriba

**Paso 3 - Variable `descuento`:**
- Crea una variable que use el operador ternario para asignar un descuento
- La condición debe evaluar: ¿puntos es mayor que 100? (usa `puntos > 100`)
- IMPORTANTE: Usa la variable `puntos` original con valor 100 (puedes crear una variable nueva con valor 100 si ya modificaste la original)
- Si la condición es verdadera (puntos > 100), el valor debe ser el número 20
- Si la condición es falsa (puntos <= 100), el valor debe ser el número 10
- Usa el operador ternario con la sintaxis explicada arriba

**Paso 4 - Variable `estado`:**
- Crea una variable que use el operador ternario basándose en la variable `esAdulto`
- La condición es simplemente `esAdulto` (que ya es un booleano)
- Si `esAdulto` es `true`, el valor debe ser el string "Adulto"
- Si `esAdulto` es `false`, el valor debe ser el string "Joven"
- Usa el operador ternario con la sintaxis explicada arriba

**💡 Ejemplo de razonamiento para `mensaje`:**
- Si piensas "Si la edad es 18 o más, di 'Mayor de edad', si no, di 'Menor de edad'"
- Esto se traduce en: `edad >= 18 ? "Mayor de edad" : "Menor de edad"`

---

### 6️⃣ OPERADOR TYPEOF

El operador `typeof` es un operador especial que devuelve una cadena de texto (string) indicando el tipo de dato de una variable o valor.

#### 📖 Cómo funciona typeof:
- `typeof` se escribe antes del valor o variable que quieres evaluar
- Sintaxis: `typeof valor` o `typeof(valor)` (los paréntesis son opcionales)
- Siempre devuelve un **string** con el nombre del tipo
- Tipos posibles: "number", "string", "boolean", "undefined", "object", "function", "symbol", "bigint"

#### Variables Requeridas:

**a) Variable `tipoNumero`:**
- Crea una variable que use `typeof` para obtener el tipo de dato de `num1`
- Simplemente escribe `typeof` seguido de la variable `num1`
- El resultado será el string "number" porque num1 es un número
- Declara esta variable con `let`

**b) Variable `tipoTexto`:**
- Crea una variable que use `typeof` para obtener el tipo de dato del string "Hola"
- Escribe `typeof` seguido del valor literal "Hola" (entre comillas)
- El resultado será el string "string" porque "Hola" es texto
- Declara esta variable con `let`

**c) Variable `tipoBooleano`:**
- Crea una variable que use `typeof` para obtener el tipo de dato de `true`
- Escribe `typeof` seguido del valor literal `true` (sin comillas)
- El resultado será el string "boolean" porque true es un valor booleano
- Declara esta variable con `let`

**d) Variable `tipoUndefined`:**
- Crea una variable que use `typeof` para obtener el tipo de dato de `undefined`
- Escribe `typeof` seguido del valor `undefined`
- El resultado será el string "undefined", que indica que el valor no está definido
- Declara esta variable con `let`

**e) Variable `tipoNull`:**
- Crea una variable que use `typeof` para obtener el tipo de dato de `null`
- Escribe `typeof` seguido del valor `null`
- **⚠️ IMPORTANTE**: El resultado será el string "object" (NO "null")
- Esto es un bug histórico de JavaScript que se mantiene por compatibilidad
- Aunque `null` representa "ausencia de valor", `typeof null` incorrectamente devuelve "object"
- Este es uno de los errores más famosos del lenguaje, pero no se puede corregir sin romper millones de sitios web existentes
- Declara esta variable con `let`

**💡 Nota sobre typeof:**
- Es útil para verificar tipos de datos antes de realizar operaciones
- Puedes usarlo en condiciones: `if (typeof edad === "number")`
- Es especialmente útil cuando trabajas con datos que vienen de fuentes externas

---

## 📊 RESUMEN DE OPERADORES

### Operadores Aritméticos
| Operador | Nombre | Descripción |
|----------|--------|-------------|
| `+` | Suma | Suma dos números |
| `-` | Resta | Resta el segundo número del primero |
| `*` | Multiplicación | Multiplica dos números |
| `/` | División | Divide el primer número entre el segundo |
| `%` | Módulo | Devuelve el resto de una división |
| `**` | Exponenciación | Eleva un número a una potencia |
| `++` | Incremento | Aumenta en 1 |
| `--` | Decremento | Disminuye en 1 |

### Operadores de Comparación
| Operador | Nombre | Descripción |
|----------|--------|-------------|
| `>` | Mayor que | ¿El primero es mayor que el segundo? |
| `<` | Menor que | ¿El primero es menor que el segundo? |
| `>=` | Mayor o igual | ¿El primero es mayor o igual que el segundo? |
| `<=` | Menor o igual | ¿El primero es menor o igual que el segundo? |
| `==` | Igualdad | ¿Son iguales? (con conversión de tipo) |
| `===` | Igualdad estricta | ¿Son iguales? (sin conversión, compara tipo y valor) |
| `!=` | Desigualdad | ¿Son diferentes? (con conversión) |
| `!==` | Desigualdad estricta | ¿Son diferentes? (sin conversión) |

### Operadores Lógicos
| Operador | Nombre | Descripción |
|----------|--------|-------------|
| `&&` | AND (Y) | Verdadero solo si AMBAS condiciones son verdaderas |
| `\|\|` | OR (O) | Verdadero si AL MENOS UNA condición es verdadera |
| `!` | NOT (NO) | Invierte el valor: true → false, false → true |

### Operadores de Asignación
| Operador | Ejemplo | Equivalente a |
|----------|---------|---------------|
| `=` | `x = 5` | Asigna el valor 5 a x |
| `+=` | `x += 3` | `x = x + 3` |
| `-=` | `x -= 3` | `x = x - 3` |
| `*=` | `x *= 3` | `x = x * 3` |
| `/=` | `x /= 3` | `x = x / 3` |
| `%=` | `x %= 3` | `x = x % 3` |

---

## ✅ CHECKLIST FINAL

Antes de ejecutar los tests, verifica que hayas completado:

### HTML:
- [ ] Estructura HTML5 completa con DOCTYPE
- [ ] Título correcto en el `<title>`
- [ ] Div con id="resultado"
- [ ] Script enlazado correctamente

### JavaScript - Operadores Aritméticos:
- [ ] Variables num1 y num2 declaradas
- [ ] Variable sumaTotal (usa +)
- [ ] Variable restaTotal (usa -)
- [ ] Variable multiplicacionTotal (usa *)
- [ ] Variable divisionTotal (usa /)
- [ ] Variable moduloTotal (usa %)
- [ ] Variable potencia (usa **)
- [ ] Variable incremento (usa ++)
- [ ] Variable decremento (usa --)

### JavaScript - Operadores de Comparación:
- [ ] Variable esMayor (usa >)
- [ ] Variable esMenor (usa <)
- [ ] Variable esMayorIgual (usa >=)
- [ ] Variable esMenorIgual (usa <=)
- [ ] Variable esIgual (usa ==)
- [ ] Variable esEstrictamenteIgual (usa ===)
- [ ] Variable esDiferente (usa !=)
- [ ] Variable esEstrictamenteDiferente (usa !==)

### JavaScript - Operadores Lógicos:
- [ ] Variables tienePermiso, esAdulto, tieneDinero declaradas
- [ ] Variable puedeEntrar (usa &&)
- [ ] Variable puedeComprar (usa ||)
- [ ] Variable noTienePermiso (usa !)
- [ ] Variable condicionCompleja (usa && y ||)

### JavaScript - Operadores de Asignación:
- [ ] Variable puntos inicializada en 100
- [ ] Variable puntosSuma (usa +=)
- [ ] Variable puntosResta (usa -=)
- [ ] Variable puntosMultiplica (usa *=)
- [ ] Variable puntosDivide (usa /=)
- [ ] Variable puntosModulo (usa %=)

### JavaScript - Operador Ternario:
- [ ] Variable edad declarada
- [ ] Variable mensaje (usa ? :)
- [ ] Variable descuento (usa ? :)
- [ ] Variable estado (usa ? :)

### JavaScript - Operador typeof:
- [ ] Variable tipoNumero (usa typeof)
- [ ] Variable tipoTexto (usa typeof)
- [ ] Variable tipoBooleano (usa typeof)
- [ ] Variable tipoUndefined (usa typeof)
- [ ] Variable tipoNull (usa typeof)

---

## 🧪 Validación

### Ejecuta las pruebas con:
```bash
npm test -- tests/ejercicio/2-operadores.test.js
```

### Consejos para depuración:
1. Si un test falla, lee el mensaje de error cuidadosamente
2. Usa `console.log()` para imprimir valores y verificar que sean correctos
3. Abre el archivo HTML en el navegador y revisa la consola (F12)
4. Verifica que los nombres de las variables coincidan exactamente con lo solicitado
5. Asegúrate de usar el operador correcto para cada ejercicio

---

## 📖 Recursos Adicionales

- [MDN: Expresiones y Operadores](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators)
- [MDN: Operadores de Comparación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators#operadores_de_comparaci%C3%B3n)
- [MDN: Operadores Lógicos](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators#operadores_l%C3%B3gicos)
- [MDN: Operador typeof](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/typeof)
- [MDN: Operador Condicional (Ternario)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

---

## 💡 Conceptos Importantes

### Diferencia entre == y ===
- `==` compara valores pero permite conversión de tipos (5 == "5" es `true`)
- `===` compara valores Y tipos, sin conversión (5 === "5" es `false`)
- **Recomendación**: Siempre usa `===` a menos que específicamente necesites conversión de tipos

### Orden de Operaciones
JavaScript sigue un orden de precedencia:
1. Paréntesis `()`
2. Exponenciación `**`
3. Multiplicación, División, Módulo `* / %`
4. Suma, Resta `+ -`
5. Comparaciones `> < >= <=`
6. Igualdad `== ===`
7. AND lógico `&&`
8. OR lógico `||`
9. Ternario `? :`

### Truthy y Falsy
En JavaScript, algunos valores se consideran "falsy" (se evalúan como false):
- `false`, `0`, `""` (string vacío), `null`, `undefined`, `NaN`
- Todos los demás valores son "truthy" (se evalúan como true)

