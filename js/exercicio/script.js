const inputNum = document.querySelector("input#numero");
Number(inputNum)
const btnAdicionar = document.querySelector("#adicionar-numero").addEventListener("click", AdicionaNum);
const mensagem = document.querySelector("div#msg-error");
const resultado = document.querySelector("#res")
mensagem.style.color = "red";
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
        valores.push(Number(inputNum.value))
        let item = document.createElement('option');
        item.text= `Valor ${inputNum.value} adicionado!`;
        containerNumAdicionado.appendChild(item);
        mensagem.innerHTML = '';
        res.innerHTML = '';
    } else {
        mensagem.innerHTML = "Número já adicionado a lista!";
    }

    if(inputNum.value == "") {
        mensagem.innerHTML = "Não foi possível adicionar pois não foi inserido nenhum número!"
    } else if(inputNum.value > 100) {
        mensagem.innerHTML = `O número ${inputNum.value} é maior que 100.`
    }

    inputNum.value = "";
    inputNum.focus();
    containerNumAdicionado.innerHTML += inputNum.value;
}

const btnFinaliza = document.querySelector("#btn-finaliza").addEventListener("click", finalizar);

function finalizar() {
    mensagem.innerHTML = '';
    if (valores.length == 0) {
        mensagem.innerHTML = "Adicione valores antes de finalizar!"
    } else {
        let totalVetores = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        for(let pos in valores) {
            soma += valores[pos];
            if(valores[pos] > maior) 
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }

        mensagem.innerHTML = '';
        media = soma / totalVetores;  

        if (valores.length == 1) {
            res.innerHTML += `<p>Ao todo temos: ${totalVetores} número cadastrado.`
        } else {
            res.innerHTML += `<p>Ao todo temos: ${totalVetores} números cadastrados.</p>`
            res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
            res.innerHTML += `<p> O menor número informado foi ${menor}.`;
            res.innerHTML += `<p>Somando todos os valores, temos: ${soma}.`
            res.innerHTML += `<p>A média dos valores digitatos é ${media}.</p>`
        }
    }
    
}