'use strict'

//Inicio
//Declarar variables

let tipoVehiculo;
let horasParqueo;
let valorInicial;
let porcentDescA = 0.10;
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

    //Imprimir
    document.getElementById('Inicial').value= valorInicial;    
    document.getElementById('Descuento').value= valorDescuento;    
    document.getElementById('Total').value= totalaPagar; 
    
    
}
   

//Procedimiento


   

   function pagoParqueo()
   
        { 
        valorInicial = (horasParqueo*precioB);
        valorDescuento = valorInicial*porcentDescB;
        totalaPagar = valorInicial - valorDescuento;
        alert('El valor a pagar es:' + totalaPagar)
        return totalaPagar;
        }
        
        
   

    

   
