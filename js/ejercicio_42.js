function papelería(libros,cuadernos,lapiceros){
    let valor1 = 10000 * libros;
    let valor2 = 7550 * cuadernos;
    let valor3 = 5550 * lapiceros;
    let suma = valor1 + valor2 + valor3;
    alert(`el valor de los libros es de : ${valor1}
el valor de los cuadernos es de : ${valor2}
el valor de los lapiceros es de : ${valor3}
el monto total de todo las ventas es de : ${suma}`);
}
let libros = parseInt(prompt("ingrese la cantidad de libros : "));
let cuadernos = parseInt(prompt("ingrese la cantidad de cuadernos : "));
let lapiceros = parseInt(prompt("ingrese la cantidad de lapiceros : "));
let rta = papelería(libros,cuadernos,lapiceros);
console.log(rta);