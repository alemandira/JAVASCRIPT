function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) < 0 || Number(fano.value) > ano) {
        res.innerHTML = '[ERRO] Verifique os dados e tente novamente.'
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'homem01.png')

            } else if (idade <= 18) {
                //jovem
                img.setAttribute('src', 'homem02.png')

            } else if (idade > 18 && idade <= 50) {
                //adulto
                img.setAttribute('src', 'homem03.png')

            } else if (idade > 50) {
                //idoso
                img.setAttribute('src', 'homem04.png')

            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'mulher01.png')

            } else if (idade <= 18) {
                //jovem
                img.setAttribute('src', 'mulher02.png')

            } else if (idade > 18 && idade <= 50) {
                //adulto
                img.setAttribute('src', 'mulher03.png')

            } else if (idade > 50) {
                //idoso
                img.setAttribute('src', 'mulher04.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Foi detectado ${genero} com ${idade} anos de idade.`
        res.appendChild(img)

    }

}