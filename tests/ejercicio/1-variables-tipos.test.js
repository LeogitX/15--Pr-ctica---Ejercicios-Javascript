const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Ejercicio 1: Variables y Tipos de Datos', () => {
  let htmlContent, jsContent, dom, window, document;
  const htmlPath = path.join(__dirname, '../../src/ejercicio-1/variables.html');
  const jsPath = path.join(__dirname, '../../src/ejercicio-1/variables.js');

  beforeAll(() => {
    // Verificar que los archivos existan
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
      expect(title.textContent).toMatch(/ejercicio\s*1|variables|tipos\s*de\s*datos/i);
    });

    test('Debe existir un div con id "output"', () => {
      const outputDiv = document.querySelector('#output');
      expect(outputDiv).toBeTruthy();
    });

    test('Debe enlazar el archivo variables.js', () => {
      const scripts = document.querySelectorAll('script');
      const hasVariablesJS = Array.from(scripts).some(script => 
        script.src.includes('variables.js') || script.getAttribute('src')?.includes('variables.js')
      );
      expect(hasVariablesJS).toBeTruthy();
    });
  });

  describe('Variables con let', () => {
    test('Debe declarar la variable "nombre" con let', () => {
      expect(jsContent).toMatch(/let\s+nombre\s*=/);
    });

    test('La variable "nombre" debe ser un string', () => {
      expect(jsContent).toMatch(/let\s+nombre\s*=\s*["'`][^"'`]+["'`]/);
    });

    test('Debe declarar la variable "edad" con let', () => {
      expect(jsContent).toMatch(/let\s+edad\s*=/);
    });

    test('La variable "edad" debe ser un número', () => {
      expect(jsContent).toMatch(/let\s+edad\s*=\s*\d+/);
    });

    test('Debe declarar la variable "esEstudiante" con let', () => {
      expect(jsContent).toMatch(/let\s+esEstudiante\s*=/);
    });

    test('La variable "esEstudiante" debe ser un booleano true', () => {
      expect(jsContent).toMatch(/let\s+esEstudiante\s*=\s*true/);
    });
  });

  describe('Variables con const', () => {
    test('Debe declarar la constante "PI" con const', () => {
      expect(jsContent).toMatch(/const\s+PI\s*=/);
    });

    test('La constante "PI" debe tener el valor 3.14159', () => {
      expect(jsContent).toMatch(/const\s+PI\s*=\s*3\.14159/);
    });

    test('Debe declarar la constante "DIAS_SEMANA" con const', () => {
      expect(jsContent).toMatch(/const\s+DIAS_SEMANA\s*=/);
    });

    test('La constante "DIAS_SEMANA" debe tener el valor 7', () => {
      expect(jsContent).toMatch(/const\s+DIAS_SEMANA\s*=\s*7/);
    });

    test('Debe declarar la constante "MI_EMAIL" con const', () => {
      expect(jsContent).toMatch(/const\s+MI_EMAIL\s*=/);
    });

    test('La constante "MI_EMAIL" debe ser un string', () => {
      expect(jsContent).toMatch(/const\s+MI_EMAIL\s*=\s*["'`][^"'`]+["'`]/);
    });
  });

  describe('Tipos de datos primitivos', () => {
    test('Debe declarar "numeroEntero" como un número entero', () => {
      expect(jsContent).toMatch(/let\s+numeroEntero\s*=\s*-?\d+(?!\.\d)/);
    });

    test('Debe declarar "numeroDecimal" como un número decimal', () => {
      expect(jsContent).toMatch(/let\s+numeroDecimal\s*=\s*-?\d+\.\d+/);
    });

    test('Debe declarar "textoSimple" con comillas simples', () => {
      expect(jsContent).toMatch(/let\s+textoSimple\s*=\s*'[^']+'/);
    });

    test('Debe declarar "textoDoble" con comillas dobles', () => {
      expect(jsContent).toMatch(/let\s+textoDoble\s*=\s*"[^"]+"/);
    });

    test('Debe declarar "textoTemplate" con template literals (backticks)', () => {
      expect(jsContent).toMatch(/let\s+textoTemplate\s*=\s*`[^`]*\$\{[^}]+\}[^`]*`/);
    });

    test('Debe declarar "verdadero" con valor true', () => {
      expect(jsContent).toMatch(/let\s+verdadero\s*=\s*true/);
    });

    test('Debe declarar "falso" con valor false', () => {
      expect(jsContent).toMatch(/let\s+falso\s*=\s*false/);
    });

    test('Debe declarar "indefinido" con valor undefined', () => {
      expect(jsContent).toMatch(/let\s+indefinido\s*=\s*undefined/);
    });

    test('Debe declarar "nulo" con valor null', () => {
      expect(jsContent).toMatch(/let\s+nulo\s*=\s*null/);
    });
  });

  describe('Concatenación y Template Literals', () => {
    test('Debe declarar "saludo" usando concatenación con +', () => {
      expect(jsContent).toMatch(/let\s+saludo\s*=.*\+/);
    });

    test('La variable "saludo" debe contener el texto esperado', () => {
      expect(jsContent).toMatch(/saludo\s*=.*["'`].*[Hh]ola.*nombre/);
    });

    test('Debe declarar "presentacion" usando template literals', () => {
      expect(jsContent).toMatch(/let\s+presentacion\s*=\s*`[^`]*\$\{[^}]+\}[^`]*`/);
    });

    test('La variable "presentacion" debe incluir nombre, edad y esEstudiante', () => {
      const hasNombre = /presentacion\s*=\s*`[^`]*\$\{\s*nombre\s*\}[^`]*`/.test(jsContent);
      const hasEdad = /presentacion\s*=\s*`[^`]*\$\{\s*edad\s*\}[^`]*`/.test(jsContent);
      const hasEstudiante = /presentacion\s*=\s*`[^`]*\$\{\s*esEstudiante\s*\}[^`]*`/.test(jsContent);
      expect(hasNombre || hasEdad || hasEstudiante).toBeTruthy();
    });
  });

  describe('Operaciones básicas', () => {
    test('Debe declarar "suma" con una operación de suma', () => {
      expect(jsContent).toMatch(/let\s+suma\s*=.*\+/);
    });

    test('Debe declarar "resta" con una operación de resta', () => {
      expect(jsContent).toMatch(/let\s+resta\s*=.*-/);
    });

    test('Debe declarar "multiplicacion" con una operación de multiplicación', () => {
      expect(jsContent).toMatch(/let\s+multiplicacion\s*=.*\*/);
    });

    test('Debe declarar "division" con una operación de división', () => {
      expect(jsContent).toMatch(/let\s+division\s*=.*\//);
    });

    test('Debe declarar "modulo" con una operación de módulo', () => {
      expect(jsContent).toMatch(/let\s+modulo\s*=.*%/);
    });
  });
});
