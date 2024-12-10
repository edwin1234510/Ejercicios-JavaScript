let clave = "sena";
let contra = prompt("ingrese la contraseña : ");
let  contador = 0;
while(true){
    let contra = prompt("ingrese la contraseña : ");
    if(contra === clave){
        alert("contraseña correcta")
        break;
    }
    contador ++
}