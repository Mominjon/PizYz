const fathers = document.querySelectorAll(".plans")


for(let i = 0; i < fathers.length; i++) {
    // const button = 
    let text = fathers[i].childNodes[3]
    let button = fathers[i].childNodes[1]
    button.addEventListener("click", (e) => {
        let test_close = text.classList.contains("hide")
        if(test_close == true){
            text.classList.remove("hide")
            text.classList.add("show")
        }else {
            text.classList.add("hide")
            text.classList.remove("show")
        }
    })
}