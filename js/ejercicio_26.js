//Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit
function convertir(c){
    f = (c * 9 / 5) + 32;
    alert("grados centígrados : "+c+" se convirtio a grados Fahrenheit : "+f);
}
let c = parseFloat(prompt("ingrese los grados centrígrados : "));
let rta = convertir(c);
console.log(rta);