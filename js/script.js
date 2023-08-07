/* ==== Strict Mode ==== */
'use strict'

/* ==== Analog Clock ==== */
function analogClock() {
    const hoursElement = document.getElementById("a-hours")
    const minutesElement = document.getElementById("a-minutes")
    const secondsElement = document.getElementById("a-seconds")
    const currentDate = new Date()
    const hours = (360 / 12) * currentDate.getHours()
    const minutes = (360 / 60) * currentDate.getMinutes()
    const seconds = (360 / 60) * currentDate.getSeconds()
    hoursElement.style.transform = `rotate(${hours}deg)`
    minutesElement.style.transform = `rotate(${minutes}deg)`
    secondsElement.style.transform = `rotate(${seconds}deg)`
}
setInterval(analogClock, 1000)
analogClock()

/* ==== Digital Clock ==== */
const addValue = (value) => value < 10 ? "0" + value : value
function digitalClock() {
    const hoursElement = document.getElementById("d-hours")
    const minutesElement = document.getElementById("d-minutes")
    const secondsElement = document.getElementById("d-seconds")
    const periodElement = document.getElementById("period")
    const periodTextElement = document.getElementById("period-text")
    const currentDate = new Date()
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()
    hoursElement.textContent = addValue(hours)
    minutesElement.textContent = addValue(minutes)
    secondsElement.textContent = addValue(seconds)
    if(hours < 12) {
        periodElement.textContent = "AM"
        periodTextElement.textContent = "Ante meridiem"
    }
    else {
        periodElement.textContent = "PM"
        periodTextElement.textContent = "Post meridiem"
    }
}
setInterval(digitalClock, 1000)
digitalClock()