const loginElement = document.getElementById('email');
const passElement = document.getElementById('password')

document.querySelector('button').onclick = function(){
    if (loginElement.value === ''){
        alert.apply('Por favor, insira seu login')
    }
    else if (passElement.value === ''){
        alert('Por favor, insira sua senha')
    }
}