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
let precioA = 5000;
let precioB = 4000;
let precioC = 3000;
let precioD = 2000;




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


   

   function pagoParqueo(){
      
    if(tipoVehiculo == 'Carro')  
        { 
        if (horasParqueo <= 2) {   
        valorInicial = (horasParqueo*precioA);
        valorDescuento = valorInicial*porcentDescA;
        totalaPagar = valorInicial - valorDescuento;
        alert('El valor a pagar es:' + ' '  +  totalaPagar);
        return totalaPagar;
                                }
        else if (horasParqueo <= 5){
        valorInicial = (precioA*2) + ((horasParqueo - 2)*precioB);
        valorDescuento = valorInicial*porcentDescA;
        totalaPagar = valorInicial-valorDescuento;
        alert('El valor a pagar es:' + ' '  +  totalaPagar);
        return totalaPagar
                                }
        else if (horasParqueo <=10){
        valorInicial = (precioA*2) + (precioB*3) + ((horasParqueo - 5)*precioC);
        valorDescuento = valorInicial*porcentDescA;
        totalaPagar = valorInicial-valorDescuento;
        alert('El valor a pagar es:' + ' '  +  totalaPagar);
        return totalaPagar
                                }                        


        }
    else 
        {
        valorInicial = parseInt(horasParqueo*precioA);
        valorDescuento = valorInicial*porcentDescA;
        totalaPagar = valorInicial - valorDescuento;
        alert('El valor a pagar es:' + ' '  +  totalaPagar);  
        return totalaPagar; 
        }    
    }
        
   

    

   
