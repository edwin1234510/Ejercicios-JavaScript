
function generarPiramide(filas) {
    for (let i = 1; i <= filas; i++) {
        const espacios = " ".repeat(filas - i); 
        const asteriscos = "*".repeat(2 * i - 1); 
        console.log(espacios + asteriscos); 
    }
}
const numeroDeFilas = 5; 
generarPiramide(numeroDeFilas);