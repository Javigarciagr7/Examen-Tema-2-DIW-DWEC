window.addEventListener("load", iniciarsesion);

let saldo = 1000;
const PIN_correcto = "123";
let intentosrestantes = 3;

depositarbtn = document.getElementById("depositar");
retirarbtn = document.getElementById("retirar");
transferirbtn = document.getElementById("transferir");
salirbtn = document.getElementById("salir");
saldoTemplate = document.getElementById("saldo");

depositarbtn.addEventListener("click", depositar);
retirarbtn.addEventListener("click", retirar);
transferirbtn.addEventListener("click", transferir);
salirbtn.addEventListener("click", () => {
alert("Inicio de sesión finalizado. Vuelva pronto")
window.location.replace("/templates/cajerodespedida.html");
});

function depositar(){
const deposito = parseFloat(prompt("Introduzca una cantidad a depositar: "));
if(isNaN(deposito) || deposito <= 0){
    alert("Valor invalido. Intentelo de nuevo")
} else{
    saldo += deposito;
    alert(`Se han depositado ${deposito} € correctamente`);
    ActualizarSaldoTemplate();
}};

function retirar(){
    const retiro = parseFloat(prompt("Introduzca una cantidad a retirar: "));
    if(isNaN(retiro) || retiro <= 0 || retiro > saldo){
        alert("Valor invalido. Intentelo de nuevo")
    } else{
        saldo -= retiro;
        alert(`Se han retirado ${retiro} € correctamente`);
        ActualizarSaldoTemplate()
}};

function transferir (){
const transferir = parseFloat(prompt("Introduzca una cantidad a transferir: "));
if(isNaN(transferir)|| transferir <= 0 || transfeir > saldo){
    alert("Valor invalido. Intentelo de nuevo")
} else{
    const cuentaDestino = prompt("Ingrese una cuentaDestino valida: ");
    if(!validarIBAN(cuentaDestino)){
        alert(`La cuenta de destino ${cuentaDestino} no es valida, por favor reviselo`);
        return
    }
    {
        alert(`Se han depositado ${monto} € en la cuenta ${cuentaDestino} correctamente`);
        ActualizarSaldoTemplate()
    }}
};

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

function ActualizarSaldoTemplate(){
saldoTemplate.innerText = `${saldo} €`;
};

function validarIBAN(iban){
   var regularExpresion = `/^(ES\d{22}$/`;
   return regularExpresion.test(iban);
};
