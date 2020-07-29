const peso = document.getElementById('valorPeso')
const data = document.getElementById('valorData')

var values = JSON.parse(localStorage.getItem('lista_peso')) || []
var dateValues = JSON.parse(localStorage.getItem('lista_data')) || []

function render() {

    if (values === [] || values === null){
        values.push('0')
    }
    else if (dateValues === [] || dateValues === null){
        dateValues.push('0')
    }

    peso.innerHTML = `${values}Kg`
    data.innerHTML = dateValues
}

function receberPeso() {

    var value = prompt('Por favor, diga seu peso', '')
    if (value === '') {
        alert('Nada mudou')
    }
    else {
        values.pop()
        values.push(value)
        saveToStorage();
        render();
    }
}

function receberData() {
    var dateValue = prompt('Por favor, diga o dia que está registrando seu peso', '')

    if (dateValue === '') {
        alert('Cancelado')
    }
    else {
        dateValues.pop();
        dateValues.push(dateValue)
        saveToStorage();
        render();
    }
}


function saveToStorage() {

    localStorage.setItem('lista_peso', JSON.stringify(values))
    localStorage.setItem('lista_data', JSON.stringify(dateValues))
}


render();