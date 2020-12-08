const plus = (a,b) => +a + +b

console.log(plus(2,2))
console.log(plus(2,'2'))
console.log(plus(2,'m'))


const isTime = (hours,minutes) => {
    if(hours < 0 || hours > 23 || minutes < 0 || minutes > 59 ) return false
    return true
}

console.log(isTime(12,59),isTime(00,00), isTime(24,11))

const addTime = (hours,minutes,addMinutes) => {
    if(hours < 0 || hours > 23 || minutes < 0 || minutes > 59 ) return 'Неверный формат времени'
    
    let time = new Date(2020,0,0,hours,minutes+addMinutes)

    return time.toLocaleTimeString('ru')
}

console.log(addTime(12,15,15), addTime(23,00,70), addTime(24,70,20))
