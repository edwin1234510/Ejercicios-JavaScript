//La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los
//ingredientes para cada tipo de pizza aparecen a continuación.
//        a. Ingredientes vegetarianos: Pimiento y tofu.
//        b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
//Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en
//unción de su respuesta le muestre un menú con los ingredientes disponibles para que
//elija. Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están
//en todas las pizzas. Al final se debe mostrar por pantalla si la pizza elegida es vegetariana
//o no y todos los ingredientes que lleva.
let ingrediente;
let opcion;
opcion = parseInt(prompt(`ingrese el numero de la pizza
    1. pizza vegetariana
    2. pizza no vegetariana`));
switch (opcion){
    case 1:
        ingrediente = prompt(`ingrese solo un ingredientes : 
            - pimiento
            - tofu`);
        alert("su pizza es vegetarina, con los ingredientes : mozzarella, tomate y "+ingrediente);
        break;
    case 2:
        ingrediente = prompt(`ingrese solo un ingredientes :
            - Pepperoni
            - Jamón
            - Salmón`);
        alert("su pizza es no vegetarina, con los ingredientes : mozzarella, tomate y "+ingrediente);
        break;
    default:
        alert("no tenemos esa opcion");
        break;
}