

 function finalizar(){
    let nome = document.getElementById('nometxt')
    let sobren = document.getElementById('sobrentxt')
    let idade = document.getElementById('idadetxt')
    let peso = document.getElementById('pesotxt')
    let altura = document.getElementById('alturatxt')
    let res = document.getElementById('res')
    let rest = document.querySelector('div#ress')
    let idad = Number(idade.value)
    let pes = Number(peso.value)
    let alt = Number(altura.value)
 


    let n = nome.value;
    let sn = sobren.value 
    if(n == nome.value|| sn == sobren.value){
        
        res.innerHTML = (`Olá ${n} ${sn} sejá bem vindo!`)
    }
    if(n == ''|| sn == ''){
        res.innerHTML=('[ERROR] TEM INFORMAÇÕES FALTANDO!')
    }
    
   
    if(idade >=1 || pes>=1 || alt>=1){
       rest.innerHTML=(`${idad} ${pes} ${alt}`)
        
     }
   
    /*if(idad <= 0 || pes <= 0 || alt <=0){
        alert('erro')
    }*/

    


 }
