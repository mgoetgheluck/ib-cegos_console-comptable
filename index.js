'use strict';
//Stores values and operators entered inside calculatrice until equal button
let currentValues = [];
let isEqual = false;
const setInputValue = function(newVal){
    document.getElementById("inputCalculatrice").value = newVal;
}

const getInputValue = function() {
    return document.getElementById("inputCalculatrice").value;
}

const initButtonsHandlers = function(){
    document.getElementById("button+").addEventListener("click", buttonPlusHandler);
    document.getElementById("button-").addEventListener("click", buttonMoinsHandler);
    document.getElementById("button*").addEventListener("click", buttonMultiplyHandler);
    document.getElementById("button/").addEventListener("click", buttonDivideHandler);
    document.getElementById("button.").addEventListener("click", buttonFloatHandler);
    document.getElementById("button=").addEventListener("click", buttonEqualHandler);

    document.getElementById("button1").addEventListener("click", button1Handler);
    document.getElementById("button2").addEventListener("click", button2Handler);
    document.getElementById("button3").addEventListener("click", button3Handler);
    document.getElementById("button4").addEventListener("click", button4Handler);
    document.getElementById("button5").addEventListener("click", button5Handler);
    document.getElementById("button6").addEventListener("click", button6Handler);
    document.getElementById("button7").addEventListener("click", button7Handler);
    document.getElementById("button8").addEventListener("click", button8Handler);
    document.getElementById("button9").addEventListener("click", button9Handler);
    document.getElementById("button0").addEventListener("click", button0Handler);
}

const buttonPlusHandler = function(){
    console.log("Adding", currentValues);
    applyMathsOperator();
    currentValues.push('+');
}

const buttonMoinsHandler = function() {
    console.log("Moins", currentValues);
    applyMathsOperator();
    currentValues.push('-');
}

const buttonMultiplyHandler = function() {
    console.log("Multiplying", currentValues);
    applyMathsOperator();
    currentValues.push('*');
}

const buttonDivideHandler = function () {
    console.log("Divide", currentValues);
    applyMathsOperator();
    currentValues.push('/');
}

const buttonFloatHandler = function() {
    console.log("Float handler");   
    let value = getInputValue();
    if (!value.includes('.')){
        addValue('.');
    }
}

const buttonEqualHandler = function() {
    console.log("Equal Handler");
    applyMathsOperator();
    let currentOperator;
    let resultat = 0;
    for(let i= 0; i < currentValues.length; i++) {
        let value = currentValues[i];
        console.log("Equal Handler value"+value);
        let number = parseFloat(value);
        console.log("Equal Handler number"+isNaN(number));
        if (!isNaN(number)){
            

            console.log("notNaN", number);
            if(resultat == 0){
                resultat = number;
            }
            if(currentOperator != null){
                switch(currentOperator){
                    case '+':
                        resultat = resultat + number;
                        console.log("adding")
                        break;
                    case '-':
                        resultat = resultat - number;
                        console.log("minus")

                        break;
                    case '*':
                        resultat = resultat * number;
                        console.log("mult")

                        break;
                    case '/':
                        resultat = resultat / number;
                        console.log("divide")

                        break;
                    default:
                        console.log("adddefaulting")

                }
                currentOperator = null;
            }
        }
        else {
            console.log("currentOperator", value);
            currentOperator = value;
        }
    }
    setInputValue(resultat);
    currentValues= [];
    isEqual = true;
}

const button1Handler = function() {
    addValue(1);
}

const button2Handler = function() {
    addValue(2);
}

const button3Handler = function() {
    addValue(3);
}

const button4Handler = function() {
    addValue(4);
}

const button5Handler = function() {
    addValue(5);
}

const button6Handler = function() {
    addValue(6);
}

const button7Handler = function() {
    addValue(7);
}

const button8Handler = function() {
    addValue(8);
}

const button9Handler = function() {
    addValue(9);
}

const button0Handler = function() {
    addValue(0);
}

const addValue = function(nombre) {
    if(isEqual) {
        setInputValue("");
        isEqual = false;
    }
    let inputValue = getInputValue();
    setInputValue(inputValue + nombre);
}

const applyMathsOperator = function() {
    currentValues.push(getInputValue());
    setInputValue("");
}

window.onload = function(){
    initButtonsHandlers();
}
