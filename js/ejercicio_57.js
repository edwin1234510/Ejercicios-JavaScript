function rango (calificacion){
    if (calificacion <= 10 && calificacion >= 9.1){
        alert("Excelente");
    }
    if (calificacion <= 9 && calificacion >= 8.1){
        alert("Muy bien");
    }
    if (calificacion <= 8 && calificacion >= 7.5){
        alert("Bien");
    }
    if (calificacion < 7.5){
        alert("No Aprobado");
    }
}
let calificacion = parseFloat(prompt("ingrese la calificaion : "));
let rta = rango (calificacion);
console.log(rta);