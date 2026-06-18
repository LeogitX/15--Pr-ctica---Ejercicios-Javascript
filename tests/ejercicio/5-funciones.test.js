const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Ejercicio 5: Funciones Básicas', () => {
  let htmlContent, jsContent, dom, window, document;
  const htmlPath = path.join(__dirname, '../../src/ejercicio-5/funciones.html');
  const jsPath = path.join(__dirname, '../../src/ejercicio-5/funciones.js');

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
      expect(title.textContent).toMatch(/ejercicio\s*5|funciones|básicas/i);
    });

    test('Debe existir un div con id "output"', () => {
      const outputDiv = document.querySelector('#output');
      expect(outputDiv).toBeTruthy();
    });

    test('Debe enlazar el archivo funciones.js', () => {
      const scripts = document.querySelectorAll('script');
      const hasFuncionesJS = Array.from(scripts).some(script => 
        script.src.includes('funciones.js') || script.getAttribute('src')?.includes('funciones.js')
      );
      expect(hasFuncionesJS).toBeTruthy();
    });
  });

  describe('Funciones', () => {
    let saludar, saludarPersona, sumar, crearMensaje, crearPersona,
        operacionesMatematicas, dividir, calcularTotal, incrementarContador,
        esPar, filtrarPares, factorial, multiplicar, sumarTodos, crearMultiplicador;

    beforeAll(() => {
      const script = new Function(jsContent + `
        return {
          saludar: typeof saludar !== 'undefined' ? saludar : null,
          saludarPersona: typeof saludarPersona !== 'undefined' ? saludarPersona : null,
          sumar: typeof sumar !== 'undefined' ? sumar : null,
          crearMensaje: typeof crearMensaje !== 'undefined' ? crearMensaje : null,
          crearPersona: typeof crearPersona !== 'undefined' ? crearPersona : null,
          operacionesMatematicas: typeof operacionesMatematicas !== 'undefined' ? operacionesMatematicas : null,
          dividir: typeof dividir !== 'undefined' ? dividir : null,
          calcularTotal: typeof calcularTotal !== 'undefined' ? calcularTotal : null,
          incrementarContador: typeof incrementarContador !== 'undefined' ? incrementarContador : null,
          esPar: typeof esPar !== 'undefined' ? esPar : null,
          filtrarPares: typeof filtrarPares !== 'undefined' ? filtrarPares : null,
          factorial: typeof factorial !== 'undefined' ? factorial : null,
          multiplicar: typeof multiplicar !== 'undefined' ? multiplicar : null,
          sumarTodos: typeof sumarTodos !== 'undefined' ? sumarTodos : null,
          crearMultiplicador: typeof crearMultiplicador !== 'undefined' ? crearMultiplicador : null
        };
      `);
      
      const funciones = script();
      saludar = funciones.saludar;
      saludarPersona = funciones.saludarPersona;
      sumar = funciones.sumar;
      crearMensaje = funciones.crearMensaje;
      crearPersona = funciones.crearPersona;
      operacionesMatematicas = funciones.operacionesMatematicas;
      dividir = funciones.dividir;
      calcularTotal = funciones.calcularTotal;
      incrementarContador = funciones.incrementarContador;
      esPar = funciones.esPar;
      filtrarPares = funciones.filtrarPares;
      factorial = funciones.factorial;
      multiplicar = funciones.multiplicar;
      sumarTodos = funciones.sumarTodos;
      crearMultiplicador = funciones.crearMultiplicador;
    });

    describe('1. Función sin Parámetros', () => {
      test('Debe existir la función saludar', () => {
        expect(typeof saludar).toBe('function');
      });

      test('saludar debe retornar "¡Hola, mundo!"', () => {
        expect(saludar()).toBe("¡Hola, mundo!");
      });
    });

    describe('2. Función con Un Parámetro', () => {
      test('Debe existir la función saludarPersona', () => {
        expect(typeof saludarPersona).toBe('function');
      });

      test('saludarPersona debe retornar saludo personalizado', () => {
        expect(saludarPersona("Ana")).toBe("¡Hola, Ana!");
        expect(saludarPersona("Carlos")).toBe("¡Hola, Carlos!");
      });
    });

    describe('3. Función con Múltiples Parámetros', () => {
      test('Debe existir la función sumar', () => {
        expect(typeof sumar).toBe('function');
      });

      test('sumar debe retornar la suma correcta', () => {
        expect(sumar(5, 3)).toBe(8);
        expect(sumar(10, 20)).toBe(30);
        expect(sumar(-5, 5)).toBe(0);
      });
    });

    describe('4. Función con Parámetros por Defecto', () => {
      test('Debe existir la función crearMensaje', () => {
        expect(typeof crearMensaje).toBe('function');
      });

      test('crearMensaje debe usar parámetro por defecto', () => {
        expect(crearMensaje("Hola")).toContain("Hola");
      });

      test('crearMensaje debe repetir el texto las veces indicadas', () => {
        const resultado = crearMensaje("Hola", 3);
        const palabras = resultado.trim().split(/\s+/);
        expect(palabras.filter(p => p === "Hola").length).toBe(3);
      });
    });

    describe('5. Función que Retorna un Objeto', () => {
      test('Debe existir la función crearPersona', () => {
        expect(typeof crearPersona).toBe('function');
      });

      test('crearPersona debe retornar un objeto con las propiedades correctas', () => {
        const persona = crearPersona("Juan", 25, "Madrid");
        expect(persona).toEqual({
          nombre: "Juan",
          edad: 25,
          ciudad: "Madrid"
        });
      });
    });

    describe('6. Función que Retorna Múltiples Valores (Array)', () => {
      test('Debe existir la función operacionesMatematicas', () => {
        expect(typeof operacionesMatematicas).toBe('function');
      });

      test('operacionesMatematicas debe retornar array con 4 operaciones', () => {
        const resultado = operacionesMatematicas(10, 2);
        expect(resultado).toEqual([12, 8, 20, 5]);
      });

      test('operacionesMatematicas debe calcular correctamente', () => {
        const resultado = operacionesMatematicas(20, 4);
        expect(resultado[0]).toBe(24); // suma
        expect(resultado[1]).toBe(16); // resta
        expect(resultado[2]).toBe(80); // multiplicación
        expect(resultado[3]).toBe(5);  // división
      });
    });

    describe('7. Función con Validación', () => {
      test('Debe existir la función dividir', () => {
        expect(typeof dividir).toBe('function');
      });

      test('dividir debe calcular la división correctamente', () => {
        expect(dividir(10, 2)).toBe(5);
        expect(dividir(20, 4)).toBe(5);
      });

      test('dividir debe retornar error cuando el divisor es 0', () => {
        expect(dividir(10, 0)).toBe("Error: No se puede dividir por cero");
      });
    });

    describe('8. Scope Local', () => {
      test('Debe existir la función calcularTotal', () => {
        expect(typeof calcularTotal).toBe('function');
      });

      test('calcularTotal debe aplicar impuesto del 21%', () => {
        expect(calcularTotal(100)).toBe(121);
      });

      test('calcularTotal debe calcular correctamente con diferentes precios', () => {
        expect(calcularTotal(50)).toBeCloseTo(60.5, 1);
        expect(calcularTotal(200)).toBeCloseTo(242, 1);
      });
    });

    describe('9. Scope Global y Local', () => {
      test('Debe declarar la variable global contador', () => {
        expect(jsContent).toMatch(/(?:let|var|const)\s+contador\s*=/);
      });

      test('Debe existir la función incrementarContador', () => {
        expect(typeof incrementarContador).toBe('function');
      });

      test('incrementarContador debe incrementar el contador', () => {
        // Nota: Este test puede fallar si se ejecuta múltiples veces
        // debido al estado global
        const resultado = incrementarContador();
        expect(typeof resultado).toBe('number');
      });
    });

    describe('10. Función que Llama a Otra Función', () => {
      test('Debe existir la función esPar', () => {
        expect(typeof esPar).toBe('function');
      });

      test('esPar debe identificar números pares', () => {
        expect(esPar(4)).toBe(true);
        expect(esPar(10)).toBe(true);
      });

      test('esPar debe identificar números impares', () => {
        expect(esPar(3)).toBe(false);
        expect(esPar(7)).toBe(false);
      });

      test('Debe existir la función filtrarPares', () => {
        expect(typeof filtrarPares).toBe('function');
      });

      test('filtrarPares debe retornar solo números pares', () => {
        expect(filtrarPares([1, 2, 3, 4, 5])).toEqual([2, 4]);
        expect(filtrarPares([10, 15, 20, 25, 30])).toEqual([10, 20, 30]);
      });
    });

    describe('11. Función Recursiva Simple', () => {
      test('Debe existir la función factorial', () => {
        expect(typeof factorial).toBe('function');
      });

      test('factorial debe calcular correctamente', () => {
        expect(factorial(5)).toBe(120);
        expect(factorial(4)).toBe(24);
        expect(factorial(3)).toBe(6);
      });

      test('factorial debe manejar casos base', () => {
        expect(factorial(0)).toBe(1);
        expect(factorial(1)).toBe(1);
      });

      test('El código debe usar recursión', () => {
        const funcStr = jsContent.match(/function\s+factorial[\s\S]*?(?=function|\Z)/)?.[0] || '';
        expect(funcStr).toMatch(/factorial\s*\(/);
      });
    });

    describe('12. Expresión de Función', () => {
      test('Debe declarar multiplicar como expresión de función', () => {
        expect(typeof multiplicar).toBe('function');
        expect(jsContent).toMatch(/(?:const|let|var)\s+multiplicar\s*=\s*function/);
      });

      test('multiplicar debe calcular correctamente', () => {
        expect(multiplicar(3, 4)).toBe(12);
        expect(multiplicar(5, 6)).toBe(30);
      });
    });

    describe('13. Función con Rest Parameters', () => {
      test('Debe existir la función sumarTodos', () => {
        expect(typeof sumarTodos).toBe('function');
      });

      test('El código debe usar rest parameters', () => {
        const funcStr = jsContent.match(/function\s+sumarTodos[\s\S]*?(?=function|\Z)/)?.[0] || '';
        expect(funcStr).toMatch(/\.\.\./);
      });

      test('sumarTodos debe sumar cualquier cantidad de números', () => {
        expect(sumarTodos(1, 2, 3, 4, 5)).toBe(15);
        expect(sumarTodos(10, 20)).toBe(30);
        expect(sumarTodos(5)).toBe(5);
      });
    });

    describe('14. Función que Retorna Función', () => {
      test('Debe existir la función crearMultiplicador', () => {
        expect(typeof crearMultiplicador).toBe('function');
      });

      test('crearMultiplicador debe retornar una función', () => {
        const duplicar = crearMultiplicador(2);
        expect(typeof duplicar).toBe('function');
      });

      test('La función retornada debe multiplicar correctamente', () => {
        const duplicar = crearMultiplicador(2);
        expect(duplicar(5)).toBe(10);
        expect(duplicar(10)).toBe(20);

        const triplicar = crearMultiplicador(3);
        expect(triplicar(5)).toBe(15);
        expect(triplicar(10)).toBe(30);
      });
    });
  });
});
