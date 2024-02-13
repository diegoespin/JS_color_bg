let maCouleur = document.querySelector("input")
let monBouton = document.querySelector("button")
let monBody = document.querySelector("body")

monBouton.addEventListener("click", function(){
    monBody.style.background = maCouleur.value 
})