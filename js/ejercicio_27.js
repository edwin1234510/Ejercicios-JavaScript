function calcularPromedioFinal(parcial1, parcial2, parcial3, examenFinal, trabajoFinal) {
    let promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
    let promedioFinal = (0.55 * promedioParciales) + (0.30 * examenFinal) + (0.15 * trabajoFinal);
    alert(`El promedio final es: ${promedioFinal}`);
}
let parcial1 = parseInt(prompt("ingrese nota del parcial 1 :"));
let parcial2 = parseInt(prompt("ingrese nota del parcial 2 :"));;
let parcial3 = parseInt(prompt("ingrese nota del parcial 3 :"));;
let examenFinal = parseInt(prompt("ingrese nota del examen final :"));;
let trabajoFinal = parseInt(prompt("ingrese nota del trabajo final :"));;
let rta = calcularPromedioFinal(parcial1, parcial2, parcial3, examenFinal, trabajoFinal);
console.log(rta);