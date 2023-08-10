
const btnConsulta = document.querySelector("#consulta").addEventListener("click", consultarVel);

function consultarVel() {
const inputVelocidade = document.querySelector("#velocidade");
const velocidade = Number(inputVelocidade.value);
const resultado = document.querySelector("div.resultado");

    if (velocidade > 80) {
    resultado.innerHTML = `<p>Com a velocidade de ${velocidade}km/h você está sendo multado por excesso de velocidade.</p>`;
    } else if (velocidade < 80) {
        resultado.innerHTML = `<p>Com a velocidade de ${velocidade}km/h você está dentro dos limites de velocidade da cidade!</p>`
    }

    resultado.innerHTML += "Dirija sempre com cinto de segurança!"
}

