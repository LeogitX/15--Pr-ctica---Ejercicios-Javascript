# Ejercicio 3: Estructuras de Control (if/else)

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
Aprender a tomar decisiones en el código usando estructuras condicionales como `if`, `else if`, `else` y el operador ternario.

## Instrucciones

Crea los siguientes archivos en la carpeta `src/ejercicio-3/`:
- `condicionales.html`
- `condicionales.js`

### Requisitos del HTML (`condicionales.html`)

Crea un documento HTML básico que:
1. Tenga un título "Ejercicio 3: Estructuras de Control"
2. Incluya un `<div>` con id `"salida"` para mostrar resultados
3. Incluya varios `<div>` con diferentes ids para mostrar los resultados de cada función
4. Enlace el archivo JavaScript `condicionales.js`.
5. Aplicar estilos básicos para mejorar la presentación (por ejemplo, márgenes, colores, fuentes).

![CSS](img/css.png)

### Requisitos del JavaScript (`condicionales.js`)

#### 1. Condicional Simple (if)
Crea una función `verificarEdad` que:
- Reciba un parámetro `edad`
- Si edad >= 18, debe retornar "Eres mayor de edad"
- Si no cumple la condición, no retorna nada (undefined)

#### 2. Condicional if-else
Crea una función `verificarParImpar` que:
- Reciba un parámetro `numero`
- Si el número es par (módulo 2 es 0), retorna "El número es par"
- Si el número es impar, retorna "El número es impar"

#### 3. Condicional if-else if-else
Crea una función `obtenerCalificacion` que:
- Reciba un parámetro `nota` (número entre 0 y 100)
- Si nota >= 90, retorna "A"
- Si nota >= 80, retorna "B"
- Si nota >= 70, retorna "C"
- Si nota >= 60, retorna "D"
- Si nota < 60, retorna "F"

#### 4. Condicionales Anidados
Crea una función `verificarAcceso` que:
- Reciba dos parámetros: `edad` y `tieneTicket` (booleano)
- Si edad >= 18:
  - Si tieneTicket es true, retorna "Acceso permitido"
  - Si tieneTicket es false, retorna "Necesitas un ticket"
- Si edad < 18:
  - Retorna "Eres menor de edad"

#### 5. Operador Ternario Simple
Crea una función `esMayorDeEdad` que:
- Reciba un parámetro `edad`
- Use el operador ternario para retornar "Mayor" si edad >= 18, sino "Menor"

#### 6. Operador Ternario Anidado
Crea una función `clasificarTemperatura` que:
- Reciba un parámetro `temperatura`
- Use operadores ternarios anidados:
  - Si temperatura > 30, retorna "Calor"
  - Si temperatura >= 20, retorna "Templado"
  - Si temperatura < 20, retorna "Frío"

#### 7. Switch Statement
Crea una función `obtenerDiaSemana` que:
- Reciba un parámetro `dia` (número del 1 al 7)
- Use `switch` para retornar el nombre del día:
  - 1: "Lunes"
  - 2: "Martes"
  - 3: "Miércoles"
  - 4: "Jueves"
  - 5: "Viernes"
  - 6: "Sábado"
  - 7: "Domingo"
  - default: "Día inválido"

#### 8. Switch con Múltiples Casos
Crea una función `obtenerEstacion` que:
- Reciba un parámetro `mes` (número del 1 al 12)
- Use `switch` con múltiples casos agrupados:
  - 12, 1, 2: "Invierno"
  - 3, 4, 5: "Primavera"
  - 6, 7, 8: "Verano"
  - 9, 10, 11: "Otoño"
  - default: "Mes inválido"

#### 9. Validación Múltiple
Crea una función `validarUsuario` que:
- Reciba tres parámetros: `nombre`, `edad`, `email`
- Valide que:
  - nombre no esté vacío (use `nombre.length > 0`)
  - edad sea mayor a 0
  - email contenga el símbolo "@" (use `email.includes("@")`)
- Si todas las validaciones pasan, retorna "Usuario válido"
- Si alguna falla, retorna "Datos inválidos"

#### 10. Lógica Compleja
Crea una función `calcularDescuento` que:
- Reciba dos parámetros: `precio` y `esCliente` (booleano)
- Si precio >= 100 AND esCliente es true, retorna 20 (20% de descuento)
- Si precio >= 100 OR esCliente es true, retorna 10 (10% de descuento)
- Si no cumple ninguna, retorna 0 (sin descuento)

## Conceptos Clave

### Estructura if-else
```javascript
if (condicion) {
  // código si es verdadero
} else if (otraCondicion) {
  // código si otraCondicion es verdadera
} else {
  // código si ninguna es verdadera
}
```

### Operador Ternario
```javascript
const resultado = condicion ? valorSiTrue : valorSiFalse;
```

### Switch Statement
```javascript
switch (expresion) {
  case valor1:
    // código
    break;
  case valor2:
    // código
    break;
  default:
    // código por defecto
}
```

### Operadores de Comparación
- `==` igual (con conversión)
- `===` estrictamente igual
- `!=` diferente
- `!==` estrictamente diferente
- `>` mayor que
- `<` menor que
- `>=` mayor o igual
- `<=` menor o igual

### Operadores Lógicos
- `&&` AND (y) - ambas condiciones deben ser verdaderas
- `||` OR (o) - al menos una condición debe ser verdadera
- `!` NOT (no) - invierte el valor booleano

## Validación

Ejecuta las pruebas con:
```bash
npm test 3-condicionales.test.js
```

## Recursos
- [MDN: if...else](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN: Operador Condicional (Ternario)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- [MDN: switch](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch)
