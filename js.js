

let userName = document.querySelector("#name")
let time = document.querySelector("#time")
let person = prompt("adınızı giriniz")


// getDay komutu rakam olarak geri dönüyor, o yüzden burda bu arrayı tanımladım.

let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"] 

setInterval(function myTimer () {
    const now = new Date()
    const hours = now.toLocaleTimeString()
    const day = days[now.getDay()]
    time.innerHTML = `Saat: ${hours} ve günlerden ${day}`
},1000);

// prompt alınan bilgiye göre aşagıdaki komut çalışıyor.

(person != "") ? userName.innerHTML = `Merhaba  ${person}!  Hoş geldin!` : userName.innerHTML = `Hoşgeldin "Yabancı"`

// arka plan renk değiştirmeye başlama ve durma

let start = document.querySelector("#start") //baslamatma butonu
let stop = document.querySelector("#stop") // durdurma butonu
let body = document.querySelector("body") // body seçimi



start.onclick =function ()  {
    myInterval = setInterval(function() {
    let color1 = Math.floor(Math.random()* 255)
    let color2 = Math.floor(Math.random()* 255)
    let color3 = Math.floor(Math.random()* 255)
    body.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;},100)
    stop.classList.remove("invisible")
    start.classList.add("invisible")
   
}

stop.onclick =function(){
    clearInterval(myInterval);
    body.style.backgroundColor = "black"
    stop.classList.add("invisible")
    start.classList.remove("invisible")
}
