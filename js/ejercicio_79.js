function contarSilabas(palabra) {
    let contador = 0;
    for (let i = 0; i < palabra.length; i++) {
        if ("aeiouáéíóúü".includes(palabra[i].toLowerCase())) {
            contador++;
        }
    }
    return contador;
}

const palabras = ["casa", "perro", "extraordinario", "árbol"];

palabras.forEach(palabra => {
    const silabas = contarSilabas(palabra);
    console.log(`La palabra "${palabra}" tiene ${silabas} sílabas.`);
});