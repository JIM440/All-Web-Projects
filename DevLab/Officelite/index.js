const countDown = new Date('nov 4, 2023 00:00:00').getTime()


const days = document.querySelector('.days')
const hours = document.querySelector('.hours')
const mins = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')


const x = setInterval(()=>{
const now = new Date().getTime()
const distance = countDown - now

console.log(distance);

days.innerText = Math.floor(distance / (1000*60*60*24))
hours.innerText = Math.floor(distance % (1000*60*60*24) / (1000*60*60))
mins.innerText = Math.floor(distance % (1000*60*60) / (1000*60))
seconds.innerText = Math.floor((distance % (1000*60))/1000)
}, 1000)