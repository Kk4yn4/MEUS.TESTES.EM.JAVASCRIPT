function entrar() {
    var Namtxt = document.getElementById('nome').value;
    var Sentxt = document.getElementById('senha').value;

    if (Namtxt == '' || Sentxt == '') {
        window.alert('[ERRO] NOME OU SENHA INCORRETOS!')
    }
    if (Namtxt == 'name' && Sentxt == 'name') {
        window.alert('Seja bem vindo de volta!')
        location.href = '/MEUS.TESTES.EM.JAVASCRIPT/LOGUINHORARR/PAGINA.LOGIN/paginainicial.html"'
    }
}