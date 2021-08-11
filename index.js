
const buttonObj = {
 triangleCheckButton : document.querySelector("#btn-triangle-really"),
 findHypotenusButton : document.querySelector("#btn-find-hypotenus"),
 findAreaButton : document.querySelector("#btn-find-area"),
 quizButton : document.querySelector("#btn-quiz"),
}

const divObj = {
 triangleCheck : document.querySelector(".triangle-check"),
 quiz : document.querySelector(".quiz"),
 findHypotenus : document.querySelector(".give-me-hypotenuse"),
 findArea : document.querySelector(".find-area"),
}

for(let key in buttonObj){
    displayDivBasedOnButtonClicked(key)
}

// const allDiv = [triangleCheck,quiz,findHypotenus,findArea];
// const allButton = [triangleCheckButton,quizButton,findHypotenusButton,findAreaButton]

// allButton.map(ele=>displayDivBasedOnButtonClicked(ele))

function displayDivBasedOnButtonClicked(btnName){
    buttonObj[btnName].addEventListener('click',function(){
        clearDivs()   
        //convert variable name btnName to string form(Hint use object)
       display(eval(divObj[btnName.replace(/(\w+)Button/g,"$1")]))
    })    
}
const clear = whatToClear => whatToClear.style.display = "none";
const display= whatToDisplay => whatToDisplay.style.display = "block";

const clearDivs = () => {
    for(let key in divObj){
        clear(divObj[key])
    }
}
clearDivs()
// const showWhatIsClick = () => {}


