while (true) {
    let entrada = prompt("Introduce algo (escribe 'salir' para terminar):");
    if (entrada.toLowerCase() === "salir") {
        break;
    }
    alert(entrada);
}
