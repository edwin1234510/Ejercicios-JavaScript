function calcularRaices(a, b, c) {
    if (a === 0) {
        console.log("Esto no es una ecuación cuadrática.");
        return;
    }
    const discriminante = b * b - 4 * a * c;
    if (discriminante > 0) {
        const raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        console.log(`Las raíces reales son: raíz 1 = ${raiz1}, raíz 2 = ${raiz2}`);
    } else if (discriminante === 0) {
        const raiz = -b / (2 * a);
        console.log(`La ecuación tiene una raíz real doble: raíz = ${raiz}`);
    } else {
        console.log("La ecuación no tiene raíces reales.");
    }
}
const a = parseFloat(prompt("Ingrese el coeficiente a:"));
const b = parseFloat(prompt("Ingrese el coeficiente b:"));
const c = parseFloat(prompt("Ingrese el coeficiente c:"));
calcularRaices(a, b, c);