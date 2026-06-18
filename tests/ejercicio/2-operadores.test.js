const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Ejercicio 2: Operadores y Expresiones', () => {
  let htmlContent, jsContent, dom, window, document;
  const htmlPath = path.join(__dirname, '../../src/ejercicio-2/operadores.html');
  const jsPath = path.join(__dirname, '../../src/ejercicio-2/operadores.js');

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
      expect(title.textContent).toMatch(/ejercicio\s*2|operadores|expresiones/i);
    });

    test('Debe existir un div con id "resultado"', () => {
      const resultadoDiv = document.querySelector('#resultado');
      expect(resultadoDiv).toBeTruthy();
    });

    test('Debe enlazar el archivo operadores.js', () => {
      const scripts = document.querySelectorAll('script');
      const hasOperadoresJS = Array.from(scripts).some(script => 
        script.src.includes('operadores.js') || script.getAttribute('src')?.includes('operadores.js')
      );
      expect(hasOperadoresJS).toBeTruthy();
    });
  });

  describe('Operadores Aritméticos', () => {
    test('Debe declarar las variables num1 y num2', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+num1\s*=/);
      expect(jsContent).toMatch(/(?:let|const|var)\s+num2\s*=/);
    });

    test('Debe declarar "sumaTotal" con operador +', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+sumaTotal\s*=.*\+/);
    });

    test('Debe declarar "restaTotal" con operador -', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+restaTotal\s*=.*-/);
    });

    test('Debe declarar "multiplicacionTotal" con operador *', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+multiplicacionTotal\s*=.*\*/);
    });

    test('Debe declarar "divisionTotal" con operador /', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+divisionTotal\s*=.*\//);
    });

    test('Debe declarar "moduloTotal" con operador %', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+moduloTotal\s*=.*%/);
    });

    test('Debe declarar "potencia" con operador **', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+potencia\s*=.*\*\*/);
    });

    test('Debe usar el operador de incremento ++', () => {
      expect(jsContent).toMatch(/\+\+|incremento/);
    });

    test('Debe usar el operador de decremento --', () => {
      expect(jsContent).toMatch(/--|decremento/);
    });
  });

  describe('Operadores de Comparación', () => {
    test('Debe declarar "esMayor" con operador >', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+esMayor\s*=.*>/);
    });

    test('Debe declarar "esMenor" con operador <', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+esMenor\s*=.*</);
    });

    test('Debe declarar "esMayorIgual" con operador >=', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+esMayorIgual\s*=.*>=/);
    });

    test('Debe declarar "esMenorIgual" con operador <=', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+esMenorIgual\s*=.*<=/);
    });

    test('Debe declarar "esIgual" con operador ==', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+esIgual\s*=.*==/);
    });

    test('Debe declarar "esEstrictamenteIgual" con operador ===', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+esEstrictamenteIgual\s*=.*===/);
    });

    test('Debe declarar "esDiferente" con operador !=', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+esDiferente\s*=.*!=/);
    });

    test('Debe declarar "esEstrictamenteDiferente" con operador !==', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+esEstrictamenteDiferente\s*=.*!==/);
    });
  });

  describe('Operadores Lógicos', () => {
    test('Debe declarar las variables tienePermiso, esAdulto y tieneDinero', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+tienePermiso\s*=/);
      expect(jsContent).toMatch(/(?:let|const|var)\s+esAdulto\s*=/);
      expect(jsContent).toMatch(/(?:let|const|var)\s+tieneDinero\s*=/);
    });

    test('Debe declarar "puedeEntrar" con operador &&', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+puedeEntrar\s*=.*&&/);
    });

    test('Debe declarar "puedeComprar" con operador ||', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+puedeComprar\s*=.*\|\|/);
    });

    test('Debe declarar "noTienePermiso" con operador !', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+noTienePermiso\s*=.*!/);
    });

    test('Debe declarar "condicionCompleja" con operadores lógicos combinados', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+condicionCompleja\s*=.*(&&.*\|\||\|\|.*&&)/);
    });
  });

  describe('Operadores de Asignación', () => {
    test('Debe declarar la variable "puntos"', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+puntos\s*=/);
    });

    test('Debe usar el operador +=', () => {
      expect(jsContent).toMatch(/\+=/);
    });

    test('Debe usar el operador -=', () => {
      expect(jsContent).toMatch(/-=/);
    });

    test('Debe usar el operador *=', () => {
      expect(jsContent).toMatch(/\*=/);
    });

    test('Debe usar el operador /=', () => {
      expect(jsContent).toMatch(/\/=/);
    });

    test('Debe usar el operador %=', () => {
      expect(jsContent).toMatch(/%=/);
    });
  });

  describe('Operador Ternario', () => {
    test('Debe declarar la variable "edad"', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+edad\s*=/);
    });

    test('Debe declarar "mensaje" usando operador ternario', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+mensaje\s*=.*\?.*:/);
    });

    test('Debe declarar "descuento" usando operador ternario', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+descuento\s*=.*\?.*:/);
    });

    test('Debe declarar "estado" usando operador ternario', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+estado\s*=.*\?.*:/);
    });
  });

  describe('Operador typeof', () => {
    test('Debe declarar "tipoNumero" usando typeof', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+tipoNumero\s*=.*typeof/);
    });

    test('Debe declarar "tipoTexto" usando typeof', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+tipoTexto\s*=.*typeof/);
    });

    test('Debe declarar "tipoBooleano" usando typeof', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+tipoBooleano\s*=.*typeof/);
    });

    test('Debe declarar "tipoUndefined" usando typeof', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+tipoUndefined\s*=.*typeof/);
    });

    test('Debe declarar "tipoNull" usando typeof', () => {
      expect(jsContent).toMatch(/(?:let|const|var)\s+tipoNull\s*=.*typeof/);
    });
  });
});
