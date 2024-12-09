//Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados
//de: Iva, Subtotal y Total de la compra de los artículos.
function calcular(pro1,pro2,pro3,pro4,pro5){
    let iva1 = pro1 * 0.19;
    let iva2 = pro2 * 0.19;
    let iva3 = pro3 * 0.19;
    let iva4 = pro4 * 0.19;
    let iva5 = pro5 * 0.19;
    let sub1 = pro1 - iva1;
    let sub2 = pro2 - iva2;
    let sub3 = pro3 - iva3;
    let sub4 = pro4 - iva4;
    let sub5 = pro5 - iva5;
    let suma = sub1 + sub2 + sub3 + sub4 + sub5;
    alert(`iva del producto 1 : ${iva1}
iva del producto 2 : ${iva2}
iva del producto 3 : ${iva3}
iva del producto 4 : ${iva4}
iva del producto 5 : ${iva5}
-----------------------------
Subtotal del producto 1 : ${sub1}
Subtotal del producto 2 : ${sub2}
Subtotal del producto 3 : ${sub3}
Subtotal del producto 4 : ${sub4}
Subtotal del producto 5 : ${sub5}
----------------------------------
la suma de todo es : ${suma}`);
}
let pro1 = parseFloat(prompt("ingrese el valor del producto 1 : "));
let pro2 = parseFloat(prompt("ingrese el valor del producto 2 : "));
let pro3 = parseFloat(prompt("ingrese el valor del producto 3 : "));
let pro4 = parseFloat(prompt("ingrese el valor del producto 4 : "));
let pro5 = parseFloat(prompt("ingrese el valor del producto 5 : "));
console.log(calcular(pro1,pro2,pro3,pro4,pro5));
