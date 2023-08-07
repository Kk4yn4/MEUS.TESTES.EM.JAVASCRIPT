function contar(){
var inic = document.querySelector('input#inicio')
var fin = document.querySelector('input#fim')
var pula =  document.querySelector('input#pulad')
var res = document.querySelector('div#res')

if(inic.value.length == 0 || fin.value.length == 0 || pula.value.length == 0 ){
    res.innerHTML = '[ERRO] ESTÁ FALTANDO COLOCAR ALGUM NÚMERO  	&#9757;'
}else{
    var inic1 = Number(inic.value)
    var fin1 = Number(fin.value)
    var pula1 = Number(pula.value)
    
    if(pula1 <= 0){
         res.innerHTML= 'O pulo não funcionou  	&#128532;'
    }
}

if(inic1 < fin1){
    for(c = inic1; c<= fin1; c += pula1 ){
        res.innerHTML += `${c} >`
    }
}else{
    for(c = inic1; c>= fin1; c -= pula1 ){
        res.innerHTML += `${c} >`
    }
}
res.innerHTML += `\u{1F3C1}`

}
