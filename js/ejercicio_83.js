//Crea una función para validar un pin que acepte 4 o 6 caracteres de longitud, solo se
//aceptan números, la función debe devolver true si el pin es válido y false si no es válido.
function validar(palabra){
    let regex = /\w\n{4,6}/;
    console.log(regex.test(palabra));
}
let palabra = prompt("ingrese el pin");
console.log(validar(palabra));
