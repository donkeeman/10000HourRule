let goal = document.getElementById("goalInput");
let time = document.getElementById("timeInput");
const getResultButton = document.getElementById("getResultButton");
const result = document.getElementById("result");
let goalValue = document.getElementById("goalValue");
let timeValue = document.getElementById("timeValue");
const goButton = document.getElementById("goButton");
const returnButton = document.getElementById("returnButton");
const modal = document.getElementById("modal");

getResultButton.onclick = function(){
    if(!goal.value || !time.value){
        return;
    }
    goalValue.innerHTML = goal.value;
    timeValue.innerHTML = Math.floor(10000 / parseInt(time.value));
    result.classList.remove("hide");
}

goButton.onclick = function(){
    modal.classList.remove("hide");
}

returnButton.onclick = function(){
    modal.classList.add("hide");
}