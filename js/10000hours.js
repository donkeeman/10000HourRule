var goal = document.getElementById("goalInput");
var time = document.getElementById("timeInput");
var getResultButton = document.getElementById("getResultButton");
var result = document.getElementById("result");
var goalValue = document.getElementById("goalValue");
var timeValue = document.getElementById("timeValue");

getResultButton.onclick = function(){
    if(!goal.value || !time.value){
        return;
    }
    goalValue.innerHTML = goal.value;
    timeValue.innerHTML = Math.floor(10000 / parseInt(time.value));
    result.classList.remove("hide");
}

