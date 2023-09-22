const inputNum = document.querySelector("input#numero");
Number(inputNum)
const btnAdicionar = document.querySelector("#adicionar-numero").addEventListener("click", AdicionaNum);
const mensagem = document.querySelector("div#res");
let containerNumAdicionado = document.querySelector("select#numeros-adicionados");
let valores = [];

function isNum(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        false;
    }
}

function AdicionaNum() {
    if(isNum(inputNum.value) && !inLista(inputNum.value, valores)){
        
    }

    if(inputNum.value == "") {
        mensagem.innerHTML += "Não foi possível adicionar pois não foi inserido nenhum número!"
    } else if(inputNum.value > 100) {
        mensagem.innerHTML += "Número maior que 100."
    }

    inputNum.value = "";
    containerNumAdicionado.innerHTML += inputNum.value;
}