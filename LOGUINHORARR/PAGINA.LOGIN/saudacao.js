//Pega o json (objeti) do browser, assim que a página carrega
function pegaJson() {
    const dadosJSON = localStorage.getItem('dados'); // Obter o JSON do localStorage
    const dados = JSON.parse(dadosJSON); // Converter a string JSON para um objeto JavaScript

    const nome = document.querySelector('.nome_usuario'); //Pegar o campo span da saudação
    console.log(dados.email) //Apenas para fins de desenvolvimento
    nome.innerHTML = dados.email; //Colocar o valor no campo
}
