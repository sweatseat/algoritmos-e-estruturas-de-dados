function CalculandoOsGraus(horas, menutos) {
    if(horas === 12){
        horas = 0;
        /*Vai cerificar que as horas
         nao passem de 12h porque o
         12h e 180° que e a mentade do relogio*/
    }
    const grausHoras = horas * 30 + (menutos/60) *30;
    /*quando passar o paramentro
     *das horas vai multiplicar 
     por uma hora e vai dividir pelo 
     paramentro do menutos que esse 
    vai multiplicar pelo um menuto /*/
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`````~~~~~``
    const grausMenutos = menutos * 6; 
    /*
        * 60+(60+60) = 180
        * 180 - 60 = 60 
        * # Se der 180 graus significa que ja roudou meio dia o poteieo 
        * entao para o calculo usei o 60 pra multiplicar so eetirei o 0 pra facilitar
        * */

    var valorFinal;
    grausHoras > grausMenutos ? valorFinal =  grausHoras - grausMenutos : valorFinal = grausMenutos - grausHoras
    return (`Horas em Graus: ${valorFinal}`);
}
console.log(CalculandoOsGraus(1, 30));
/*Neste exeplo acima quando as horas sao 1:30,
    * o agolo do poteiro e 135°*/
//caso resolvido! 
