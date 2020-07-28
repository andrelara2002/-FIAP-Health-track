const loginElement = document.getElementById('email');
const passElement = document.getElementById('password')

let users = {
    usuario: 'fiap-teste',
    senha: 'fiap1234'
}

document.querySelector('button').onclick = function(){
    if (loginElement.value === ''){
        alert('Por favor, insira seu login')
    }
    else if (passElement.value === ''){
        alert('Por favor, insira sua senha')
    }
    else{
        if (passElement.value === users.senha && loginElement.value === users.usuario){
            alert('Autenticação realizada')
            window.location.href = 'userResumo.html'
        }
        else{
            alert('Usuário ou senha incorreta')
        }
    }
}