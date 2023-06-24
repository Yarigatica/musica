let numeroBotones = document.querySelectorAll("#boton").length;
let sonido;

for (let i = 0; i < numeroBotones; i++) {
  document.querySelectorAll("#boton")[i].addEventListener("click", function () {
    reproducirSonido(this.innerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  reproducirSonido(event.key);
});

const reproducirSonido = (tecla) => {
  tecla == "a"
    ? (sonido = new Audio("sonidos/crash.mp3").play())
    : tecla == "s"
    ? (sonido = new Audio("sonidos/kick-bass.mp3").play())
    : tecla == "d"
    ? (sonido = new Audio("sonidos/snare.mp3").play())
    : tecla == "f"
    ? (sonido = new Audio("sonidos/tom-1.mp3").play())
    : tecla == "j"
    ? (sonido = new Audio("sonidos/tom-2.mp3").play())
    : tecla == "k"
    ? (sonido = new Audio("sonidos/tom-3.mp3").play())
    : tecla == "l"
    ? (sonido = new Audio("sonidos/tom-4.mp3").play())
    : "";
};
