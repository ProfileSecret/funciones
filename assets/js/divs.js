//ESTILO DIVS-------------------------------------------------------------
const divAzul = document.querySelector("#azul");
const divRojo = document.querySelector("#rojo");
const divAmarillo = document.querySelector("#amarillo");
const divVerde = document.querySelector("#verde");

divAzul.style.height = "200px";
divAzul.style.width = "200px";
divAzul.style.backgroundColor = "blue";
divAzul.style.margin = "10px 0";

divRojo.style.height = "200px";
divRojo.style.width = "200px";
divRojo.style.backgroundColor = "red";
divRojo.style.margin = "10px 0";

divAmarillo.style.height = "200px";
divAmarillo.style.width = "200px";
divAmarillo.style.backgroundColor = "yellow";
divAmarillo.style.margin = "10px 0";

divVerde.style.height = "200px";
divVerde.style.width = "200px";
divVerde.style.backgroundColor = "green";
divVerde.style.margin = "10px 0";

//FUNCION NEGRO DIV-----------------------------------------------------------
const negro = (divColor) => (divColor.target.style.backgroundColor = "black");

divAzul.addEventListener("click", negro);
divRojo.addEventListener("click", negro);
divAmarillo.addEventListener("click", negro);
divVerde.addEventListener("click", negro);

//DIVS VARIABLE COLOR-----------------------------------------------------------
const divVar = document.getElementById("key");

divVar.style.height = "200px";
divVar.style.width = "200px";
divVar.style.border = "1px solid black";
divVar.style.margin = "10px 0";

const a = "pink";
const s = "orange";
const d = "skyblue";
const q = "purple";
const w = "grey";
const e = "brown";

const crearDiv = (color) => {
  const body = document.getElementById("contenedor");
  const newDiv = document.createElement("div");
  newDiv.style.height = "200px";
  newDiv.style.width = "200px";
  newDiv.style.backgroundColor = color;
  newDiv.style.margin = "10px 0";
  body.appendChild(newDiv);
};

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    key.style.backgroundColor = a;
  } else if (event.key === "s" || event.key === "S") {
    key.style.backgroundColor = s;
  } else if (event.key === "d" || event.key === "D") {
    key.style.backgroundColor = d;
  } else if (event.key === "q" || event.key === "Q") {
    crearDiv(q);
  } else if (event.key === "w" || event.key === "W") {
    crearDiv(w);
  } else if (event.key === "e" || event.key === "E") {
    crearDiv(e);
  }
});
