let allSongs = [
    { songName: "Jale 2", url: "songs/Jale 2.mp3", img: "./images/jale.jpg" },
    { songName: "Pehle Bhi main", url: "./songs/Pehle Bhi Main.mp3", img: "./images/animal.jpg" },
    { songName: "Ram siya ram", url: "./songs/Ram Siya Ram.mp3", img: "./images/ram.jpg" },
    { songName: "Arjan Valley", url: "./songs/Arjan Vailly Ne.mp3", img: "./images/animal.jpg" }

]

let allSongsCard = document.getElementById("all-songs")

let poster = document.querySelector("#left")

let selected = 0;

let audio = new Audio();

const printSongsCard = () => {
    let clutter = "";

    allSongs.forEach((val , idx)=> {
     clutter+= ` <div class="song-card" id=${idx}>
    <div class="part1">
        <img src="${val.img}" alt="">
        <h2>${val.songName}</h2>
    </div>
    <h6>3:56</h6>
    </div>`
    })

    allSongsCard.innerHTML = clutter
    poster.style.backgroundImage = `url(${allSongs[selected].img})`
    audio.src= allSongs[selected].url


}

printSongsCard();




const songPlay = (e) => {

  selected = e.target.id;
  printSongsCard();
  audio.play()
  play.innerHTML = `<i class="ri-pause-mini-fill"></i>`

}

allSongsCard.addEventListener("click", (e) => {
    songPlay(e)
})
let playAndPauseBtn = document.getElementById("play")
let playPause = 0;

const playAndPause = () => {
    if(playPause == 0){
        audio.pause()
        playAndPauseBtn.innerHTML = `<i class="ri-play-mini-fill"></i>`
        playPause = 1

    } else if(playPause == 1){
        audio.play()
        playAndPauseBtn.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        playPause = 0
    }
}

playAndPauseBtn.addEventListener("click", () => {
    playAndPause()
})

var backward = document.querySelector("#backward")
var forward = document.querySelector("#forward")


forward.addEventListener("click", () => {
    if(selected < allSongs.length -1){
        selected++;
        printSongsCard()
        audio.play()
        forward.style.opacity = 1
        backward.style.opacity = 1
        playAndPauseBtn.innerHTML = `<i class="ri-pause-mini-fill"></i>`



    } else {
        forward.style.opacity = 0.4

    }
})

backward.addEventListener("click", () => {
    if(selected > 0 ){
        selected--;
        printSongsCard()
        audio.play()
        backward.style.opacity = 1
        forward.style.opacity = 1
        playAndPauseBtn.innerHTML = `<i class="ri-pause-mini-fill"></i>`



    } else {
        backward.style.opacity = 0.4

    }
})

