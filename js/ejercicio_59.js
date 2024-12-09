//En un colegio, se necesita hacer una selección de basquetbol que represente al colegio,
//para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19
//años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75.
function basquetbol (edad,estatura,peso){
    if (edad <= 19){
        if (estatura > 175){
            if(peso >= 75 && peso <=80){
                alert("ha sido eleccionado para el equipo");
            }
            else{
                alert("no cumple con el peso")
            }
        }
        else{
            alert("no cumple con la estatura");
        }
    }
    else{
        alert("no cumple con la edad");
    }
}
let edad = parseInt(prompt("ingrese la edad : "));
let estatura = parseInt(prompt("ingrese la estatura: "));
let peso = parseInt(prompt("ingrese el peso : "));
console.log(basquetbol (edad,estatura,peso));