//Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos.
function calcular(año1,año2){
    let edad = año2 - año1;
    alert("la edad de la madre al momento que dio a luz fue de : "+edad+" años");
}
let año1 = parseInt(prompt("ingrese el año de nacimiento de la madre :"));
let año2 = parseInt(prompt("ingrese el año en el que dia a luz :"));
let rta = calcular(año1,año2);
console.log(rta);