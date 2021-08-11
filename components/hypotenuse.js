const perpendicularElement = document.querySelector("#perpendicular");
const baseElement = document.querySelector("#base");
const btnSubmitPandB = document.querySelector("#btn-submit-PandB");
const log = (whatToLog) => console.log(...whatToLog);

//message element is declared in sumAngles.js file 
btnSubmitPandB.addEventListener('click',function(){
    let hypotenuse =Math.sqrt(Math.pow(Number(perpendicularElement.value),2) + Math.pow(Number(baseElement.value),2))
    message.innerText = "Hypotenuse is "+hypotenuse 
})

