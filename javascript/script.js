const bob = document.querySelector('.bob')


function pular (){
bob.classList.add('pulo')

setTimeout(()=>{
    bob.classList.remove('pulo')
}, 500)
}


document.addEventListener('keydown', pular)