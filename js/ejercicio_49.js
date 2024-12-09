function rectangulo(largo, ancho){
    if(largo >= 0 && ancho >= 0){
        let area = largo * ancho;
        alert("el area del rectangulo es de : "+area);
    }
    else{
        alert("no es posible porque tiene número negativo");
    }
}
let largo = parseFloat(prompt("ingrese el largo del rectangulo : "));
let ancho = parseFloat(prompt("ingrese el largo del rectangulo : "));
let rta = rectangulo(largo, ancho);
console.log(rta);