import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here 
  const palos = ["♠", "♣", "♥", "♦"]
  const numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const paloSeleccionado = palos[Math.floor(Math.random() *palos.length)]
  const numeroSeleccionado = numeros[Math.floor(Math.random()*numeros.length)]

  document.getElementById("palo1").innerHTML = paloSeleccionado;
  document.getElementById("palo2").innerHTML = paloSeleccionado;
  document.getElementById("numero").innerHTML= numeroSeleccionado;

  if(paloSeleccionado === "♠" || paloSeleccionado === "♣") {
    document.getElementById("palo1").style.color = "black";
    document.getElementById("palo2").style.color = "black";
  }
 else if(paloSeleccionado === "♥" || paloSeleccionado === "♦") {
    document.getElementById("palo1").style.color = "red";
    document.getElementById("palo2").style.color = "red";
  }

};

