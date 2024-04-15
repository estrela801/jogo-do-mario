const pipe = document.querySelector('.pipe');
const mario = document.querySelector('.mario');
const clouds = document.querySelector('.clouds');



document.addEventListener('click', () => {
    document.querySelector('.mario').classList.add('jump')
    setTimeout(()=>{
    document.querySelector('.mario').classList.remove('jump')
    },  800 )
})
document.addEventListener('keydown', () => {
    document.querySelector('.mario').classList.add('jump')
    setTimeout(()=>{
    document.querySelector('.mario').classList.remove('jump')
    }, 800 )
})

const loop = setInterval(() => {
    let pipePosition = document.querySelector('.pipe').offsetLeft;
    const mario = document.querySelector('.mario');
    let marioPosition = mario
    
    marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    
    console.log(marioPosition)
     
    if(pipePosition <= 150 && pipePosition > 0 && marioPosition < 100 ){
        document.querySelector('.pipe').style.animation = 'none'
        document.querySelector('.pipe').style.left = `${pipePosition}px`

        document.querySelector('.mario').style.animation = 'none'
        document.querySelector('.mario').style.bottom = `${marioPosition}px`

        document.querySelector('.mario').src = 'imagens/game-over.png';
        document.querySelector('.mario').style.width = '60px'
        document.querySelector('.mario').style.marginLeft = '50px'

        clearInterval(loop)
        document.querySelector('#button').style.display = 'block'

    }
    

}, 10)


