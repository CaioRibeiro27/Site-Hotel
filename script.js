function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == 'admin' && senha == 'admin'){
        alert('Aprovado')
    }else{
        alert('Usuário ou senha inválidos')
    }
}