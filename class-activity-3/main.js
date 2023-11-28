
let container = document.querySelector(".wrapper"); 
let dateDiv = document.createElement("div");
let otherText = document.createElement("span");
let colors = ["red", "lime", "orange", "lightcyan", "mediumpurple", "orangered", "palegreen", "yellow" ];

function displaydate (){
    let date = new Date();
    let randColor = colors[Math.floor(Math.random()*(colors.length-1))];
    container.appendChild(dateDiv);
    dateDiv.classList.add ("time");
    dateDiv.innerHTML = date;
    container.appendChild(otherText);
    otherText.classList.add ("othertext");
    otherText.innerHTML = "Right now it is...";
    dateDiv.style.color = randColor;
};


function clearPage (){
    dateDiv.innerHTML = " ";
}

displaydate();
setInterval(displaydate, 1000);

