function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero =''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <10) {
                img.setAttribute('src', 'menino.jpg')
            } else if (idade <21) {
                img.setAttribute('src', 'rapaz.jpg')
            } else if (idade <50) {
                img.setAttribute('src', 'homem.jpg')
            } else {
                img.setAttribute('src', 'senhor.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if  (idade >=0 && idade <10) {
                img.setAttribute('src', 'menina.jpg')
            } else if (idade <21) {
                img.setAttribute('src', 'moça.jpg')
            } else if (idade <50) {
                img.setAttribute('src', 'mulher.jpg')
            } else {
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}