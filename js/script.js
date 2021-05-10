const dinossauro = window.document.getElementById('dinossauro')
function pular(){
    dinossauro.classList.add('pular-anim')
    window.document.getElementById('jogo').style.borderBottom = '1px solid' //Ativando o chão
    window.document.getElementById('cactus').style.display = 'block' // Aparece o cactus ao pressionar espaço
}

window.document.addEventListener('keydown', function (event){
    if (event.keyCode !== 32) return;
        pular()
        setTimeout(function(){
        dinossauro.classList.remove('pular-anim')
    }, 400)
})
