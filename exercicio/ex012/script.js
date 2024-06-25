function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var msg2 = window.document.getElementById('msg2')
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    //var horas =19

    msg.innerHTML = `Agora são ${horas} horas e ${minutos} minutos.`

    if (horas >= 0 && horas < 12) {
        img.src = '01dia.jpg'
        msg2.innerHTML = (`Bom dia`)
        document.body.style.background = 'yellow'
    } else if (horas >= 12 && horas <= 18) {
        img.src = '02tarde.jpg'
        msg2.innerHTML = (`Boa tarde`)
        document.body.style.background = 'brown'
    } else {
        img.src = '03noite.jpg'
        msg2.innerHTML = ('Boa Noite')
        document.body.style.background = 'darkblue'
    }
}