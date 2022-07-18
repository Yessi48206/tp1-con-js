//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let Numero1=parseInt( prompt("ingrese el primer numero"));
let Numero2=parseInt(prompt("ingrese el segundo numero"));
if(Numero1>Numero2)
{
    document.write("el primer numero ingresado es mayor");
}
else if(Numero2>Numero1)
{
    document.write("el Segundo numero ingresado es mayor");
}
else{
    document.write("los numero ingresado son iguales");
}
//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let nume1=parseInt( prompt("ingrese el primer numero"));
let nume2=parseInt(prompt("ingrese el segundo numero"));
let nume3=parseInt(prompt("ingrese el tercer numero"));
if((nume1>nume2) && (nume1>nume3) )
{
    document.write("el primer numero ingresado es mayor");
}
else if((nume2>Numero1) && (nume2>nume3))
{
    document.write("el Segundo numero ingresado es mayor");
}
else if((nume3>nume1) && (nume3>nume2))
{
    document.write("el tercer numero ingresado es mayor");
}