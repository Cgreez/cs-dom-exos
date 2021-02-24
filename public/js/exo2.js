// exo page 2



//1


let button = document.querySelector(" #exo-copy-img > button ")

let container = document.getElementById("mignon-container")

let image = document.querySelector("#mignon-container > img")



button.addEventListener("click", () => {
    let cloneImage = image.cloneNode()
    container.appendChild(cloneImage)

})


//2

let exo2img = document.querySelectorAll("#mignon2-container *")
console.log(exo2img.length);

exo2img.forEach(e => {
    e.addEventListener("click", () => {
        e.remove()
        if (exo2img.length == 0) {
            setTimeout (()=>{
                container.appendChild(cloneImage)
            },2000)
        }
    })
})

//3

let ul = document.querySelector("#exo-add-li > ul")

let li3 = document.querySelectorAll("#exo-add-li > ul > li")[1]

let newLi = document.createElement("li")

newLi.textContent = "li num 2"

ul.insertBefore(newLi, li3)

ul.insert



//4

/* let btn = document.querySelector("#exo-li-from-input > button")
let textInput = document.querySelector("#exo-li-from-input > input")
let list = document.querySelector("#exo-li-from-input > ul")
let leText = textInput.value
let newText = document.createElement("li")
newText.textContent = leText

.addEventListener("click", () => {
    list.appendChild(newText)
})
 */


