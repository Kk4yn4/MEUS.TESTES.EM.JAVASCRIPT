function votar(){
    var mvoto = document.getElementById('voto').value;
    var res = document.getElementById('res')
    var img =document.getElementById('imagem')
   
    
    
    res.innerHTML = `Você selecionou no candidato do partido ${mvoto}`

   if(mvoto == 14){
        img.src = '/Meus.testes/imagens/LULA.png'   
    }if(mvoto == 23){
        img.src = '/Meus.testes/imagens/bolsonaro.png'
    }if(mvoto == 51){
        img.src = '/Meus.testes/imagens/MARINA.png'
    }if(mvoto == 10){
        img.src = '/Meus.testes/imagens/NEYMAR.png'
    }if(mvoto == 77){
        img.src = '/Meus.testes/imagens/DACIOLO.png'
    }if(mvoto == 33){
        img.src = '/Meus.testes/imagens/POZE.png'
    }if(mvoto == 11){
        img.src = '/Meus.testes/imagens/TRUMP.png'
    }else if(mvoto == 20){
        img.src = '/Meus.testes/imagens/MESSI.png'
    }
    
} 
function confirmar(){
   window.alert('voto feito com suscesso')
     
}
