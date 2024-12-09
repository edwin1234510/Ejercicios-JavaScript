function calcular(mayuscula){
    if(mayuscula == "T"){
        let b = parseFloat(prompt("ingrese la base : "));
        let h = parseFloat(prompt("ingrese la base : "));
        let area = b * h / 2;
        alert("el area del triángulo es de : "+area);
    }
    if(mayuscula == "C"){
        const pi = 3.1416;
        let r = parseFloat(prompt("ingrese el radio: "));
        let area = pi * r * r;
        alert("el area del círculo es de : "+area);
    }
}
let opcion = prompt("Que desea calcular: triángulo (T) o círculo (C)");
let mayuscula = opcion.toUpperCase();
let rta = calcular(mayuscula);
console.log(rta);
