const ladoA=document.querySelector("#ladoA")
const ladoB=document.querySelector("#ladoB")
const ladoC=document.querySelector("#ladoC")
const resultado=document.querySelector("#result")
const btn=document.querySelector("#calcular")

btn.onclick=()=>{
    if( ladoA.value == "" ){
        ladoA.focus();
    }
    else if (ladoB.value == "" ){
        ladoB.focus();

    }
    else if (ladoC.value == "" ){
        ladoC.focus();

    }
    
    else{
        resultado.innerHTML=calcularTriangulo(ladoA.value, ladoB.value, ladoC.value)
    }
}

const calcularTriangulo=(ladoA,ladoB,ladoC)=>{
    ladoA=Number.parseInt(ladoA)
    ladoB=Number.parseInt(ladoB)
    ladoC=Number.parseInt(ladoC)

    if ( ladoA<ladoB+ladoC && ladoB<ladoA+ladoC && ladoC < ladoA +ladoB) {
        if (ladoA == ladoB && ladoB== ladoC) {
        return "TRIANGULO EQUILÁTERO"
        }
        else if (ladoA == ladoB || ladoA == ladoC || ladoC == ladoB)  {
            return "TRIANGULO ISÓSCELES"
        }
         else if (ladoA != ladoB && ladoA != ladoC) {
            return "TRIANGULO ESCALENO"
        }
       
    }
    else {
        return" NÃO É UM TRIANGULO"
        }

}