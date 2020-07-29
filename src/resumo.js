const alturaElement = document.getElementById('valorAltura');
const passosElement = document.getElementById('valorPassos');
const pesoElement = document.getElementById('valorPeso')

var pesoValue = JSON.parse(localStorage.getItem('lista_peso')) || []

let userStats = {
    passos: '6000',
    altura: '1.8',
    peso: pesoValue
}

function render(){

    alturaElement.innerHTML = '';
    passosElement.innerHTML = '';

    textPassos = document.createTextNode(userStats.passos);
    passosElement.appendChild(textPassos);

    textAltura = document.createTextNode(`${userStats.altura} m`);
    alturaElement.appendChild(textAltura);

    textPeso = document.createTextNode(`${userStats.peso} Kg`);
    pesoElement.appendChild(textPeso);
}

render();