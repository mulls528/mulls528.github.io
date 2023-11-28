let date = new Date();
console.log (date);
let container = document.querySelector(".wrapper"); 
function displaydate (){
    let dateDiv = document.createElement("div")
    container.appendChild(dateDiv);
    dateDiv.classList.add ("time");
    dateDiv.innerHTML = date;
};
displaydate();
