let agora = new Date();
let horas = agora.getHours();
let minutos = agora.getMinutes();
const frase = `São exatamente ${horas}:${minutos}`

if (horas < 5){
    console.log(`${frase}. Boa madrugada!`);
} else if (horas < 12) {
    console.log(`${frase}. Bom dia!`);
} else if (horas <= 18) {
    console.log(`${frase}. Boa tarde!`);
} else if (horas >= 18) {
    console.log(`${frase}. Boa noite!`);
}