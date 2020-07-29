const esportes = ['Natação', 'Ciclismo', 'Caminhada', 'Artes Marciais', 'Atletismo', 'Outros']
const esporteElement = document.getElementById('divEsportes');

render();

function render() {
    esporteElement.innerHTML = '';

    for (esporte of esportes) {
        const textElement = document.createTextNode(esporte);
        const nameElement = document.createElement('div')
        nameElement.setAttribute('class', 'shadow-sm card w-100')
        nameElement.setAttribute('style', 'margin-top: 10px;')

        const lastDiv = document.createElement('div')
        lastDiv.setAttribute('class', 'card-body">')

        const finalText = document.createElement('h1')
        finalText.appendChild(textElement)
    
        lastDiv.appendChild(finalText)
        nameElement.appendChild(lastDiv);
        nameElement.addEventListener('click', goToExercices)
        

        esporteElement.appendChild(nameElement)
    }
}

function goToExercices(){
    window.location.href ='userExercicio.html'
}