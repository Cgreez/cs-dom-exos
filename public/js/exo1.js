//1 : clics

let count = document.querySelector('#exo-counter > span')
let btnClic = document.querySelector('#exo-counter >button')
let countClic = 1

btnClic.addEventListener("click", () => {
    count.textContent = `${countClic}`
    countClic++
})

//2 : move square

let parentSquare = document.querySelector("#parent-square")
let squareOn = document.getElementsByClassName("on")

parentSquare.addEventListener("click", () => {
    let squareOff = document.querySelector(".off")
    if (squareOff) {
        document.querySelector(".off").classList.replace('off', 'on')
    } else if (squareOn) {
        document.querySelector(".on").classList.replace('on', 'off')
    }
})


//3
let elements = document.querySelectorAll("h2")

let object = {
    ExoCounter: "exo 1",
    ExoMoveSquare: "exo 2", 
    ExoNumberTitles: "exo 3",
    ExoMultiClick: "exo 4",
    ExoSetColor: "exo 5",
}

let i = 0

document.addEventListener("keydown", () => {
    if (event.code == "Numpad6") {
        for (let key in object) {
            elements[i].textContent += ` : ${object[key]}`
            i++
        }
    }
})

//4



let carre = document.getElementById("multi-click")
let clic = 0

carre.addEventListener("click", () => {
    clic++
    switch (clic) {
        case 1:
            carre.style.borderRadius = "50%"
            break;
        case 2:
            carre.style.backgroundColor = "red"
            break;
        case 3:
            carre.style.borderRadius = "0%"
            carre.style.backgroundColor = "white"
            clic = 0
    }
})

//5

let colorInput = document.querySelector("#pick-color")

let text = document.querySelector("#exo-set-color > p")

colorInput.addEventListener("input", () => {
    let color = colorInput.value
    text.value = color
    text.style.color = color
})







