import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  const sujeto = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
  const verbo = ['se comío', ' se bebió', 'aplastó', 'rompió'];
  const objeto = ['mis deberes', 'mi teléfono', 'el coche'];
  const momento = ['después de clase', 'cuando yo estaba durmiendo', 'mientras hacía ejercicio', 'durante mi almuerzo', 'mientras rezaba'];
  
function generarExcusa() {
  
  let sujetoRandom = sujeto[Math.floor(Math.random() *sujeto.length)];
  let verboRandom = verbo[Math.floor(Math.random() *verbo.length)];
  let objetoRandom = objeto[Math.floor(Math.random() *objeto.length)];
  let momentoRandom = momento[Math.floor(Math.random() *momento.length)];
  
  let frase= (sujetoRandom  + " " + verboRandom + " " + objetoRandom + " " + momentoRandom);

  document.querySelector('#excusa').innerHTML = frase;

  }
  
generarExcusa();

}
