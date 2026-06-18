const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Ejercicio 3: Estructuras de Control (if/else)', () => {
  let htmlContent, jsContent, dom, window, document;
  const htmlPath = path.join(__dirname, '../../src/ejercicio-3/condicionales.html');
  const jsPath = path.join(__dirname, '../../src/ejercicio-3/condicionales.js');

  beforeAll(() => {
    if (!fs.existsSync(htmlPath)) {
      throw new Error(`No se encuentra el archivo ${htmlPath}`);
    }
    if (!fs.existsSync(jsPath)) {
      throw new Error(`No se encuentra el archivo ${jsPath}`);
    }

    htmlContent = fs.readFileSync(htmlPath, 'utf-8');
    jsContent = fs.readFileSync(jsPath, 'utf-8');
  });

  describe('Estructura HTML', () => {
    beforeAll(() => {
      dom = new JSDOM(htmlContent);
      window = dom.window;
      document = window.document;
    });

    test('El HTML debe tener un título apropiado', () => {
      const title = document.querySelector('title');
      expect(title).toBeTruthy();
      expect(title.textContent).toMatch(/ejercicio\s*3|estructuras|control|condicionales/i);
    });

    test('Debe existir un div con id "salida"', () => {
      const salidaDiv = document.querySelector('#salida');
      expect(salidaDiv).toBeTruthy();
    });

    test('Debe enlazar el archivo condicionales.js', () => {
      const scripts = document.querySelectorAll('script');
      const hasCondicionalesJS = Array.from(scripts).some(script => 
        script.src.includes('condicionales.js') || script.getAttribute('src')?.includes('condicionales.js')
      );
      expect(hasCondicionalesJS).toBeTruthy();
    });
  });

  describe('Funciones y Lógica', () => {
    let verificarEdad, verificarParImpar, obtenerCalificacion, verificarAcceso, 
        esMayorDeEdad, clasificarTemperatura, obtenerDiaSemana, obtenerEstacion,
        validarUsuario, calcularDescuento;

    beforeAll(() => {
      // Evaluar el código JavaScript en un contexto aislado
      const script = new Function(jsContent + `
        return {
          verificarEdad: typeof verificarEdad !== 'undefined' ? verificarEdad : null,
          verificarParImpar: typeof verificarParImpar !== 'undefined' ? verificarParImpar : null,
          obtenerCalificacion: typeof obtenerCalificacion !== 'undefined' ? obtenerCalificacion : null,
          verificarAcceso: typeof verificarAcceso !== 'undefined' ? verificarAcceso : null,
          esMayorDeEdad: typeof esMayorDeEdad !== 'undefined' ? esMayorDeEdad : null,
          clasificarTemperatura: typeof clasificarTemperatura !== 'undefined' ? clasificarTemperatura : null,
          obtenerDiaSemana: typeof obtenerDiaSemana !== 'undefined' ? obtenerDiaSemana : null,
          obtenerEstacion: typeof obtenerEstacion !== 'undefined' ? obtenerEstacion : null,
          validarUsuario: typeof validarUsuario !== 'undefined' ? validarUsuario : null,
          calcularDescuento: typeof calcularDescuento !== 'undefined' ? calcularDescuento : null
        };
      `);
      
      const funciones = script();
      verificarEdad = funciones.verificarEdad;
      verificarParImpar = funciones.verificarParImpar;
      obtenerCalificacion = funciones.obtenerCalificacion;
      verificarAcceso = funciones.verificarAcceso;
      esMayorDeEdad = funciones.esMayorDeEdad;
      clasificarTemperatura = funciones.clasificarTemperatura;
      obtenerDiaSemana = funciones.obtenerDiaSemana;
      obtenerEstacion = funciones.obtenerEstacion;
      validarUsuario = funciones.validarUsuario;
      calcularDescuento = funciones.calcularDescuento;
    });

    describe('1. Condicional Simple (if)', () => {
      test('Debe existir la función verificarEdad', () => {
        expect(typeof verificarEdad).toBe('function');
      });

      test('verificarEdad debe retornar el mensaje correcto para mayores de edad', () => {
        expect(verificarEdad(18)).toBe("Eres mayor de edad");
        expect(verificarEdad(25)).toBe("Eres mayor de edad");
      });

      test('verificarEdad debe retornar undefined para menores de edad', () => {
        expect(verificarEdad(17)).toBeUndefined();
        expect(verificarEdad(10)).toBeUndefined();
      });

      test('El código debe usar if sin else', () => {
        const funcStr = jsContent.match(/function\s+verificarEdad[\s\S]*?(?=function|\Z)/)?.[0] || '';
        expect(funcStr).toMatch(/if\s*\(/);
      });
    });

    describe('2. Condicional if-else', () => {
      test('Debe existir la función verificarParImpar', () => {
        expect(typeof verificarParImpar).toBe('function');
      });

      test('verificarParImpar debe identificar números pares', () => {
        expect(verificarParImpar(4)).toBe("El número es par");
        expect(verificarParImpar(10)).toBe("El número es par");
        expect(verificarParImpar(0)).toBe("El número es par");
      });

      test('verificarParImpar debe identificar números impares', () => {
        expect(verificarParImpar(3)).toBe("El número es impar");
        expect(verificarParImpar(7)).toBe("El número es impar");
      });

      test('El código debe usar if-else', () => {
        const funcStr = jsContent.match(/function\s+verificarParImpar[\s\S]*?(?=function|\Z)/)?.[0] || '';
        expect(funcStr).toMatch(/if\s*\(/);
        expect(funcStr).toMatch(/else/);
      });
    });

    describe('3. Condicional if-else if-else', () => {
      test('Debe existir la función obtenerCalificacion', () => {
        expect(typeof obtenerCalificacion).toBe('function');
      });

      test('obtenerCalificacion debe retornar "A" para notas >= 90', () => {
        expect(obtenerCalificacion(95)).toBe("A");
        expect(obtenerCalificacion(90)).toBe("A");
      });

      test('obtenerCalificacion debe retornar "B" para notas >= 80', () => {
        expect(obtenerCalificacion(85)).toBe("B");
        expect(obtenerCalificacion(80)).toBe("B");
      });

      test('obtenerCalificacion debe retornar "C" para notas >= 70', () => {
        expect(obtenerCalificacion(75)).toBe("C");
        expect(obtenerCalificacion(70)).toBe("C");
      });

      test('obtenerCalificacion debe retornar "D" para notas >= 60', () => {
        expect(obtenerCalificacion(65)).toBe("D");
        expect(obtenerCalificacion(60)).toBe("D");
      });

      test('obtenerCalificacion debe retornar "F" para notas < 60', () => {
        expect(obtenerCalificacion(59)).toBe("F");
        expect(obtenerCalificacion(30)).toBe("F");
      });

      test('El código debe usar if-else if-else', () => {
        const funcStr = jsContent.match(/function\s+obtenerCalificacion[\s\S]*?(?=function|\Z)/)?.[0] || '';
        expect(funcStr).toMatch(/if\s*\(/);
        expect(funcStr).toMatch(/else\s+if/);
      });
    });

    describe('4. Condicionales Anidados', () => {
      test('Debe existir la función verificarAcceso', () => {
        expect(typeof verificarAcceso).toBe('function');
      });

      test('verificarAcceso debe permitir acceso a mayores con ticket', () => {
        expect(verificarAcceso(18, true)).toBe("Acceso permitido");
        expect(verificarAcceso(25, true)).toBe("Acceso permitido");
      });

      test('verificarAcceso debe requerir ticket a mayores sin ticket', () => {
        expect(verificarAcceso(18, false)).toBe("Necesitas un ticket");
        expect(verificarAcceso(30, false)).toBe("Necesitas un ticket");
      });

      test('verificarAcceso debe negar acceso a menores', () => {
        expect(verificarAcceso(17, true)).toBe("Eres menor de edad");
        expect(verificarAcceso(15, false)).toBe("Eres menor de edad");
      });
    });

    describe('5. Operador Ternario Simple', () => {
      test('Debe existir la función esMayorDeEdad', () => {
        expect(typeof esMayorDeEdad).toBe('function');
      });

      test('esMayorDeEdad debe usar operador ternario', () => {
        const funcStr = jsContent.match(/function\s+esMayorDeEdad[\s\S]*?(?=function|\Z)/)?.[0] || '';
        expect(funcStr).toMatch(/\?.*:/);
      });

      test('esMayorDeEdad debe retornar "Mayor" para edad >= 18', () => {
        expect(esMayorDeEdad(18)).toBe("Mayor");
        expect(esMayorDeEdad(25)).toBe("Mayor");
      });

      test('esMayorDeEdad debe retornar "Menor" para edad < 18', () => {
        expect(esMayorDeEdad(17)).toBe("Menor");
        expect(esMayorDeEdad(10)).toBe("Menor");
      });
    });

    describe('6. Operador Ternario Anidado', () => {
      test('Debe existir la función clasificarTemperatura', () => {
        expect(typeof clasificarTemperatura).toBe('function');
      });

      test('clasificarTemperatura debe retornar "Calor" para temp > 30', () => {
        expect(clasificarTemperatura(35)).toBe("Calor");
        expect(clasificarTemperatura(31)).toBe("Calor");
      });

      test('clasificarTemperatura debe retornar "Templado" para temp >= 20', () => {
        expect(clasificarTemperatura(25)).toBe("Templado");
        expect(clasificarTemperatura(20)).toBe("Templado");
      });

      test('clasificarTemperatura debe retornar "Frío" para temp < 20', () => {
        expect(clasificarTemperatura(15)).toBe("Frío");
        expect(clasificarTemperatura(10)).toBe("Frío");
      });
    });

    describe('7. Switch Statement', () => {
      test('Debe existir la función obtenerDiaSemana', () => {
        expect(typeof obtenerDiaSemana).toBe('function');
      });

      test('El código debe usar switch', () => {
        const funcStr = jsContent.match(/function\s+obtenerDiaSemana[\s\S]*?(?=function|\Z)/)?.[0] || '';
        expect(funcStr).toMatch(/switch\s*\(/);
      });

      test('obtenerDiaSemana debe retornar los nombres correctos', () => {
        expect(obtenerDiaSemana(1)).toBe("Lunes");
        expect(obtenerDiaSemana(2)).toBe("Martes");
        expect(obtenerDiaSemana(3)).toBe("Miércoles");
        expect(obtenerDiaSemana(4)).toBe("Jueves");
        expect(obtenerDiaSemana(5)).toBe("Viernes");
        expect(obtenerDiaSemana(6)).toBe("Sábado");
        expect(obtenerDiaSemana(7)).toBe("Domingo");
      });

      test('obtenerDiaSemana debe retornar mensaje para día inválido', () => {
        expect(obtenerDiaSemana(8)).toBe("Día inválido");
        expect(obtenerDiaSemana(0)).toBe("Día inválido");
      });
    });

    describe('8. Switch con Múltiples Casos', () => {
      test('Debe existir la función obtenerEstacion', () => {
        expect(typeof obtenerEstacion).toBe('function');
      });

      test('obtenerEstacion debe retornar "Invierno" para meses 12, 1, 2', () => {
        expect(obtenerEstacion(12)).toBe("Invierno");
        expect(obtenerEstacion(1)).toBe("Invierno");
        expect(obtenerEstacion(2)).toBe("Invierno");
      });

      test('obtenerEstacion debe retornar "Primavera" para meses 3, 4, 5', () => {
        expect(obtenerEstacion(3)).toBe("Primavera");
        expect(obtenerEstacion(4)).toBe("Primavera");
        expect(obtenerEstacion(5)).toBe("Primavera");
      });

      test('obtenerEstacion debe retornar "Verano" para meses 6, 7, 8', () => {
        expect(obtenerEstacion(6)).toBe("Verano");
        expect(obtenerEstacion(7)).toBe("Verano");
        expect(obtenerEstacion(8)).toBe("Verano");
      });

      test('obtenerEstacion debe retornar "Otoño" para meses 9, 10, 11', () => {
        expect(obtenerEstacion(9)).toBe("Otoño");
        expect(obtenerEstacion(10)).toBe("Otoño");
        expect(obtenerEstacion(11)).toBe("Otoño");
      });

      test('obtenerEstacion debe retornar mensaje para mes inválido', () => {
        expect(obtenerEstacion(13)).toBe("Mes inválido");
        expect(obtenerEstacion(0)).toBe("Mes inválido");
      });
    });

    describe('9. Validación Múltiple', () => {
      test('Debe existir la función validarUsuario', () => {
        expect(typeof validarUsuario).toBe('function');
      });

      test('validarUsuario debe retornar "Usuario válido" para datos correctos', () => {
        expect(validarUsuario("Juan", 25, "juan@email.com")).toBe("Usuario válido");
      });

      test('validarUsuario debe retornar "Datos inválidos" si falta el nombre', () => {
        expect(validarUsuario("", 25, "juan@email.com")).toBe("Datos inválidos");
      });

      test('validarUsuario debe retornar "Datos inválidos" si edad <= 0', () => {
        expect(validarUsuario("Juan", 0, "juan@email.com")).toBe("Datos inválidos");
        expect(validarUsuario("Juan", -5, "juan@email.com")).toBe("Datos inválidos");
      });

      test('validarUsuario debe retornar "Datos inválidos" si email no tiene @', () => {
        expect(validarUsuario("Juan", 25, "juanemail.com")).toBe("Datos inválidos");
      });
    });

    describe('10. Lógica Compleja', () => {
      test('Debe existir la función calcularDescuento', () => {
        expect(typeof calcularDescuento).toBe('function');
      });

      test('calcularDescuento debe retornar 20 si precio >= 100 Y es cliente', () => {
        expect(calcularDescuento(100, true)).toBe(20);
        expect(calcularDescuento(150, true)).toBe(20);
      });

      test('calcularDescuento debe retornar 10 si precio >= 100 O es cliente (pero no ambos)', () => {
        expect(calcularDescuento(100, false)).toBe(10);
        expect(calcularDescuento(50, true)).toBe(10);
      });

      test('calcularDescuento debe retornar 0 si no cumple ninguna condición', () => {
        expect(calcularDescuento(50, false)).toBe(0);
        expect(calcularDescuento(30, false)).toBe(0);
      });
    });
  });
});
