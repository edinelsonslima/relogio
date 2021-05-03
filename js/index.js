const hours = document.querySelector('#hours')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')


function relogio(){
    const date = new Date()
    hours.innerHTML = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`
    min.innerHTML = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`
    sec.innerHTML = date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`
}

setInterval(relogio, 1000)



