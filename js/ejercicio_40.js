function calcular(año,personal) {
    let edad = año - personal;
    alert("la edad de la persona es de : "+edad+" años");
}
let año = parseInt(prompt("ingrese el año actual : "));
let personal = parseInt(prompt("ingrese el año de nacimiento : "));
let rta = calcular(año,personal);
console.log(rta);