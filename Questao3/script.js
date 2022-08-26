const nota=document.querySelector("#nota")
const btn=document.querySelector("#button")
const result=document.querySelector("#resultado")



btn.onclick=()=>{
    if( nota.value == "" ){
        nota.focus();
    }
    else if(nota.value < 0 || nota.value>100){
        alert('Coloque uma nota acima de 0 e até 100')
    }
    else{
        result.innerHTML=aprovacaoDeAluno(nota.value)
      
    }
}


const aprovacaoDeAluno=(n1)=>{
     let notaComCorrecao=calcularArrendodamento(n1)

     if(notaComCorrecao>=40){
        return "VOCE ESTÁ APROVADO"
    }
    else {
        return "VOCÊ ESTÁ REPROVADO"
    }
  
}

const calcularArrendodamento=(n1)=>{
    n1=Number.parseFloat(n1)

    if (n1 % 5 <= 2) {
        return n1
        
    } else {
        return n1 + (5 - (n1 % 5))
    }
}
