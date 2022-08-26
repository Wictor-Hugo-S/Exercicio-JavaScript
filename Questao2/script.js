const v1=document.querySelector("#valor1")
const v2=document.querySelector("#valor2")
const v3=document.querySelector("#valor3")
const delta=document.querySelector("#delta")
const btn=document.querySelector("#calcular")
const aviso=document.querySelector("#aviso")
const x1=document.querySelector("#x1")
const x2=document.querySelector("#x2")

btn.onclick=()=>{
    if( v1.value == "" ){
        v1.focus();
    }
    else if (v2.value == "" ){
        v2.focus();

    }
    else if (v3.value == "" ){
        v3.focus();

    }
    else{
        delta.value= calcularBaskara(v1.value,v2.value,v3.value)
        x1.value= calcularBaskara(v1.value,v2.value,v3.value)
        x2.value=calcularBaskara(v1.value,v2.value,v3.value)
    }
}

const calcularBaskara=(a,b,c)=>{
    a=Number.parseFloat(a)
    b=Number.parseFloat(b)
    c=Number.parseFloat(c)

    let resultadoDelta= (Math.pow(b,2)) - 4 * a * c
    
    delta.value=resultadoDelta
   
    if(resultadoDelta<0){
       aviso.innerHTML='DELTA E NEGATIVO!!'
    }
    else{
       
       const linha1 = (-b + Math.sqrt(resultadoDelta)) / (2 * a)
       const linha2 = (-b - Math.sqrt(resultadoDelta)) / (2 * a)

        return ( x1.value = linha1.toFixed(2) , x2.value = linha2.toFixed(2))
         
     
        }
        
    
    

}