const modo = document.querySelector("button");
const color = document.querySelector("body");
const claro = document.querySelector(".claro");
const oscuro = document.querySelector(".oscuro");

if(localStorage.getItem("modo") === "oscuro"){
  color.classList.add("dark");
  oscuro.classList.add("no");
  claro.classList.remove("no");
}

modo.addEventListener("click", () => {

  color.classList.toggle("dark");
  oscuro.classList.toggle("no");
  claro.classList.toggle("no");


  if(color.classList.contains("dark")){
    localStorage.setItem("modo", "oscuro");
  } else {
    localStorage.setItem("modo", "claro");
  }

});