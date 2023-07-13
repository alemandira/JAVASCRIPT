function contar() {
    var txti = document.getElementById('txti')
    var txtf = document.getElementById('txtf')
    var txtp = document.getElementById('txtp')


    var ini = Number(txti.value)
    var fim = Number(txtf.value)
    var passo = Number(txtp.value)



    if (ini <= 0 || fim <= 0 || passo <= 0) {
        window.alert('[ERRO] Dados incorretos tente novamente...')
    } else {

        res.innerHTML = `Contando: `
        for (let c = ini; c <= fim; c += passo) {
            res.innerHTML += `${c}  \u{1F449}, `
        }
        res.innerHTML += `\u{1f3c1}`
    }

}