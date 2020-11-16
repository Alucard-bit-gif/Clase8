'use strict'

//Inicio
//Declarar variables

let horasParqueo;
let valorParqueo;
let valorInicial;
let porcentDesc = 0.10;
let valorDescuento;
let totalaPagar;
let precioA = 2000;

function Calcular()
{
    //Leer Variables
    //Ingresar horas parqueo
    horasParqueo = Number(document.getElementById('time').value);

    //Invocar funcion
    totalaPagar = pagoParqueo();
    //valorDescuento = calculoDesc();
    //valorInicial = precioPark();

    //Imprimir
    document.getElementById('Total').value= valorInicial - valorDescuento;    

}
   //Procedimiento

   function pagoParqueo()
        {
            valorInicial = horasParqueo*precioA;
            valorDescuento = valorInicial*porcentDesc;
            totalaPagar = valorInicial - valorDescuento;
            return totalaPagar;

        }
    
