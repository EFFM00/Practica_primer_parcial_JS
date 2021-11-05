//1. Crea un script donde declares una función obtenerImporteConImpuestos que reciba dos parámetros: el importe sin impuestos (numérico) y el tipo de producto (numérico entero). La función debe mostrar por pantalla el importe sin impuestos más el 21% si el tipo de producto es 1, ó el importe sin impuestos más el 10% si el tipo de producto es 2, ó el importe sin impuestos más el 5% si el tipo de producto es 3.

function calculadoraImpuesto(porcentajeImpuesto, importe) {
    return importe += (importe*porcentajeImpuesto)/100;
}

function obtenerImporteConImpuestos(producto, importe) {
    switch(producto) {
        case 1:
            return "El producto 1 tiene un costo final de $" + calculadoraImpuesto(21, importe) + " con impuestos.";
            break;

        case 2:
            return "El producto 2 tiene un costo final de $" + calculadoraImpuesto(10, importe) + " con impuestos.";
            break;

        case 3:
            return "El producto 3 tiene un costo final de $" + calculadoraImpuesto(5, importe) + " con impuestos.";
            break;
    
        default:
            return "No es un producto válido. Elija otro.";
    }

}

console.log(obtenerImporteConImpuestos(3, 1500));