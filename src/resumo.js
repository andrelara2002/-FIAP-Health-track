const alturaElement = document.getElementById('valorAltura');
const passosElement = document.getElementById('valorPassos');
const pesoElement = document.getElementById('valorPeso')

var pesoValue = JSON.parse(localStorage.getItem('lista_peso')) || []
var alturaValue = JSON.parse(localStorage.getItem('lista_altura')) || []

let userStats = {
    passos: '6000',
    altura: alturaValue,
    peso: pesoValue
}

function render(){

    console.log(userStats.passos)

    alturaElement.innerHTML = '';
    passosElement.innerHTML = '';

    textPassos = document.createTextNode(userStats.passos);
    passosElement.appendChild(textPassos);

    textAltura = document.createTextNode(`${userStats.altura} m`);
    alturaElement.appendChild(textAltura);

    textPeso = document.createTextNode(`${userStats.peso} Kg`);
    pesoElement.appendChild(textPeso);
}
document.getElementById('card-button').onclick = () =>{
    window.location.href = 'userEsportes.html'
}

goToPeso = () =>{
    window.location.href = 'userPeso.html'
}
goToAltura = () =>{
    window.location.href = 'userAltura.html'
}

render();