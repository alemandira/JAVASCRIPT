var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 6 ) {
    console.log(`Boa Madrugada.`)
} else if (hora < 12) {
    console.log(`Bom dia para Você.`)
} else if (hora <= 18 ) {
    console.log(`Boa tarde para Você.`)
} else {
    console.log(`Boa noite para Você.`)
}
