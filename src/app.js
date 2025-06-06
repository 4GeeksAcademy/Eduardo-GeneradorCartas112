import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  function generadorCartas() {

    //write your code here 
    const palos = ["♠", "♣", "♥", "♦"]
    const numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const paloSeleccionado = palos[Math.floor(Math.random() * palos.length)]
    const numeroSeleccionado = numeros[Math.floor(Math.random() * numeros.length)]

    const palo1 = document.getElementById("palo1")
    palo1.innerHTML = paloSeleccionado;
    const palo2 = document.getElementById("palo2")
    palo2.innerHTML = paloSeleccionado;
    const numero = document.getElementById("numero")
    numero.innerHTML = numeroSeleccionado;

    const color = (paloSeleccionado === "♠" || paloSeleccionado === "♣") ? "black" : "red";
    palo1.style.color = color;
    palo2.style.color = color;
  }

generadorCartas();

setInterval(generadorCartas, 5000)

};

