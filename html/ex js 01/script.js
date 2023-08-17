

function carregar () {
    const mensagem = document.querySelector("#msg");
    const imagem = document.querySelector("#foto");
    const data = new Date();
    const hora = data.getHours();
    const minutos = data.getMinutes();

    mensagem.innerHTML = `Agora são ${hora}:${minutos}.`;

    if (minutos < 10) {
        mensagem.innerHTML = `Agora são ${hora}:0${minutos}.`;
    }

    if (hora >= 0 && hora < 12) {
        mensagem.innerHTML += " Bom dia!"
        imagem.src = "./imagens/manha.png";
        document.body.style.background = "#e2cd9f";
    } else if (hora > 12 && hora < 18) {
        mensagem.innerHTML += " Boa tarde!"
        imagem.src = "./imagens/tarde.png";
        document.body.style.background = "#b9846f";
    } else {
        mensagem.innerHTML += ' Boa noite!';
        imagem.src = "./imagens/noite.png"; 
        document.body.style.background = "#0B2131"
    }
}