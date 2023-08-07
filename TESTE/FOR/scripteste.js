
function finalizar(){
let num1 = document.querySelector('input#numero1')
let selc = document.querySelector('select#selecionar')
let inf = document.querySelector('div#informacoes')
    if(num1.value.length ==0){
          inf.innerHTML =('erro')
    }else{
        var n = Number(num1.value)
        /*var c = 1*/
        selc.innerHTML =''
        for(let xis = 0; xis <= 10; xis++){
        let item = document.createElement('option')
        item.text = `${n} x ${xis} = ${n*xis}`
        item.value = `selc${xis}`
        selc.appendChild(item)
        inf.innerHTML=('Operação feita com suscesso!')
      }
    }
}



