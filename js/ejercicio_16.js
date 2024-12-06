//Escribir un programa que calcule la velocidad de un proyectil que recorre 2km en 5
//minutos, exprese el resultado en metros/segundo.
let km = 2;
let minutos = 5;
function velocidad(km,minutos){
    let distancia = km * 1000;
    let tiempo = minutos * 60;
    let v = distancia / tiempo;
    alert("el resultado es : "+v);
}
let rta = velocidad(km,minutos);