const divAzul = document.querySelector("#azul");
const divRojo = document.querySelector("#rojo");
const divAmarillo = document.querySelector("#amarillo");
const divVerde = document.querySelector("#verde");
const key = document.querySelector("#key");

const cambiarNegro = (div) => {
  div.addEventListener("click", () => {
    div.style.backgroundColor = "black";
  });
};

cambiarNegro(divAzul);
cambiarNegro(divRojo);
cambiarNegro(divAmarillo);
cambiarNegro(divVerde);

// ---------------------------------------------------------------------

const crearDiv = (color) => {
  const body = document.querySelector("body");
  const newDiv = document.createElement("div");
  body.appendChild(newDiv);
  newDiv.style.height = "200px";
  newDiv.style.width = "200px";
  newDiv.style.backgroundColor = color;
  return crearDiv;
};

document.addEventListener("keydown", (e) => {
  if (e.key === "a") {
    key.style.backgroundColor = "pink";
  } else if (e.key === "s") {
    key.style.backgroundColor = "orange";
  } else if (e.key === "d") {
    key.style.backgroundColor = "skyblue";
  } else if (e.key === "q") {
    crearDiv("purple");
  } else if (e.key === "w") {
    crearDiv("grey");
  } else if (e.key === "e") {
    crearDiv("brown");
  }
});
