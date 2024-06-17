let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassoword = document.querySelector("#valor");
let Passoword = document.querySelector("#passowrd");

let containerPassowrd= document.querySelector("#container-passoword");



let charset= "abcdefghjklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let novasenha=""; 

sizePassoword.innerHTML= sliderElement.ariaValue;

sliderElement.oninput = function(){
    sizePassoword.innerHTML=this.value;
}


function generatePassword(){
    let pass= "";
    for(let i=0, n = charset.length ;i < sliderElement.value; i++){
        pass+= charset.charAt(Math.floor (Math.random()*n));
    }
    containerPassowrd.classList.remove("hide");
   Passoword.innerHTML = pass;
   novasenha= pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novasenha);
}