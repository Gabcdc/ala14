function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.getElementById('res')

if(fano.value.length == 0 || fano.value > ano){



}else{
var fsex = document.getElementsByName('radsex')
var idade = ano - Number(fano.value)
var genero = ''
var img  = document.createElement('img')
img.setAttribute('id','foto')

if(fsex[0].checked){
    genero = 'Homem'

if(idade >= 0 && idade <= 10 ){
      img.setAttribute('src','bebe homem.png')

 }
    else if(idade < 21 ){
      img.setAttribute('src','homem jovem (1).png')

  }else if(idade < 50){
    img.setAttribute('src','homem.png')

   }else{
  img.setAttribute('src','homem idoso.png')

   }
}else if (fsex[1].checked){
genero = 'Mulher'

if(idade >= 0 && idade <= 10 ){
   img.setAttribute('src','mulher bebe.png')

}
else if(idade < 21){
    img.setAttribute('src','mulher jovem.png')

}
else if(idade < 50){
 img.setAttribute('src','mulher adulta.webp')

}
else{
 img.setAttribute('src','mulher idosa.png')

}
img.style.textAlign = 'center'
res.style.textAlign = 'center'
res.innerHTML = `Detectamos ${genero} com ${idade} anos `
res.appendChild(img)    


}
}

}