let notaAlta = 0;
let notaBaja = 100;
let max100 = 0;
let rangoA = 0;
let rangoB = 0;
let rangoC = 0;
let rangoD = 0;
let cantidad = parseInt(prompt("¿Cuántas notas vas a ingresar?"));
for (let i = 0; i < cantidad; i++) {
    let nota = parseInt(prompt(`Ingresa la nota ${i + 1} (entre 1 y 100):`));
    if (nota > notaAlta) notaAlta = nota;
    if (nota < notaBaja) notaBaja = nota;
    if (nota === 100) max100++;
    else if (nota >= 90) rangoA++;
    else if (nota >= 80) rangoB++;
    else if (nota >= 70) rangoC++;
    else if (nota >= 60) rangoD++;
}
alert(`Resultados:
Nota más alta: ${notaAlta}
Nota más baja: ${notaBaja}
Alumnos con nota 100: ${max100}
Rango A (90-99): ${rangoA}
Rango B (80-89): ${rangoB}
Rango C (70-79): ${rangoC}
Rango D (60-69): ${rangoD}`);
