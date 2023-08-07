function calcule(){
    var nx = document.getElementById('numero')
    var selc = document.getElementById('selecione')
     if (nx.value.length == 0){
        alert('erro')
     }else{
        var n = Number(nx.value)
        /*var c = 1*/
        selc.innerHTML =''
       /*while (c <= 10){*/
       for(c =1; c<=10;c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `selc${c}`
            selc.appendChild(item)
           /* c++*/
        }
    }
    

}