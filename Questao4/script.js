const numero=document.querySelector("#n1")
const btn=document.querySelector("#button")
const result=document.querySelector("#resultado")



btn.onclick=()=>{
    if( numero.value == "" ){
        numero.focus();
    }
    
    else{
        result.innerHTML=contagemDeNumero(numero.value)
      
    }
}

const contagemDeNumero=(n1)=>{
    n1=Number.parseInt(n1)

    let array=[]

    Array(n1).fill(0).forEach((valor,indice)=>{


         if((indice + 1) % 5 == 0 && (indice + 1) % 9 == 0){
            array.push('LuidyMoura')
        }

       else if((indice + 1) % 5 == 0){
           array.push('Luidy')
        
       }
       else if((indice + 1 ) % 9 == 0 ) {
           array.push('Moura')
       }

       else{
           return array.push( indice + 1)
       }
       

    })
    
    return array.join()

    
   
}
