
function verificarParOImpar() {
    const numero = Math.floor(Math.random() * 10) + 1;
    if (numero % 2 === 0) {
        console.log(`El número ${numero} es par.`);
    } else {
        console.log(`El número ${numero} es impar.`);
    }
}
verificarParOImpar();