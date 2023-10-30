window.addEventListener("load", iniciarsesion);

//Variables declaradas
let saldo = 1000;
const PIN_correcto = "123";
let intentosrestantes = 3;

//Enlazamos botones con sus respectivos id´s
depositarbtn = document.getElementById("depositar");
retirarbtn = document.getElementById("retirar");
transferirbtn = document.getElementById("transferir");
salirbtn = document.getElementById("salir");
cambiarbtn = document.getElementById("cambiar")
saldoTemplate = document.getElementById("saldo");

//Añadimos eventos de click a los botones
depositarbtn.addEventListener("click", depositar);
retirarbtn.addEventListener("click", retirar);
transferirbtn.addEventListener("click", transferir);
cambiarbtn.addEventListener("click", cambiarcontrasena);
salirbtn.addEventListener("click", () => {
alert("Inicio de sesión finalizado. Vuelva pronto")
window.location.replace("/templates/cajerodespedida.html");
});

//Función para depositar dinero
function depositar(){
const deposito = parseFloat(prompt("Introduzca una cantidad a depositar: "));
if(isNaN(deposito) || deposito <= 0){
    alert("Valor invalido. Intentelo de nuevo")
} else{
    saldo += deposito;
    alert(`Se han depositado ${deposito} € correctamente`);
    ActualizarSaldoTemplate();
}};

//Función para retirar dinero
function retirar(){
    const retiro = parseFloat(prompt("Introduzca una cantidad a retirar: "));
    if(isNaN(retiro) || retiro <= 0 || retiro > saldo){
        alert("Valor invalido. Intentelo de nuevo")
    } else{
        saldo -= retiro;
        alert(`Se han retirado ${retiro} € correctamente`);
        ActualizarSaldoTemplate()
}};

//Función para transferir dinero
function transferir (){
const monto = parseFloat(prompt("Introduzca una cantidad a transferir: "));
if(isNaN(monto)|| monto <= 0 || monto > saldo){
    alert("Valor invalido. Intentelo de nuevo")
} else{
    const cuentaDestino = prompt("Ingrese una cuentaDestino valida: ");
    if(!validarIBAN(cuentaDestino)){
        alert(`La cuenta de destino ${cuentaDestino} no es valida, por favor reviselo`);
        return
    }
        saldo -=monto;
        alert(`Se han depositado ${monto} € en la cuenta ${cuentaDestino} correctamente`);
        saldo -=monto;
        ActualizarSaldoTemplate()
    }
};

//Función para iniciar sesión
function iniciarsesion(){
    let pin = prompt("Introduzca un PIN: ");
    while (pin !== PIN_correcto && intentosrestantes > 1){
        intentosrestantes --;
        alert(`El Pin introducido no es valido. Quedan ${intentosrestantes}`);
        pin = prompt("Introduzca un PIN: ");
    }
    if(pin === PIN_correcto){
        alert(`Inicio de sesión exitoso. ¡BIENVENIDO!`);
        ActualizarSaldoTemplate()
    } else{
        alert(`Ha superado el numero de intentos. Cajero Bloqueado`);
        window.location.replace("/templates/cajerobloqueado.html");
}};

//Función para cambiar contraseña
function cambiarcontrasena(){
    const nuevacontrasena = prompt("Ingrese la nueva contraseña: ");
    if(nuevacontrasena === PIN_correcto || nuevacontrasena === null){
        alert(`La contraseña no es valida.`)
    } else{
        (nuevacontrasena === PIN_correcto);
        alert(`La contraseña ha sido modificada.`)
}};

//Función para actualizar saldo
function ActualizarSaldoTemplate(){
saldoTemplate.innerText = `${saldo} €`;
};

//Función para validar IBAN
function validarIBAN(iban){
   var regularExpresion = /^(ES\d{22})$/;
   return regularExpresion.test(iban);
};
