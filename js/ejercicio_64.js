let impar = [];
let numero = parseInt(prompt("Ingresa un número entero positivo:"));
for (let i = 1; i <= numero; i++) {
    if (i % 2 !== 0) { 
        impar.push(i);
    }
}
alert(impar);