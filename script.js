const pipe = document.querySelector('.pipe');
const mario = document.querySelector('.mario');
const clouds = document.querySelector('.clouds');



document.addEventListener('click', () => {
    document.querySelector('.mario').classList.add('jump')
    setTimeout(()=>{
    document.querySelector('.mario').classList.remove('jump')
    },  1000 )
})

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft();
    console.log(pipePosition)
     
    if(pipePosition <= 120){
        pipe.style.animation = 'none'
    }

}, 10)


