const main =  document.querySelector(".main")

const number = document.getElementById("number");

const valuePass = (e) => {
    console.log(number.value)
    if(e.target.classList.contains("button")){
        number.value += e.target.innerText;
    }
     else if(e.target.classList.contains("answer")){
        number.value = eval(number.value)
    } 
    else if(e.target.classList.contains("ac")){
        number.value = " "
    }
    else if(e.target.classList.contains("del")){

        number.value = number.value.toString().slice(0 , -1)
    }

   
}




main.addEventListener("click",(e) => {
    valuePass(e);
})





