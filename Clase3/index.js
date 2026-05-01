// 1. Array de 10 precios de productos
const precios = [100, 250, 150, 80, 300, 120, 400, 200, 90, 500];

// 2. Función para calcular el IVA (21%)
const calcularIVA = (precio) => precio * 1.21;

// 3. Generar nuevo array con precios con IVA
const preciosConIVA = precios.map(calcularIVA);

// 4. Mostrar resultados con formato profesional
preciosConIVA.forEach(precio => {
    console.log(`El precio es: ${precio.toFixed(2)}.- IVA incluido.`);
});