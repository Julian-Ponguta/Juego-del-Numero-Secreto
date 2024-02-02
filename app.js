let numeroSecreto = 0;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;

function asignarTextoElemento(elemento, texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
console.log(numeroSecreto);
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1)? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acerto
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value='';
    valorCaja.value= '';    
}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{
        //si el numero generado está en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','JUEGO DEL NÚMERO SECRETO');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}
function reiniciarJuego() {
    //LIMPIAR CAJA
    limpiarCaja();
    //INIDICAR MENSAJE INTERVALO DE NUMEROS
    //GENERAR ELNUMERO ALEATORIO
    condicionesIniciales();
    //DESHABILITAR EL BOTON DE NUEVO JUEGO
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();



/*
function holaMundo(){
    console.log('¡hola Mundo!');
}
holaMundo();

function holaxxx(nombre) {
    console.log(`hola ${nombre}`);
    
}
holaxxx("pedro");


function dobleNumero(numero){
    return numero*2;
}
let resultado=dobleNumero(32);
console.log(resultado);

//Cree una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(a,b,c) {
    return (a+b+c)/3;
}
let prom= promedio(10,25,16);
console.log(prom);

//Crear una función que reciba dos números como parámetros y devuelve el mayor de ellos.
function backMayor(a,b){
    return a > b ? a : b;
}
let mayor=backMayor(-95,20);
console.log(mayor);


//Cree una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function cuadradoNumero(a) {
    return a*a;
}
let cuadrado=cuadradoNumero(25);
console.log(cuadrado);
*/

//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

/*function calculoIMC(altura,peso) {
    var indice=peso/(altura**2);
    console.log(indice);
    return indice;
    
}
calculoIMC(1.56,75); 
//Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 7;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);


  //Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
  function conversionDolares(dolar,pesosColombianos) {
    var pesosColombianos=pesosColombianos*dolar;

    console.log(`El valor de $${dolar} dolares a pesos colombianos es $${pesosColombianos}`);

  }// Ejemplo de uso
  conversionDolares(930,3903.65);

  //Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
  function calcularAreayPerimetro(alto,ancho){
    var area=alto*ancho;
    var perimetro=2*(alto+ancho);
    console.log(`Para la sala rectangular el perimetro es ${perimetro} metros y el area es ${area} metros cuadrados`)
  }// Ejemplo de uso
  calcularAreayPerimetro(6,5);
  
  //Cree una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considere Pi = 3,14.
  function calcularAreaPerimetroCirculo(radio) {
    var pi=3.14;
    var perimetro=2*pi*radio;
    var area=pi*radio**2;
    console.log(`Para la sala circular el perimetro es ${perimetro} metros y el area ${area} metros cuadrados`)
  }
  // Ejemplo de uso
  calcularAreaPerimetroCirculo(3.5);


//Cree una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
  function mostrarTablaDeMultiplicar(numero) {
    console.log(`TABLA DEL ${numero}`);
    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  }
  // Ejemplo de uso
  mostrarTablaDeMultiplicar(15);*/