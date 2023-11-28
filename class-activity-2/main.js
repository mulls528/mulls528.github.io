
let container = document.querySelector(".wrapper"); 
let dateDiv = document.createElement("div")

function displaydate (){
    let date = new Date();
    container.appendChild(dateDiv);
    dateDiv.classList.add ("time");
    dateDiv.innerHTML = date;
};

function clearPage (){
    dateDiv.innerHTML = " ";
}

displaydate();

let button = document.querySelector("button"); 

button.addEventListener("click", clearPage);
button.addEventListener("click",displaydate);

