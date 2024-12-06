//. Escribir un programa que calcule el área de un triángulo.
let base,altura;
base = parseInt(prompt("ingrese la base : "));
altura = parseInt(prompt("ingrese la base : "));
function area(base,altura){
    let calcular;
    calcular = (base * altura) / 2;
    alert("el area del triangulo es : "+calcular);
}
let rta = area(base,altura);