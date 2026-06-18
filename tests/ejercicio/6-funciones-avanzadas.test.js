const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Ejercicio 6: Funciones Avanzadas', () => {
  let htmlContent, jsContent, dom, window, document;
  const htmlPath = path.join(__dirname, '../../src/ejercicio-6/funciones-avanzadas.html');
  const jsPath = path.join(__dirname, '../../src/ejercicio-6/funciones-avanzadas.js');

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
      expect(title.textContent).toMatch(/ejercicio\s*6|funciones|avanzadas/i);
    });

    test('Debe existir un div con id "contenido"', () => {
      const contenidoDiv = document.querySelector('#contenido');
      expect(contenidoDiv).toBeTruthy();
    });

    test('Debe enlazar el archivo funciones-avanzadas.js', () => {
      const scripts = document.querySelectorAll('script');
      const hasFuncionesJS = Array.from(scripts).some(script => 
        script.src.includes('funciones-avanzadas.js') || script.getAttribute('src')?.includes('funciones-avanzadas.js')
      );
      expect(hasFuncionesJS).toBeTruthy();
    });
  });

  describe('Funciones Avanzadas', () => {
    let multiplicarPorDos, cuadrado, obtenerFechaActual, calcularArea,
        procesarNumero, procesarArray, doblarNumeros, filtrarMayoresDeEdad,
        sumarEdades, encontrarPorNombre, imprimirNombres, procesarNumeros,
        crearContador, operacionMatematica, tieneAprobados, todosAprobados;

    beforeAll(() => {
      const script = new Function(jsContent + `
        return {
          multiplicarPorDos: typeof multiplicarPorDos !== 'undefined' ? multiplicarPorDos : null,
          cuadrado: typeof cuadrado !== 'undefined' ? cuadrado : null,
          obtenerFechaActual: typeof obtenerFechaActual !== 'undefined' ? obtenerFechaActual : null,
          calcularArea: typeof calcularArea !== 'undefined' ? calcularArea : null,
          procesarNumero: typeof procesarNumero !== 'undefined' ? procesarNumero : null,
          procesarArray: typeof procesarArray !== 'undefined' ? procesarArray : null,
          doblarNumeros: typeof doblarNumeros !== 'undefined' ? doblarNumeros : null,
          filtrarMayoresDeEdad: typeof filtrarMayoresDeEdad !== 'undefined' ? filtrarMayoresDeEdad : null,
          sumarEdades: typeof sumarEdades !== 'undefined' ? sumarEdades : null,
          encontrarPorNombre: typeof encontrarPorNombre !== 'undefined' ? encontrarPorNombre : null,
          imprimirNombres: typeof imprimirNombres !== 'undefined' ? imprimirNombres : null,
          procesarNumeros: typeof procesarNumeros !== 'undefined' ? procesarNumeros : null,
          crearContador: typeof crearContador !== 'undefined' ? crearContador : null,
          operacionMatematica: typeof operacionMatematica !== 'undefined' ? operacionMatematica : null,
          tieneAprobados: typeof tieneAprobados !== 'undefined' ? tieneAprobados : null,
          todosAprobados: typeof todosAprobados !== 'undefined' ? todosAprobados : null
        };
      `);
      
      const funciones = script();
      multiplicarPorDos = funciones.multiplicarPorDos;
      cuadrado = funciones.cuadrado;
      obtenerFechaActual = funciones.obtenerFechaActual;
      calcularArea = funciones.calcularArea;
      procesarNumero = funciones.procesarNumero;
      procesarArray = funciones.procesarArray;
      doblarNumeros = funciones.doblarNumeros;
      filtrarMayoresDeEdad = funciones.filtrarMayoresDeEdad;
      sumarEdades = funciones.sumarEdades;
      encontrarPorNombre = funciones.encontrarPorNombre;
      imprimirNombres = funciones.imprimirNombres;
      procesarNumeros = funciones.procesarNumeros;
      crearContador = funciones.crearContador;
      operacionMatematica = funciones.operacionMatematica;
      tieneAprobados = funciones.tieneAprobados;
      todosAprobados = funciones.todosAprobados;
    });

    describe('1. Arrow Function Básica', () => {
      test('Debe existir la función multiplicarPorDos', () => {
        expect(typeof multiplicarPorDos).toBe('function');
      });

      test('El código debe usar sintaxis de arrow function', () => {
        expect(jsContent).toMatch(/multiplicarPorDos\s*=.*=>/);
      });

      test('multiplicarPorDos debe multiplicar correctamente', () => {
        expect(multiplicarPorDos(5)).toBe(10);
        expect(multiplicarPorDos(8)).toBe(16);
      });
    });

    describe('2. Arrow Function con Parámetro Implícito', () => {
      test('Debe existir la función cuadrado', () => {
        expect(typeof cuadrado).toBe('function');
      });

      test('El código debe usar arrow function con return implícito', () => {
        const match = jsContent.match(/cuadrado\s*=\s*(\w+|\([^)]*\))\s*=>\s*(?!{)/);
        expect(match).toBeTruthy();
      });

      test('cuadrado debe calcular correctamente', () => {
        expect(cuadrado(5)).toBe(25);
        expect(cuadrado(10)).toBe(100);
      });
    });

    describe('3. Arrow Function sin Parámetros', () => {
      test('Debe existir la función obtenerFechaActual', () => {
        expect(typeof obtenerFechaActual).toBe('function');
      });

      test('obtenerFechaActual debe retornar un objeto Date', () => {
        const fecha = obtenerFechaActual();
        expect(fecha instanceof Date).toBe(true);
      });
    });

    describe('4. Arrow Function con Múltiples Parámetros', () => {
      test('Debe existir la función calcularArea', () => {
        expect(typeof calcularArea).toBe('function');
      });

      test('calcularArea debe calcular correctamente', () => {
        expect(calcularArea(5, 10)).toBe(50);
        expect(calcularArea(3, 7)).toBe(21);
      });
    });

    describe('5. Callback Simple', () => {
      test('Debe existir la función procesarNumero', () => {
        expect(typeof procesarNumero).toBe('function');
      });

      test('procesarNumero debe usar el callback', () => {
        expect(procesarNumero(5, x => x * 2)).toBe(10);
        expect(procesarNumero(10, x => x + 5)).toBe(15);
      });
    });

    describe('6. Callback con Array', () => {
      test('Debe existir la función procesarArray', () => {
        expect(typeof procesarArray).toBe('function');
      });

      test('procesarArray debe aplicar callback a cada elemento', () => {
        expect(procesarArray([1, 2, 3], x => x * 2)).toEqual([2, 4, 6]);
        expect(procesarArray([5, 10], x => x + 1)).toEqual([6, 11]);
      });
    });

    describe('7. Método map()', () => {
      test('Debe existir la función doblarNumeros', () => {
        expect(typeof doblarNumeros).toBe('function');
      });

      test('El código debe usar map()', () => {
        const funcStr = jsContent.match(/(?:function|const|let|var)\s+doblarNumeros[\s\S]*?(?=(?:function|const|let|var)\s+\w+|$)/)?.[0] || '';
        expect(funcStr).toMatch(/\.map\s*\(/);
      });

      test('doblarNumeros debe doblar cada número', () => {
        expect(doblarNumeros([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
        expect(doblarNumeros([5, 10, 15])).toEqual([10, 20, 30]);
      });
    });

    describe('8. Método filter()', () => {
      test('Debe existir la función filtrarMayoresDeEdad', () => {
        expect(typeof filtrarMayoresDeEdad).toBe('function');
      });

      test('El código debe usar filter()', () => {
        const funcStr = jsContent.match(/(?:function|const|let|var)\s+filtrarMayoresDeEdad[\s\S]*?(?=(?:function|const|let|var)\s+\w+|$)/)?.[0] || '';
        expect(funcStr).toMatch(/\.filter\s*\(/);
      });

      test('filtrarMayoresDeEdad debe filtrar correctamente', () => {
        const personas = [{edad: 15}, {edad: 20}, {edad: 17}, {edad: 25}];
        const resultado = filtrarMayoresDeEdad(personas);
        expect(resultado).toEqual([{edad: 20}, {edad: 25}]);
      });
    });

    describe('9. Método reduce()', () => {
      test('Debe existir la función sumarEdades', () => {
        expect(typeof sumarEdades).toBe('function');
      });

      test('El código debe usar reduce()', () => {
        const funcStr = jsContent.match(/(?:function|const|let|var)\s+sumarEdades[\s\S]*?(?=(?:function|const|let|var)\s+\w+|$)/)?.[0] || '';
        expect(funcStr).toMatch(/\.reduce\s*\(/);
      });

      test('sumarEdades debe sumar correctamente', () => {
        const personas = [{edad: 20}, {edad: 30}, {edad: 25}];
        expect(sumarEdades(personas)).toBe(75);
      });
    });

    describe('10. Método find()', () => {
      test('Debe existir la función encontrarPorNombre', () => {
        expect(typeof encontrarPorNombre).toBe('function');
      });

      test('El código debe usar find()', () => {
        const funcStr = jsContent.match(/(?:function|const|let|var)\s+encontrarPorNombre[\s\S]*?(?=(?:function|const|let|var)\s+\w+|$)/)?.[0] || '';
        expect(funcStr).toMatch(/\.find\s*\(/);
      });

      test('encontrarPorNombre debe encontrar la persona correcta', () => {
        const personas = [{nombre: "Ana"}, {nombre: "Juan"}, {nombre: "María"}];
        expect(encontrarPorNombre(personas, "Juan")).toEqual({nombre: "Juan"});
      });

      test('encontrarPorNombre debe retornar undefined si no encuentra', () => {
        const personas = [{nombre: "Ana"}, {nombre: "Juan"}];
        expect(encontrarPorNombre(personas, "Pedro")).toBeUndefined();
      });
    });

    describe('11. Método forEach()', () => {
      test('Debe existir la función imprimirNombres', () => {
        expect(typeof imprimirNombres).toBe('function');
      });

      test('El código debe usar forEach()', () => {
        const funcStr = jsContent.match(/(?:function|const|let|var)\s+imprimirNombres[\s\S]*?(?=(?:function|const|let|var)\s+\w+|$)/)?.[0] || '';
        expect(funcStr).toMatch(/\.forEach\s*\(/);
      });

      test('imprimirNombres debe retornar string con nombres separados por comas', () => {
        const resultado = imprimirNombres(["Ana", "Juan", "María"]);
        expect(resultado).toContain("Ana");
        expect(resultado).toContain("Juan");
        expect(resultado).toContain("María");
        expect(resultado).toMatch(/,/);
      });
    });

    describe('12. Encadenamiento de Métodos', () => {
      test('Debe existir la función procesarNumeros', () => {
        expect(typeof procesarNumeros).toBe('function');
      });

      test('El código debe encadenar métodos', () => {
        const funcStr = jsContent.match(/(?:function|const|let|var)\s+procesarNumeros[\s\S]*?(?=(?:function|const|let|var)\s+\w+|$)/)?.[0] || '';
        const tieneEncadenamiento = (funcStr.match(/\./g) || []).length >= 2;
        expect(tieneEncadenamiento).toBe(true);
      });

      test('procesarNumeros debe filtrar pares, doblar y sumar', () => {
        expect(procesarNumeros([1, 2, 3, 4, 5, 6])).toBe(24);
        expect(procesarNumeros([2, 4, 6])).toBe(24);
      });
    });

    describe('13. Closure', () => {
      test('Debe existir la función crearContador', () => {
        expect(typeof crearContador).toBe('function');
      });

      test('crearContador debe retornar un objeto con métodos', () => {
        const contador = crearContador();
        expect(typeof contador.incrementar).toBe('function');
        expect(typeof contador.obtenerValor).toBe('function');
      });

      test('El closure debe mantener el estado', () => {
        const contador = crearContador();
        expect(contador.incrementar()).toBe(1);
        expect(contador.incrementar()).toBe(2);
        expect(contador.obtenerValor()).toBe(2);
      });

      test('Múltiples instancias deben ser independientes', () => {
        const contador1 = crearContador();
        const contador2 = crearContador();
        contador1.incrementar();
        contador1.incrementar();
        contador2.incrementar();
        expect(contador1.obtenerValor()).toBe(2);
        expect(contador2.obtenerValor()).toBe(1);
      });
    });

    describe('14. Función de Orden Superior con Múltiples Callbacks', () => {
      test('Debe existir la función operacionMatematica', () => {
        expect(typeof operacionMatematica).toBe('function');
      });

      test('operacionMatematica debe funcionar con diferentes callbacks', () => {
        expect(operacionMatematica(10, 5, (x, y) => x + y)).toBe(15);
        expect(operacionMatematica(10, 5, (x, y) => x - y)).toBe(5);
        expect(operacionMatematica(10, 5, (x, y) => x * y)).toBe(50);
      });
    });

    describe('15. Método some() y every()', () => {
      test('Debe existir la función tieneAprobados', () => {
        expect(typeof tieneAprobados).toBe('function');
      });

      test('El código de tieneAprobados debe usar some()', () => {
        const funcStr = jsContent.match(/(?:function|const|let|var)\s+tieneAprobados[\s\S]*?(?=(?:function|const|let|var)\s+\w+|$)/)?.[0] || '';
        expect(funcStr).toMatch(/\.some\s*\(/);
      });

      test('tieneAprobados debe verificar correctamente', () => {
        expect(tieneAprobados([50, 70, 55])).toBe(true);
        expect(tieneAprobados([40, 50, 55])).toBe(false);
      });

      test('Debe existir la función todosAprobados', () => {
        expect(typeof todosAprobados).toBe('function');
      });

      test('El código de todosAprobados debe usar every()', () => {
        const funcStr = jsContent.match(/(?:function|const|let|var)\s+todosAprobados[\s\S]*?(?=(?:function|const|let|var)\s+\w+|$)/)?.[0] || '';
        expect(funcStr).toMatch(/\.every\s*\(/);
      });

      test('todosAprobados debe verificar correctamente', () => {
        expect(todosAprobados([60, 70, 80])).toBe(true);
        expect(todosAprobados([60, 55, 70])).toBe(false);
      });
    });
  });
});
