const app_elem = document.querySelector(".portafilo_father")
for(let i = 0; i < 15; i++) {
    let newli = document.createElement("li")
    let new_img = document.createElement("img")
    let new_div = document.createElement("div")
    new_div.classList.add("hide")
    let title = document.createElement("strong")
    new_img.setAttribute("src", `https://picsum.photos/id/${Math.round(Math.random() * 500)}/447/430`)
    new_img.style.width = "447px"
    new_img.style.height = "430px"
    title.textContent = "Business Process Automation"
    new_div.appendChild(title)
    newli.appendChild(new_img)
    newli.appendChild(new_div)
    app_elem.appendChild(newli)
}