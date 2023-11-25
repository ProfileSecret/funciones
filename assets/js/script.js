const texto = document.querySelector("#ele1");
const color = ele1.style.backgroundColor = "green"

const pintar = (amarillo = "yellow") => {
  texto.style.backgroundColor = amarillo;
};

ele1.addEventListener("click", function() {
    pintar()
})

// const pintar2 = () => {
//     texto.style.backgroundColor = "yellow";
//   };

// ele1.addEventListener("click", pintar2)
    