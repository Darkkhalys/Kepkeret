import './style.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

function url()
{
  let url=document.getElementById("url").value
  document.getElementById("kep").src=url

}
function szelesseg(){
  var szelesseg =document.getElementById("kepszelesseg").value
  szelesseg=parseFloat(szelesseg)
  kep.style.width=szelesseg+"px";

}

function border(){
  var keret=document.getElementById("kepkeretszelessege").value
  keret = parseFloat(keret)
  let szin = document.getElementById("kepkeretszine").value
  kep.style.border=keret+"px solid  "+szin;
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}







function init(){
  const gomb=document.getElementById("Button")
  const sotetgomb=document.getElementById("Sotet")
  gomb.addEventListener("click",url)
  gomb.addEventListener("click",szelesseg)
  gomb.addEventListener("click",border)
  sotetgomb.addEventListener("click",myFunction)

}







document.addEventListener("DOMContentLoaded",init())