function helados(mayuscula){
    if (mayuscula == "A"){
        let h = parseInt(prompt("ingrese el valor del helado : "));
        let descuento = h * 0.10;
        let valorTotal = h - descuento;
        alert("el valor del helado es de : $ "+valorTotal);
    }
    if (mayuscula == "B"){
        let h = parseInt(prompt("ingrese el valor del helado : "));
        let descuento = h * 0.15;
        let valorTotal = h - descuento;
        alert("el valor del helado es de : $ "+valorTotal);
    }
    if (mayuscula == "C"){
        let h = parseInt(prompt("ingrese el valor del helado : "));
        let descuento = h * 0.20;
        let valorTotal = h - descuento;
        alert("el valor del helado es de : $ "+valorTotal);
    }
}
let membresia = prompt("ingrese su tipo de membresía : (A), (B) o (c) ");
let mayuscula = membresia.toUpperCase();
let rta = helados(mayuscula);
console.log(rta);