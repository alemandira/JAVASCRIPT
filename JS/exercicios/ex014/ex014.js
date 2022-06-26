function carregar() {
    var msg = window.document.getElementById('msg')
    var msg2 = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 15
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = '04manha.png'
        document.body.style.background = 'rgb(245, 168, 29)'
        msg2.innerText = `Bom Dia`
    } else if (hora >= 12 && hora <= 18) {
        // boa tarde
        img.src = '05tarde.png'
        document.body.style.background = 'rgb(131, 78, 9)'
        msg2.innerText = `Boa Tarde`
    } else {
        // boa noite
        img.src = '06noite.png'
        document.body.style.background = 'rgb(68, 23, 233)'
        msg2.innerText = `Boa Noite`
    }
}

