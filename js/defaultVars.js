// variables globales

const canvas = document.getElementById ("my-canvas");
const ctx = canvas.getContext("2d") //llamar canvas

let bgCanvas= new Image();
bgCanvas.src="../images/bg.jpg";

let frames = 0; // tiempo para cambio de nivel

const pipes = []; // arreglo de enemigos

let points = 0; // puntos acomulados

let levelHard = 1; // dificultad de juego

const audio = new Audio()
// audio.src = "";  efecto

let requestId; //para validar que mi juego esta corriendo


