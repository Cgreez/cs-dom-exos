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
let container2 = document.querySelector("#mignon2-container")

let exo2img = document.querySelectorAll("#mignon2-container *")
console.log(exo2img.length);

exo2img.forEach(e => {
    e.addEventListener("click", () => {
        e.remove()
        if(document.querySelectorAll("#mignon2-container>img").length == 0){
            setTimeout(() => {
                for(let i = 0; i < 5; i++){
                    let img = document.createElement("img")
                    img.src = "../images/mignons2.gif"
                    img.width = "200"
                    container2.appendChild(img)
                }
            }, 1000)
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

let inputt = document.querySelector('.form-control');
let buttont = document.querySelector('.form-row > div > button');
let listet = document.querySelector('#exo-li-from-input>ul');
buttont.addEventListener('click', () => {
    let newLit = document.createElement('li');
    newLit.innerText = inputt.value;
    listet.insertBefore(newLit, document.querySelectorAll("#exo-li-from-input > ul > li")[0]);
    inputt.value = '';
})



