const addTodo = document.querySelector(".add-todo")
const todoContain = document.querySelector("#todo-contain")
const todoHolder = document.querySelector(".todo-holder")

let blankHtml = ""

addTodo.addEventListener("click", (e) => {
    e.preventDefault() ;
    if(todoContain.value.length < 1){
        alert("You should write something")
    } else if(todoContain.value.length >= 1){
        let li = document.createElement("li");
        li.innerText = todoContain.value;
        todoHolder.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
        todoContain.value = ""
        sItem()
        
    }

})

todoHolder.addEventListener("click",(e) => {
    if(e.target.tagName == "SPAN"){
       e.target.parentElement.remove();
       sItem()
    }
})

let sItem = () => {
    localStorage.setItem("todoElement", todoHolder.innerHTML)
}

let gItem = () => {
   todoHolder.innerHTML=localStorage.getItem("todoElement")
}
gItem()