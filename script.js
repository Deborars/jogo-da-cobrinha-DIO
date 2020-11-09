let canvas = document.querySelector("#canvas");
let contexto = canvas.getContext("2d");

let box = 32;

function criaBG(){
  contexto.fillStyle = "lightgreen";
  contexto.fillRect(0, 0, 16*box, 16*box);
}

criaBG();

