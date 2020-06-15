function carregar(){
    var data = new Date()
    var horas = data.getHours()

   var msg = document.querySelector('div#msg')
   var foto = document.querySelector('div#foto')

   var img = document.createElement('img')
   img.setAttribute('id', 'foto')

   msg.innerHTML = `São ${horas} horas`

   if(horas >= 0 && horas <12){
        img.setAttribute('src', 'imagens/manha.png')
        document.body.style.background = '#e2cd9f'
    }else if(horas >= 12 && horas < 18){
        img.setAttribute('src', 'imagens/tarde.png')
        document.body.style.background = '#b9846f'
    } else {
        img.setAttribute('src', 'imagens/noite.png')
        document.body.style.background = '#515154'
    }
   
    foto.appendChild(img)

}