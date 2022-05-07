var idade = 17
if (idade < 16) {
    console.log(`Você tem ${idade} anos, vc não pode votar.`) 
} else  if (idade < 18 || idade > 65 ) {
    console.log(`Você tem ${idade} anos, o voto é opcional.`)
} else {
    console.log(`Você tem ${idade} anos, o voto é obrigatório.`)
}