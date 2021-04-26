/**ingreso las variables que se ocuparan y les asignamos un valor */
var nom = "narumi";
var apellido_paterno = "rodriguez";
var apellido_materno = "vanegas";
/**Na letra inicial */
var letra_inicial = apellido_paterno.charAt(0);
if ((letra_inicial == "o") || (letra_inicial == "O")) {
    letra_inicial = letra_inicial.replace('o', 'v');
    //console.log(letra_inicial.replace('n','o'));
} //else{
//console.log(letra_inicial);
//}
for (var i = 0; i < apellido_paterno.length; i++) {
    if ((apellido_paterno.charAt(i) == "a") || (apellido_paterno.charAt(i) == "A") ||
        (apellido_paterno.charAt(i) == "e") || (apellido_paterno.charAt(i) == "E") ||
        (apellido_paterno.charAt(i) == "i") || (apellido_paterno.charAt(i) == "I") ||
        (apellido_paterno.charAt(i) == "o") || (apellido_paterno.charAt(i) == "O") ||
        (apellido_paterno.charAt(i) == "u") || (apellido_paterno.charAt(i) == "U")) {
        var vocal_interna = apellido_paterno.charAt(i);
        // console.log(apellido_paterno.charAt(i));
        break;
    }
}
/**la letra inicial del segundo apellido
 * charAt -->método devuelve el carácter en el índice especificado de una cadena.
 *  El índice del primer carácter es 0, el segundo carácter es 1, y así sucesivamente.
 * if--> en caso de que tengamos una letra ñ la va a remplazar por una o
 *  */
var letra_1_segundo_apellido = apellido_materno.charAt(0);
if ((letra_1_segundo_apellido == "o") || (letra_1_segundo_apellido == "O")) {
    letra_1_segundo_apellido = letra_1_segundo_apellido.replace('o', 'v');
    //console.log(letra_1_segundo_apellido.replace('v','o'));
}
//else{
// console.log(letra_1_segundo_apellido);
//}
/**la primera letra del nombre.
 * charAt -->método devuelve el carácter en el índice especificado de una cadena.
 *  */
var letra_1_del_nombre = nom.charAt(0);
//console.log(letra_1_del_nombre);
/**creamos variables con su respectivo valor en fecha año y dia de nacimiento
 *
 */
var fecha_nacimiento_dia = "04";
var fecha_nacimiento_mes = "05";
var fecha_nacimiento_año = "1998";
/**extraemos los 2 ultimos digitos del año de nacimiento
 * slice --> devuelve una copia de una parte del array dentro de un nuevo array
 * empezando por inicio hasta fin (fin no incluido) */
var año = fecha_nacimiento_año.slice(-2);
/**console.log(año);**/
var primeras_letras = (letra_inicial + vocal_interna + letra_1_segundo_apellido + letra_1_del_nombre);
//console.log(primeras_letras);
/**
 *En caso del mes de nacimiento si es menor a 9 el mes agregamos un cero antes del numero
 si es mayor a 9 dejamos el numero tal y como esta al final concatenamos el año fecha y dia de nacimiento
 */
if (fecha_nacimiento_mes <= 4) {
    /**RFC */
    console.log(primeras_letras + año + "0" + fecha_nacimiento_mes + fecha_nacimiento_dia);
}
else {
    console.log(primeras_letras + año + fecha_nacimiento_mes + fecha_nacimiento_dia);
}
