//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let numero= parseInt(prompt("ingrese un numero"));

if((numero % 2 ===0 ) || (numero % 3 ===0) || (numero % 5 ===0) || (numero % 7 ===0) ){
    
document.write("el numero ingresado es divisible por algunos de los 4 numeros");
}else{
    document.write("el numero ingresado no es divisible por 2,3,5 o 7");
}

// Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let numero2= parseInt(prompt("ingrese un numero"));
if(numero % 2 ===0){
    document.write("es divisible por 2");
}
if (numero % 3 ===0){
        document.write("es divisible por 3");
    }
 if (numero % 5 ===0){
            document.write("es divisible por 5");
 }
 if (numero % 7 ===0){
    document.write("es divisible por 7");
 }