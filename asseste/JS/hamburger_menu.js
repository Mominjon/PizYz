let burger_body = document.querySelector(".hamburger_menu .burder_body")
let burger_close_button = document.querySelector(".hamburger_menu .burder_body button")
let burger_open_button = document.querySelector(".hamburger_menu .burger_open_button")

burger_body.style.marginLeft  = "100%"


burger_close_button.addEventListener("click", (e) => {
    burger_body.style.marginLeft  = "100%"
})

burger_open_button.addEventListener("click", (e) => {
    burger_body.style.marginLeft  = "0%"
})