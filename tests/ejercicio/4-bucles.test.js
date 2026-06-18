const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Ejercicio 4: Bucles y Ciclos', () => {
  let htmlContent, jsContent, dom, window, document;
  const htmlPath = path.join(__dirname, '../../src/ejercicio-4/bucles.html');
  const jsPath = path.join(__dirname, '../../src/ejercicio-4/bucles.js');

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
      expect(title.textContent).toMatch(/ejercicio\s*4|bucles|ciclos/i);
    });

    test('Debe existir un div con id "resultados"', () => {
      const resultadosDiv = document.querySelector('#resultados');
      expect(resultadosDiv).toBeTruthy();
    });

    test('Debe enlazar el archivo bucles.js', () => {
      const scripts = document.querySelectorAll('script');
      const hasBuclesJS = Array.from(scripts).some(script => 
        script.src.includes('bucles.js') || script.getAttribute('src')?.includes('bucles.js')
      );
      expect(hasBuclesJS).toBeTruthy();
    });
  });

  describe('Funciones de Bucles', () => {
    let contarHasta, numerosPares, cuentaRegresiva, sumarHasta, duplicarHasta,
        encontrarPrimerMultiplo, numerosImpares, tablaMultiplicar, sumarArray,
        filtrarMayores, fizzBuzz, esPalindromo;

    beforeAll(() => {
      const script = new Function(jsContent + `
        return {
          contarHasta: typeof contarHasta !== 'undefined' ? contarHasta : null,
          numerosPares: typeof numerosPares !== 'undefined' ? numerosPares : null,
          cuentaRegresiva: typeof cuentaRegresiva !== 'undefined' ? cuentaRegresiva : null,
          sumarHasta: typeof sumarHasta !== 'undefined' ? sumarHasta : null,
          duplicarHasta: typeof duplicarHasta !== 'undefined' ? duplicarHasta : null,
          encontrarPrimerMultiplo: typeof encontrarPrimerMultiplo !== 'undefined' ? encontrarPrimerMultiplo : null,
          numerosImpares: typeof numerosImpares !== 'undefined' ? numerosImpares : null,
          tablaMultiplicar: typeof tablaMultiplicar !== 'undefined' ? tablaMultiplicar : null,
          sumarArray: typeof sumarArray !== 'undefined' ? sumarArray : null,
          filtrarMayores: typeof filtrarMayores !== 'undefined' ? filtrarMayores : null,
          fizzBuzz: typeof fizzBuzz !== 'undefined' ? fizzBuzz : null,
          esPalindromo: typeof esPalindromo !== 'undefined' ? esPalindromo : null
        };
      `);
      
      const funciones = script();
      contarHasta = funciones.contarHasta;
      numerosPares = funciones.numerosPares;
      cuentaRegresiva = funciones.cuentaRegresiva;
      sumarHasta = funciones.sumarHasta;
      duplicarHasta = funciones.duplicarHasta;
      encontrarPrimerMultiplo = funciones.encontrarPrimerMultiplo;
      numerosImpares = funciones.numerosImpares;
      tablaMultiplicar = funciones.tablaMultiplicar;
      sumarArray = funciones.sumarArray;
      filtrarMayores = funciones.filtrarMayores;
      fizzBuzz = funciones.fizzBuzz;
      esPalindromo = funciones.esPalindromo;
    });

    describe('1. Bucle For Básico', () => {
      test('Debe existir la función contarHasta', () => {
        expect(typeof contarHasta).toBe('function');
      });

      test('contarHasta debe usar bucle for', () => {
        const funcStr = jsContent.match(/function\s+contarHasta[\s\S]*?(?=function|\Z)/)?.[0] || '';
        expect(funcStr).toMatch(/for\s*\(/);
      });

      test('contarHasta(5) debe retornar [1, 2, 3, 4, 5]', () => {
        expect(contarHasta(5)).toEqual([1, 2, 3, 4, 5]);
      });

      test('contarHasta(10) debe retornar array con 10 elementos', () => {
        const resultado = contarHasta(10);
        expect(resultado.length).toBe(10);
        expect(resultado[0]).toBe(1);
        expect(resultado[9]).toBe(10);
      });
    });

    describe('2. Bucle For con Paso', () => {
      test('Debe existir la función numerosPares', () => {
        expect(typeof numerosPares).toBe('function');
      });

      test('numerosPares(10) debe retornar [0, 2, 4, 6, 8, 10]', () => {
        expect(numerosPares(10)).toEqual([0, 2, 4, 6, 8, 10]);
      });

      test('numerosPares debe retornar solo números pares', () => {
        const resultado = numerosPares(20);
        resultado.forEach(num => {
          expect(num % 2).toBe(0);
        });
      });
    });

    describe('3. Bucle For Inverso', () => {
      test('Debe existir la función cuentaRegresiva', () => {
        expect(typeof cuentaRegresiva).toBe('function');
      });

      test('cuentaRegresiva(5) debe retornar [5, 4, 3, 2, 1]', () => {
        expect(cuentaRegresiva(5)).toEqual([5, 4, 3, 2, 1]);
      });

      test('cuentaRegresiva debe contar en orden descendente', () => {
        const resultado = cuentaRegresiva(10);
        expect(resultado[0]).toBe(10);
        expect(resultado[9]).toBe(1);
        expect(resultado.length).toBe(10);
      });
    });

    describe('4. Bucle While', () => {
      test('Debe existir la función sumarHasta', () => {
        expect(typeof sumarHasta).toBe('function');
      });

      test('El código debe usar while', () => {
        const funcStr = jsContent.match(/function\s+sumarHasta[\s\S]*?(?=function|\Z)/)?.[0] || '';
        expect(funcStr).toMatch(/while\s*\(/);
      });

      test('sumarHasta(10) debe retornar 10', () => {
        expect(sumarHasta(10)).toBe(10);
      });

      test('sumarHasta(15) debe retornar 15', () => {
        expect(sumarHasta(15)).toBe(15);
      });
    });

    describe('5. Bucle Do-While', () => {
      test('Debe existir la función duplicarHasta', () => {
        expect(typeof duplicarHasta).toBe('function');
      });

      test('El código debe usar do-while', () => {
        const funcStr = jsContent.match(/function\s+duplicarHasta[\s\S]*?(?=function|\Z)/)?.[0] || '';
        expect(funcStr).toMatch(/do\s*{[\s\S]*?}\s*while/);
      });

      test('duplicarHasta(3, 50) debe duplicar hasta llegar o superar 50', () => {
        const resultado = duplicarHasta(3, 50);
        expect(resultado).toBeGreaterThanOrEqual(50);
        expect(resultado / 2).toBeLessThan(50);
      });

      test('duplicarHasta(5, 100) debe funcionar correctamente', () => {
        const resultado = duplicarHasta(5, 100);
        expect(resultado).toBeGreaterThanOrEqual(100);
      });
    });

    describe('6. Break en Bucles', () => {
      test('Debe existir la función encontrarPrimerMultiplo', () => {
        expect(typeof encontrarPrimerMultiplo).toBe('function');
      });

      test('El código debe usar break', () => {
        const funcStr = jsContent.match(/function\s+encontrarPrimerMultiplo[\s\S]*?(?=function|\Z)/)?.[0] || '';
        expect(funcStr).toMatch(/break/);
      });

      test('encontrarPrimerMultiplo(25, 7) debe retornar 28', () => {
        expect(encontrarPrimerMultiplo(25, 7)).toBe(28);
      });

      test('encontrarPrimerMultiplo(30, 10) debe retornar 40', () => {
        expect(encontrarPrimerMultiplo(30, 10)).toBe(40);
      });
    });

    describe('7. Continue en Bucles', () => {
      test('Debe existir la función numerosImpares', () => {
        expect(typeof numerosImpares).toBe('function');
      });

      test('El código debe usar continue', () => {
        const funcStr = jsContent.match(/function\s+numerosImpares[\s\S]*?(?=function|\Z)/)?.[0] || '';
        expect(funcStr).toMatch(/continue/);
      });

      test('numerosImpares(10) debe retornar [1, 3, 5, 7, 9]', () => {
        expect(numerosImpares(10)).toEqual([1, 3, 5, 7, 9]);
      });

      test('numerosImpares debe retornar solo números impares', () => {
        const resultado = numerosImpares(20);
        resultado.forEach(num => {
          expect(num % 2).toBe(1);
        });
      });
    });

    describe('8. Bucles Anidados', () => {
      test('Debe existir la función tablaMultiplicar', () => {
        expect(typeof tablaMultiplicar).toBe('function');
      });

      test('tablaMultiplicar(3) debe retornar tabla 3x3', () => {
        const resultado = tablaMultiplicar(3);
        expect(resultado).toEqual([
          [1, 2, 3],
          [2, 4, 6],
          [3, 6, 9]
        ]);
      });

      test('tablaMultiplicar debe generar multiplicaciones correctas', () => {
        const resultado = tablaMultiplicar(5);
        expect(resultado.length).toBe(5);
        expect(resultado[0].length).toBe(5);
        expect(resultado[2][3]).toBe(12); // 3 * 4
      });
    });

    describe('9. Recorrer Arrays', () => {
      test('Debe existir la función sumarArray', () => {
        expect(typeof sumarArray).toBe('function');
      });

      test('sumarArray([1, 2, 3, 4, 5]) debe retornar 15', () => {
        expect(sumarArray([1, 2, 3, 4, 5])).toBe(15);
      });

      test('sumarArray([10, 20, 30]) debe retornar 60', () => {
        expect(sumarArray([10, 20, 30])).toBe(60);
      });

      test('sumarArray([]) debe retornar 0', () => {
        expect(sumarArray([])).toBe(0);
      });
    });

    describe('10. Filtrar con Bucles', () => {
      test('Debe existir la función filtrarMayores', () => {
        expect(typeof filtrarMayores).toBe('function');
      });

      test('filtrarMayores([1, 5, 10, 15, 3], 7) debe retornar [10, 15]', () => {
        expect(filtrarMayores([1, 5, 10, 15, 3], 7)).toEqual([10, 15]);
      });

      test('filtrarMayores debe retornar solo números mayores al mínimo', () => {
        const resultado = filtrarMayores([5, 10, 15, 20, 25], 12);
        expect(resultado).toEqual([15, 20, 25]);
      });
    });

    describe('11. FizzBuzz', () => {
      test('Debe existir la función fizzBuzz', () => {
        expect(typeof fizzBuzz).toBe('function');
      });

      test('fizzBuzz(15) debe retornar la secuencia correcta', () => {
        const resultado = fizzBuzz(15);
        expect(resultado[2]).toBe("Fizz");    // 3
        expect(resultado[4]).toBe("Buzz");    // 5
        expect(resultado[14]).toBe("FizzBuzz"); // 15
        expect(resultado[0]).toBe(1);
        expect(resultado[1]).toBe(2);
      });

      test('fizzBuzz debe manejar múltiplos de 3', () => {
        const resultado = fizzBuzz(10);
        expect(resultado[2]).toBe("Fizz");
        expect(resultado[5]).toBe("Fizz");
        expect(resultado[8]).toBe("Fizz");
      });

      test('fizzBuzz debe manejar múltiplos de 5', () => {
        const resultado = fizzBuzz(10);
        expect(resultado[4]).toBe("Buzz");
        expect(resultado[9]).toBe("Buzz");
      });
    });

    describe('12. Palíndromo', () => {
      test('Debe existir la función esPalindromo', () => {
        expect(typeof esPalindromo).toBe('function');
      });

      test('esPalindromo("anita lava la tina") debe retornar true', () => {
        expect(esPalindromo("anita lava la tina")).toBe(true);
      });

      test('esPalindromo("oso") debe retornar true', () => {
        expect(esPalindromo("oso")).toBe(true);
      });

      test('esPalindromo("hola") debe retornar false', () => {
        expect(esPalindromo("hola")).toBe(false);
      });

      test('esPalindromo debe ignorar mayúsculas', () => {
        expect(esPalindromo("Oso")).toBe(true);
        expect(esPalindromo("Ana")).toBe(true);
      });
    });
  });
});
