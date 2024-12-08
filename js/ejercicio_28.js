function trabajo(nombre,horaT,pagoH){
    calcular = pagoH * horaT;
    alert(`nombre : ${nombre}
horas trabajadas : ${horaT}
pago en hora : ${pagoH}
el sueldo es de : ${calcular}`);
}
let nombre = prompt("ingrese el nombre del trabajador : ");
let horaT = prompt("ingrese horas trabajadas : ");
let pagoH = prompt("ingrese el valor que vale la hora : ");
let rta = trabajo(nombre,horaT,pagoH);
console.log(rta);