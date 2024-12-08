function generarPresupuesto(metrosCuadrados) {
    const precioPorMetroCuadrado = 2000;
    let costoTotal = metrosCuadrados * precioPorMetroCuadrado;
    alert(`El presupuesto para ${metrosCuadrados} m2 es: $${costoTotal}`)
}
let metrosCuadrados = parseFloat(prompt("Ingrese la cantidad de metros cuadrados a pintar:"));
let rta = generarPresupuesto(metrosCuadrados);