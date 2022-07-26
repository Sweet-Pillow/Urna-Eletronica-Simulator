let primeiroDigito = document.querySelector('.numero1')
let segundoDigito = document.querySelector('.numero2')
let foto = document.querySelector('.foto-candidato')
let nome = document.querySelector('.nome-voto')

let imgCandidato = document.createElement('img')
imgCandidato.style.width = '80px'
imgCandidato.style.height = '75px'
imgCandidato.style.marginRight = '2px'
imgCandidato.style.marginTop = '5px'
imgCandidato.style.filter = 'grayscale(100%)'

let lula = './assets/Lula.png'
let bolso = './assets/Bolsonaro.png'

function AdicionarNumero(numero) {
    nome.innerText = ''
    if (primeiroDigito.innerText === ''){
        primeiroDigito.innerText = numero;
        return console.log(numero);
    
    } else if(segundoDigito.innerText === '') {
        segundoDigito.innerText = numero;
    
    }

    if (primeiroDigito.innerText == 1 && segundoDigito.innerText == 3){
        imgCandidato.src = lula
        nome.innerText = 'LULA'
        return foto.appendChild(imgCandidato)

    } else if (primeiroDigito.innerText == 2 && segundoDigito.innerText == 2) {
        imgCandidato.src = lula
        nome.innerText = 'LULA'
        primeiroDigito.innerText = 1
        segundoDigito.innerText = 3
        return foto.appendChild(imgCandidato)
    }

    return nome.innerText = 'VOTO NULO'

}

function Corrigir(){
    primeiroDigito.innerText = ''
    segundoDigito.innerText = ''
    nome.innerText = ''
    foto.removeChild(imgCandidato)
}

function VotoEmBranco() {
    primeiroDigito.innerText = ''
    segundoDigito.innerText = ''
    nome.innerText = 'VOTO EM BRANCO'
    foto.removeChild(imgCandidato)
}

function Confirmar() {
    const sfx = new Audio('./assets/sfx-confirma.mp3')
    if (segundoDigito.innerText !== '' || nome.innerText == 'VOTO EM BRANCO'){
        sfx.play()
        let display = document.querySelector('.display')
        display.style.display = 'flex'
        display.style.justifyContent = 'center'
        display.style.alignItems = 'center'
        display.innerHTML = 'FIM'
        display.style.fontSize = '100px'
    }
}