let burger_body = document.getElementsByClassName("burder_body")
let burger_close_button = document.getElementsByClassName("burder_body_button_close")
let burger_open_button = document.getElementsByClassName("burger_open_button")

burger_body[0].style.marginLeft  = "100%"


burger_close_button[0].addEventListener("click", (e) => {
    burger_body[0].style.marginLeft  = "100%"
})

burger_open_button[0].addEventListener("click", (e) => {
    burger_body[0].style.marginLeft  = "0%"
})