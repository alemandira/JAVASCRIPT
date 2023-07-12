function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value == 0 || fano.value < 0 || fano.value >= ano) {
        window.alert('[ERRO] verifique os dados e tente de novo!')
    } else {
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var gen = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            gen = `Homem`
            if (idade > 0 && idade < 10) {
                //01criança
                img.setAttribute('src', '../homem/01criança.jpg')
            } else if (idade < 20) {
                //02jovem
                img.setAttribute('src', '../homem/02jovem.jpg')
            } else if (idade < 50) {
                //03adulto
                img.setAttribute('src', '../homem/03adulto.jpg' )
            } else {
                //04idoso
                img.setAttribute('src', '../homem/04idoso.jpg')
            }        
        
        } else if (sex[1].checked) {
            gen = `Mulher`
            if (idade > 0 && idade < 10) {
                //01criança
                img.setAttribute('src', '../mulher/01criança.jpg')
            } else if (idade < 20) {
                //02jovem
                img.setAttribute('src', '../mulher/02jovem.jpg')
            } else if (idade < 50) {
                //03adulto
                img.setAttribute('src', '../mulher/03adulta.jpg')
            } else {
                //04idoso
                img.setAttribute('src', '../mulher/04idosa.jpg')
            }
        }        
        res.innerHTML = `Checagem: ${gen} com ${idade} anos.`
        res.appendChild(img)
       
    }

}