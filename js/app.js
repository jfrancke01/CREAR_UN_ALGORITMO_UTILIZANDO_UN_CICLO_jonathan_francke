alert("Por Favor Ingrese un nombre de Usuario y Contraseña para Registrarse");


do{
    const user = prompt("Usuario:");
    const pass = prompt("Contraseña:");

    if(user === "" || pass ===""){
        _switch = false;
        alert("Por Favor Ingrese los Datos Solicitados");

    }
    else{
        break;
    }
}while(!_switch);
alert("Usuario Registrado,a Ingresado a la Aplicacion de Multiplicar");
let number = parseInt(prompt("Ingrese el Numero a Multiplicar:"));
let resultado;
for(let i=1; i<=10; i++){
    resultado = number*i;
    alert(number+" * " +i+" = "+resultado);
}