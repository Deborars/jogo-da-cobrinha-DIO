let canvas = document.querySelector(".canvas");
let contexto = document.getContext("2d");

let box = 32;

function criaBG(){
  contexto.fillStyle = "blue";
  contexto.fillRect(0, 0, 16*box, 16*box);
}

criaBG();

alert("ola");