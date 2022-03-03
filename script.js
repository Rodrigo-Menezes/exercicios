function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fdata = document.getElementById('data')
    var res = document.querySelector('div#res')
    if (fdata.value.length == 0 || fdata.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fdata.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            img.setAttribute('src', 'manha.jpg')
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            img.setAttribute('src', 'tarde.jpg')
        }
        res.innerHTML = `Gênero: ${gênero} Idade: ${idade}`
        res.appendChild(img)

    }
}