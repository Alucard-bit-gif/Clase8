'use strict'

//Inicio
//Declarar variables

let horasParqueo;
let valorParqueo;
let valorInicial;
let porcentDesc = 0.10;
let porcentDescB = 0.15;
let valorDescuento;
let totalaPagar;
let precioA = 2000;
let precioB = 5000;


function Calcular()
{
    //Leer Variables
    

    
    //Ingresar horas parqueo
    horasParqueo = Number(document.getElementById('time').value);
    //Ingresar tipo Vehiculo
    //tipoVehiculo = document.getElementById('tipo').value;
    

    //Invocar funcion
    totalaPagar = pagoParqueo();
    //valorDescuento = calculoDesc();
    //valorInicial = precioPark();

    //Imprimir
    document.getElementById('Inicial').value= horasParqueo*precioB;    
    document.getElementById('Descuento').value= valorInicial*porcentDescB;    
    document.getElementById('Total').value= valorInicial - valorDescuento;    
    console.log(totalaPagar);
}
   //Procedimiento

   function pagoParqueo(){
   valorInicial = (horasParqueo*precioB);
   valorDescuento = valorInicial*porcentDescB;
   totalaPagar = valorInicial - valorDescuento;
   return totalaPagar;
}
