function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value < 1 || fano.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var sex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 1 && idade < 10) {
                // criança
                img.setAttribute('src', './homem/01criança.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', './homem/02jovem.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', './homem/03adulto.jpg')
            } else  {
                //idoso
                img.setAttribute('src', './homem/04idoso.jpg')
            }            

        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 1 && idade < 10) {
                //criança
                img.setAttribute('src', './mulher/01criança.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', './mulher/02jovem.jpg')
            } else if (idade < 50) {
                //adulta
                img.setAttribute('src', './mulher/03adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', './mulher/04idosa.jpg')
            }
            
        }

        res.style.textAlign = `center`                   
        res.innerHTML = `Passaporte : ${genero}, com ${idade} anos de idade.`
        res.appendChild(img)
        
    }
}

function limpar() {
    res.innerHTML = `Prencha os dados novamente:`
}