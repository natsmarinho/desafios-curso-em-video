const btnConsulta = document.querySelector("#consulta").addEventListener("click", consultar);
        
function consultar() {
    const inputNacionalidade = document.querySelector("#nacionalidade").value;
    const resultado = document.querySelector(".resultado");

    if (inputNacionalidade == "brasil" || inputNacionalidade == "Brasil") {
        resultado.innerHTML = `<p> Você é brasileiro!</p>`
    } else {
        resultado.innerHTML = `<p>Você é estrangeiro!</p>`
    }
}