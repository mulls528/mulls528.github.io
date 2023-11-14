function turnOnLight() {
    console.log("Lights on!");
  }
turnOnLight();

let button = document.querySelector(".button");
button.addEventListener("click", turnOnLight);


