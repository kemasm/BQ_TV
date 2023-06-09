const countToDate = new Date().setMinutes(new Date().getMinutes() + 30) // countdown iqomah
let previousTimeBetweenDates
const timeoutAudio = document.getElementById("alarm_audio");
timeoutAudio.src = "media/audios/mixkit-simple-countdown-922.wav"; //"http://soundbible.com/grab.php?id=1252&type=mp3";
timeoutAudio.load();

var detakWaktu = setInterval(hitungWaktu,1000)


function hitungWaktu() {
  const currentDate = new Date()
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000)

  if (timeBetweenDates < 0) {
    clearInterval(detakWaktu);
    detakWaktu = 0;
    window.open("index.html","_self");
    // window.open("http://binaqurani.sch.id/simaq/index.html","_self");
  }
  if (timeBetweenDates < 5) {
    timeoutAudio.play();
    //flipAllCards(timeBetweenDates)
    //previousTimeBetweenDates = timeBetweenDates 
  }
  /*
  if (timeBetweenDates < 1) { 
  clearInterval(detakWaktu);
  detakWaktu = 0;
  }
  */

  flipAllCards(timeBetweenDates)
  previousTimeBetweenDates = timeBetweenDates

}

function flipAllCards(time) {
  const seconds = time % 60
  const minutes = Math.floor(time / 60) % 60
  //const hours = Math.floor(time / 3600)

  //flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10))
  //flip(document.querySelector("[data-hours-ones]"), hours % 10)
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10))
  flip(document.querySelector("[data-minutes-ones]"), minutes % 10)
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10))
  flip(document.querySelector("[data-seconds-ones]"), seconds % 10)
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top")
  const startNumber = parseInt(topHalf.textContent)
  if (newNumber === startNumber) return

  const bottomHalf = flipCard.querySelector(".bottom")
  const topFlip = document.createElement("div")
  topFlip.classList.add("top-flip")
  const bottomFlip = document.createElement("div")
  bottomFlip.classList.add("bottom-flip")

  top.textContent = startNumber
  bottomHalf.textContent = startNumber
  topFlip.textContent = startNumber
  bottomFlip.textContent = newNumber

  topFlip.addEventListener("animationstart", e => {
    topHalf.textContent = newNumber
  })
  topFlip.addEventListener("animationend", e => {
    topFlip.remove()
  })
  bottomFlip.addEventListener("animationend", e => {
    bottomHalf.textContent = newNumber
    bottomFlip.remove()
  })
  flipCard.append(topFlip, bottomFlip)
}
