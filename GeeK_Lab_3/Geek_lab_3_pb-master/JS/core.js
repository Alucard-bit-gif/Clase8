'use strict'

//alert("Programar el calculo del servicio")

//Laboratorio Geek # 3//

//Inicio

//Declarar Variables

let horasParqueo;
let  tipoVeh =  Moto;
const precioA = 5000;
const precioB = 4000;
const precioC = 3000;
const precioD = 2000;
let valorA;
let valorB;
let valorC;
let valorD;
const descAuto = 0.10;
const descMoto = 0.15;
let descA;
let descM;
let totalPago;

function Calcular ()
    {

    //Leer variables

    //Ingresa tipo de vehiculo
    tipoVeh = document.getElementById('tipo').value;

    //Ingresar numero de horas
    horasParqueo = Number(document.getElementById('salida').value);

    //Invocar funcion
    totalPago = parkPago();

    //Imprimir
    document.getElementById('Inicial').value = valorA;
    document.getElementById('Inicial').value = valorB;
    document.getElementById('Inicial').value = valorC;
    document.getElementById('Descuento').value = descM;
    document.getElementById('Descuento').value = descA;
    document.getElementById('Total').value = totalPago;
    
    }

    //Procedimiento

    function parkPago()

    {
    
        if (tipoVeh == Moto)
            { 
                if(horasParqueo<=2)
                    {
                        valorA= horasParqueo*precioA;
                        descM = parseInt(valorA * descMoto);
                        totalPago= valorA - descM; 
                        return totalPago;                                                 
                    } 

                else if (horasParqueo>2<=5)
                    {
                        valorB= (precioA*2) + ((horasParqueo - 2)*precioB);
                        descM = parseInt(valorB*descMoto);
                        totalPago = valorB - descM;
                        return totalPago;                    
                    }

                else if (horasParqueo>5<=10)
                    {
                        valorC= (precioA*2) + (precioB*3) + ((horasParqueo - 5)*precioC);
                        descM = parseInt(valorC*descMoto);
                        totalPago = valorC - descM;
                        return totalPago;
                    }
                else   
                    {
                        valorD = (precioA*2) + (precioB*3) + (precioC*5) + ((horasParqueo - 10)*precioD);
                        descM = parseInt(valorD*descMoto);
                        totalPago = valorD - descM;
                        return totalPago;
                    }
            }

        else       
         
            {
               if(horasParqueo<=2)
                    {
                        valorA= horasParqueo*precioA;
                        descA = parseInt(valorA * descAuto);
                        totalPago= valorA - descA; 
                        return totalPago;                                                 
                    } 

                else if (horasParqueo>2<=5)
                    {
                        valorB= (precioA*2) + ((horasParqueo - 2)*precioB);
                        descA = parseInt(valorB*descAuto);
                        totalPago = valorB - descA;
                        return totalPago;                    
                    }

                else if (horasParqueo>5<=10)
                    {
                        valorC= (precioA*2) + (precioB*3) + ((horasParqueo - 5)*precioC);
                        descA = parseInt(valorC*descAuto);
                        totalPago = valorC - descA;
                        return totalPago;
                    }
                else   
                    {
                        valorD = (precioA*2) + (precioB*3) + (precioC*5) + ((horasParqueo - 10)*precioD);
                        descA = parseInt(valorD*descAuto);
                        totalPago = valorD - descA;
                        return totalPago;
                    }
    
            }
    
    }