
var pedido = document.getElementById('pedidotext').value;
var quantidade = document.getElementById('qtdtext')
var res = document.getElementById('res')
var qtd = Number(quantidade.value)
function finalizar(){

  if(pedido == 'pao' && qtd==10){
      alert('fazendo pedido')
  }else{
    alert('erro')
  }
}