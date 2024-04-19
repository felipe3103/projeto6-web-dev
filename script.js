//Validaçao de login

function validar(){
    //declarando a variavel
    let usuario =document.getElementById("usuario").value;
    let senha =document.getElementById("senha").value;
    if(usuario == "Admin" && senha === "12345"){
        window.open("dashboard.html")
    }else{
        alert("usuario e senha inválidos")
    }
}



//criando um slideshow automatico

//declarando as variaveis

let imagens=['./img/Carros1.jpg','./img/Carros2.jpg','./img/Carros3.jpg'];
let index=0;
let time=3000;

function slideShow(){
    document.getElementById("imgbanner").src=imagens[index];
    index++;
    if(index == imagens.length){
        index=0;
    }
    setTimeout("slideShow()", time);
}
slideShow();