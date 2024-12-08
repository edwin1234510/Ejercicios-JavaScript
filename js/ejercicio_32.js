function calcular(p1,p2,p3,p4,p5){
    let descuento1 = p1 * 0.05;
    let descuento2 = p2 * 0.05;
    let descuento4 = p4 * 0.02;
    let descuento5 = p5 * 0.02;
    let valor1 = p1 - descuento1;
    let valor2 = p2 - descuento2;
    let valor4 = p4 - descuento4;
    let valor5 = p5 - descuento5;
    let valorFin = valor1 + valor2 + p3 + valor4 + valor5;
    alert(`el valor de cada producto con el descuento aplicado :
producto 1 : $ ${valor1}
producto 2 : $ ${valor2}
producto 3 : $ ${p3}
producto 4 : $ ${valor4}
producto 5 : $ ${valor5}
valor total de todo : $ ${valorFin}`);
}
let p1 = parseFloat(prompt("ingrese valor del producto 1 :"));
let p2 = parseFloat(prompt("ingrese valor del producto 2 :"));
let p3 = parseFloat(prompt("ingrese valor del producto 3 :"));
let p4 = parseFloat(prompt("ingrese valor del producto 4 :"));
let p5 = parseFloat(prompt("ingrese valor del producto 5 :"));
let rta = calcular(p1,p2,p3,p4,p5);
console.log(rta);