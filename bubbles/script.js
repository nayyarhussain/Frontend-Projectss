const bubbles = document.querySelector(".bubbles")
let ranNum = ""
let hitRn = ""
let score = 0;
let bubbleNum = 0;

const printBubbles = () => {
    let clutter = "";

    
    for(let i = 1; i< 120; i++){
        ranNum = Math.floor(Math.random()*10)

       clutter+= `<div class="bubble"><h6 class="bubble">${ranNum}</h6></div>`;
    }

    bubbles.innerHTML = clutter;

}

const hitNum = () => {
    hitRn = Math.floor(Math.random()*10)
    document.querySelector(".hit").textContent = hitRn;
}



const scoreUpdate = () => {
    score += 10;
    document.querySelector(".score").textContent = score;
}

const bubbleValue = (e) => {
    if(e.target.classList.contains("bubble")){
        
         bubbleNum =  Number(e.target.textContent);    
    }
    if(bubbleNum === hitRn){
        scoreUpdate()
        printBubbles()
       
       
    }
}

bubbles.addEventListener("click",(e)=> {
    bubbleValue(e)
})

   





const time = document.querySelector(".time")



let timer = 10;

const timerFunc = () => {
   let intervalID =  setInterval(function() {
            if(timer >=  0){
            time.textContent = timer-- 
        } else {
            bubbles.innerHTML = `<h1>End Game You scored ${score}</h1>`
            clearInterval(intervalID)
        }

    },1000)
}
 timerFunc()
 hitNum()
printBubbles()
