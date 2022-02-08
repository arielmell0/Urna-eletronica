const botoes = document.querySelector('.btn')
const botoesChildren = botoes.children

const display = document.querySelector('.display')

// ouvindo os botoes
document.addEventListener('click', (event) => {
    event.preventDefault()

    const target = event.target

    if(target == botoesChildren[0]) display.innerHTML += 1
        else if(target == botoesChildren[1]) display.innerHTML += 2
        else if(target == botoesChildren[2]) display.innerHTML += 3
        else if(target == botoesChildren[3]) display.innerHTML = null

        else if(target == botoesChildren[4]) display.innerHTML += 4
        else if(target == botoesChildren[5]) display.innerHTML += 5
        else if(target == botoesChildren[6]) display.innerHTML += 6
        else if(target == botoesChildren[7]) display.innerHTML = null

        else if(target == botoesChildren[8]) display.innerHTML += 7
        else if(target == botoesChildren[9]) display.innerHTML += 8
        else if(target == botoesChildren[10]) display.innerHTML += 9
        else if(target == botoesChildren[11]) display.innerHTML = botaoConfirma(display.textContent)

        console.log(display)
})

const botaoConfirma = (valor) => {
    if(valor === '666') {
        return 'Olávo de Carvalho<br> <img src="./assets/img/olavo-caveira.png" alt="candidato olavo de carvalho">'
    }

    if(valor === '13') {
        return 'Lula &nbsp&nbsp <img src="./assets/img/lula.png" alt="candidato Lula">'
    }

    if(valor === '13') {
        return 'Lula &nbsp&nbsp <img src="./assets/img/lula.png" alt="candidato Lula">'
    }

    if(valor === '17') {
        return 'Bolsonaro &nbsp&nbsp <img src="./assets/img/bolsonaro.png" alt="candidato Lula">'
    }

    return 'Digite um número válido!'
}

console.log(botoesChildren)