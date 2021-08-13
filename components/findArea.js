const areaButtonObj = {
 HalfBaseHeightButton:document.querySelector("#half-base-height"), 
 withHypotenuseButton : document.querySelector("#with-hypotenuse"), 
 allSidesGivenButton : document.querySelector("#all-sides"),
 eqilatralTriangleButton : document.querySelector("#equilateral-triangle"),
 givenAnAngleButton : document.querySelector("#with-angle"),
}
const areaDivObj = {
    HalfBaseHeight: document.querySelector(".base-height"), 
    withHypotenuse : document.querySelector(".hypo-perpendi"), 
    allSidesGiven : document.querySelector(".all-sides-area"),
    eqilatralTriangle : document.querySelector(".equivalent-triangle-area"),
    givenAnAngle : document.querySelector(".given-an-angle-toArea"),
}
clearDivs(areaDivObj)
for(let key in areaButtonObj){
    displayDivBasedOnButtonClicked(key,areaDivObj,areaButtonObj)
}

//logic 1
const lg1Base = document.querySelector("#base-for-area");
const lg1Height = document.querySelector("#height-for-area");
const btnArea1 = document.querySelector("#submit-area1");
btnArea1.addEventListener('click',function(){
    if(lg1Base.value && lg1Height.value){
        message.innerText = "Area is "+0.5*lg1Base.value*lg1Height.value
    }else{
        message.innerText = "Enter Both Height and Base"
    }
})

//logic 2
const lg2Hypotenuse = document.querySelector("#hypotenuse-for-area");
const lg2Perpendicular = document.querySelector("#perpendicular-for-area");
const btnArea2 = document.querySelector("#submit-area2");
const pythoMeme = document.querySelector("#pythoMeme"); 
clear(pythoMeme)
btnArea2.addEventListener('click',function(){
    let lg2Base = Math.sqrt(Math.pow(Number(lg2Hypotenuse.value),2)- Math.pow(Number(lg2Perpendicular.value),2))    
    //if hypotenuse is less then lg2Base become imaginary
    if(lg2Base !== 0 && lg2Perpendicular.value){
        if(lg2Hypotenuse.value >= lg2Perpendicular.value){
            console.log("h is great")
            message.innerText = "Area is "+0.5*lg2Base*lg2Perpendicular.value
        }else{
            console.log("h is small")
        message.innerText = "Hypotenuse should be largest side of the Triangle"
        display(pythoMeme)
        }
    }else{
        message.innerText = "Enter Both Hypotenuse and Perpendicular"
    }
})

//logic3
const sideOne = document.querySelector("#Side1-for-area");
const sideTwo = document.querySelector("#Side2-for-area");
const sideThree = document.querySelector("#Side3-for-area");
const btnArea3 = document.querySelector("#submit-area3");

btnArea3.addEventListener('click',function(){
    let a = Number(sideOne.value);
    let b = Number(sideTwo.value);
    let c = Number(sideThree.value)
    let perimeter = a + b +c;
    let s = perimeter/2;
    let area3 = Math.sqrt(s*(s-a)*(s-b)*(s-c))
    if(area3){
        message.innerText = "Area is "+area3
    }else{
        message.innerText = "This triangle does not exist"
    }
})