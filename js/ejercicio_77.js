function mayor(num1,num2){
    if(num1 > num2){
        alert("el mayor es : "+num1+" ,el menor es : "+num2);
    }
    if(num1 < num2){
        alert("el mayor es : "+num2+" ,el menor es : "+num1);
    }
    if(num1 == num2 && num2 == num1){
        alert("son iguales");
    }
}
let num1 = parseInt(prompt("ingrese el primer número : "));
let num2 = parseInt(prompt("ingrese el primer número : "));
console.log(mayor(num1,num2));