let numero = parseInt(prompt("Introduce un número entero:"));
if (numero <= 1) {
    alert("El número no es primo");
} else {
    let esPrimo = true;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        alert("El número es primo.");
    } else {
        alert("El número no es primo.");
    }
}
