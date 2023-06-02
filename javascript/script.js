const patrick = document.querySelector('.patrick')
const aguaViva = document.querySelector('.obstaculo')
const gameOver = document.querySelector('.fundo')


let jogoAcabou = false
function pular (){
  if (jogoAcabou) return;
patrick.classList.add('pulo')

setTimeout(()=>{
    patrick.classList.remove('pulo')
}, 500)
}

function morte (){
    patrick.classList.add('pulo-dead')
    patrick.style.animation = 'pulo-dead 1.5s ease-in-out'

    setTimeout(()=>{
        patrick.classList.remove('pulo-dead')
    }, 2000)
}

const loop = setInterval(()=>{
  const posicaoObstaculo = aguaViva.offsetLeft // distancia do obstaculo a esquerda
  const posicaoPatrick = +window.getComputedStyle(patrick).bottom.replace('px', '') // referencia o pulo do bob

  if (posicaoObstaculo <= 235  && posicaoObstaculo > 0 && posicaoPatrick < 82){
    jogoAcabou = true
    aguaViva.style.animation = 'none' // para a animação
    // aguaViva.style.left = `${posicaoObstaculo}px` // para o obstaculo parar na posição que ele estava

    
    patrick.style.animation = 'none'
    patrick.style.bottom = `${posicaoPatrick}px`
    patrick.src = "./imagens/patrick-dead.png" // troca para animação de morte
    patrick.style.width = '120px'
    patrick.style.left = 'calc(50% - 100px)';
    
    morte()
    gameOver.src = "./imagens/game-over.gif"
    gameOver.style.width = '100%'
    gameOver.style.height = '400px'

// Adicione a classe hidden ao obstáculo e ao Patrick para sumir.
aguaViva.classList.add('hidden'); 
    setTimeout(()=>{
      patrick.classList.add('hidden');
    }, 1500)

    clearInterval(loop)
  }
}, 10)


document.addEventListener('keydown', pular)