const strInicio = document.querySelector("#inicio");
const strFim = document.querySelector("#fim");
const passos = document.querySelector("#passo");
let resultado = document.querySelector(".resultado")
const btnGerar = document.querySelector("button").addEventListener("click", gerarContagem)

function gerarContagem() {
    if (strInicio.value.length == 0 || strFim.value.length == 0 || passos.value.length == 0) {
        resultado.innerHTML = "Impossível contar por falta de dados!"
    } else {
        resultado.innerHTML = "Contando...<br>";
        let numInicio = Number(strInicio.value);
        let numFim = Number(strFim.value);
        let numPassos = Number(passos.value);

        if(numPassos <= 0) {
            alert("Número de passo inválido! Considerando PASSO: 1.");
            numPassos = 1;
        }

        if (numInicio < numFim) {  
            for(let c = numInicio; c <= numFim; c += numPassos) {
            resultado.innerHTML += `${c}  \u{27A1}`
            }
        } else {
            for(let c = numInicio; c >= numFim; c -= numPassos) {
                resultado.innerHTML += `${c}  \u{27A1}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
     }
    
    }