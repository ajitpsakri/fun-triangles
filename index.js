//nav
const triangleCheckButton = document.querySelector("#btn-triangle-really");
const findHypotenusButton = document.querySelector("#btn-find-hypotenus");
const findAreaButton = document.querySelector("#btn-find-area");
const quizButton = document.querySelector("#btn-quiz");

//divisions
const triangleCheck = document.querySelector(".triangle-check");
const quiz = document.querySelector(".quiz");
const findHypotenus = document.querySelector(".give-me-hypotenuse");
const findArea = document.querySelector(".find-area");

const allDiv = [triangleCheck,quiz,findHypotenus,findArea];
const allButton = [triangleCheckButton,quizButton,findHypotenusButton,findAreaButton]

allButton.map(ele=>displayDivBasedOnButtonClicked(ele))

console.log(Object.keys(triangleCheck))
function displayDivBasedOnButtonClicked(btnName){
    
    btnName.addEventListener('click',function(btnName){
        allDiv.map(ele=>clear(ele))
        //convert variable name btnName to string form(Hint use object)
        console(eval(btnName.replace(/(\w+)Button/g,"$1")))
        // display(eval(btnName.replace(/(\w+)Button/g,"$1")))
    })    
}

// const showWhatIsClick = () => {}
const clear = whatToClear => whatToClear.style.display = "none";
const display= whatToDisplay => whatToDisplay.style.display = "block";

