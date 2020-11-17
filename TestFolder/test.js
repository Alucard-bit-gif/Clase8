'use strict'

//Inicio
//Declarar variables

let tipoVehiculo;
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
    tipoVehiculo = document.getElementById('carro_moto').value;
    

    //Invocar funcion
    totalaPagar = pagoParqueo();
    //valorDescuento = calculoDesc();
    //valorInicial = precioPark();

    //Imprimir
    document.getElementById('Inicial').value= valorInicial;    
    document.getElementById('Descuento').value= valorDescuento;    
    document.getElementById('Total').value= totalaPagar;    
    console.log(totalaPagar);
}
   //Procedimiento

   function pagoParqueo(){

    if (tipoVehiculo === 'Carro')
    {
   valorInicial = (horasParqueo*precioB);
   valorDescuento = valorInicial*porcentDescB;
   totalaPagar = valorInicial - valorDescuento;
   return totalaPagar;
    }
    else 
    {
        valorInicial = (horasParqueo*precioA);
        valorDescuento = valorInicial*porcentDescA;
        totalaPagar = valorInicial - valorDescuento;
        return totalaPagar;
         
    }

   }