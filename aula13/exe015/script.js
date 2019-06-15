function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value.length > ano) {
        alert('Verifique os dados e digite novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'imagens/criancamenino.png')
            } else if (idade >=10 && idade <21) {
                img.setAttribute('src', 'imagens/jovemmenino.png')
            } else if (idade >=21 && idade <65){
                img.setAttribute('src', 'imagens/adultomenino.png')
            } else {
                img.setAttribute('src', 'imagens/senhorhomem.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'imagens/criancamenina.png')
            } else if (idade >=10 && idade <21) {
                img.setAttribute('src', 'imagens/jovemmulher.png')
            } else if (idade >=21 && idade <65){
                img.setAttribute('src', 'imagens/adultamulher.png')
            } else {
                img.setAttribute('src', 'imagens/senhoramulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
    
}