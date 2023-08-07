function cadastrar(){
var nome = document.querySelector('input#nometxt').value;
var sobren = document.querySelector('input#snometxt').value;
var ema = document.querySelector('input#emailtxt').value;
var senhan1 = document.querySelector('input#senhatxt').value;
var senhan2 = document.querySelector('input#confsenhtxt').value;

if(nome = '' || sobren == '' || ema == '' || senhan1 == '' || senhan2 ==''){
    window.alert('[ERRO] está faltando preencher algum campo!')
}if(senhan1 === senhan2){
     alert('Sucesso')
}else{
    alert('A senha difere da primeira')
}    
   
    
}