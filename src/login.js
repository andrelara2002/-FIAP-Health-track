const loginElement = document.getElementById('fname');
const passElement = document.getElementById('fpass')

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
            window.location.href = '../pages/userResumo.html'
        }
        else{
            alert('Usuário ou senha incorreta')
        }
    }
}