const altura = document.getElementById('alturaValue')

var values = JSON.parse(localStorage.getItem('lista_altura')) || []

function receberAltura() {
    const newValue = prompt('Por favor, insira sua altura')
    if (newValue === '' || newValue === null || newValue === 'null') {
        alert('Operação cancelada')
    }
    else {
        values.pop();
        values.push(newValue)
        saveToStorage();
        render();
    }
}

function render() {
    
    altura.innerHTML = `${values}m`

}

function saveToStorage() {
    localStorage.setItem('lista_altura', JSON.stringify(values))
}

render()