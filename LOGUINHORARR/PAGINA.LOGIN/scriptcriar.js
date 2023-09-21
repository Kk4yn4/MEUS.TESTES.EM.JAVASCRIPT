function cadastrar() {
    var nome = document.querySelector('input#nometxt').value;
    var sobren = document.querySelector('input#snometxt').value;
    var email = document.querySelector('input#emailtxt').value;
    var senha1 = document.querySelector('input#senhatxt').value;
    var senha2 = document.querySelector('input#confsenhtxt').value;
    var meses = document.querySelector('#mestxt').value

    //Login:
    
    if (email.includes('@') && email.includes('.com')) { //Verifica se o email possuí @ ou .com
        if (senha1 === senha2) { //Verifica se a senha1 é igual a senha 2
            console.log('sucesso'); //Caso dê true nas verificações gera mensagem de sucess
            return geraDados({ //Manda os dados para serem salvos em outra função
                email,
                senha1,
                senha2
            })
        }
    } else { //Se algum valor ali der false, vai resetar os inputs
        console.log('[Erro] há campos faltando');
        return email === '', senha1 === '', senha2 === ''
    }




}

//Função que trata o objeto retornado dos inputs
function geraDados(obj) { 
    if(obj !== null || obj !== '')  { //Verifica se não há campos faltando no objeto
        localStorage.setItem("dados", JSON.stringify(obj)); //Somente após envia para salvar no browser
        location.href = 'Saudacao.html' //redireciona o usuário para a saudação
    }
    
}