function trocarImagem(filename,estadoname){
    document.querySelector('.imagem').setAttribute('src','images/'+filename)

    document.querySelector('.imagem').setAttribute('data-estado',estadoname)
}