function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value < 1 || fano.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementById('sexo')
        var idade = ano - Number(fano.value)
        var genero = ' '
        if(fsex[].checked) {
            genero = 'Masculino'
        }     
                
        res.innerHTML = `idade ${idade}`
    }
}

//function limpar() {
  //  res.innerHTML = `Prencha os dados novamente:`
//}