const guardagasto = []; //Tive que adicionar fora do bloco

function calc() {
   const gastonome = document.getElementById('gastoname').value;
   const valorgasto = document.getElementById('valorgasto').value;
   const res = document.getElementById('res');
   const parcelas = document.getElementById('QuantasVezes')
   if (gastonome.includes('@') || gastonome.includes('$') || gastonome.includes('#') || gastonome == "") {
      res.innerHTML = `/ERROR/ área em branco ou (O texto não pode incluir [@ , $, #]))`
      return;
   }

   if (valorgasto.includes('@') || valorgasto.includes('$') || valorgasto.includes('#') || valorgasto == "" || valorgasto <= 0) {
        res.innerHTML =` /ERROR/ Tem algo faltando(Só pode incluir números maiores que 0)`
      return;
   }
    
   // Adiciona o produto ao array guardagasto
   guardagasto.push({
      NomeDoGasto: gastonome,
      ValorDoGasto: valorgasto,
   });
   console.log(guardagasto)

   // Chama a função para listar os produtos
   listarProdutos(guardagasto);

   // Limpa os campos de entrada
   document.getElementById('gastoname').value = '';
   document.getElementById('valorgasto').value = '';
}



function listarProdutos(produtos) {
   const listaProdutos = document.getElementById('res');
   listaProdutos.innerHTML = '';

   for (const produto of produtos) {
      const itemProduto = document.createElement('div');
      itemProduto.innerHTML = `Produto: <strong>${produto.NomeDoGasto}</strong>, Valor: <strong>${produto.ValorDoGasto}</strong>`;
      listaProdutos.appendChild(itemProduto);
   }
}