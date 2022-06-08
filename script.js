let numbersArray = [];
num1 = [];
num2 = [];
let operator = '';
let decimal = false;

function add (num1,num2){
    return [Math.round((+num1 + +num2)*100)/100];
}

function subtract(num1,num2){
    return [Math.round((+num1 - +num2)*100)/100];
}

function multiply(num1,num2){
    return [Math.round((+num1 * +num2)*100)/100];
}

function divide(num1,num2){
    return [Math.round((+num1 / +num2)*100)/100];
}

function operate(operator, num1, num2){
    switch(operator){
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1,num2);
        case '*':
            return multiply(num1,num2);
        case '/':
            if(num2 == 0){
                console.log("Deleting all data, can't divide by zero")
                clear();
            }else{
                return divide(num1,num2)
            }      
    }
}

document.querySelector('.clear').addEventListener('click', clear)
function clear(){
    numbersArray = [];
    num1 = [];
    num2 = [];
    operator = '';
    document.querySelector('.screen').innerText = 0;
}


function displayScreen(array){
    let screen = document.querySelector('.screen');
    screen.innerText = 0;
    array.forEach(item => {
        if(screen.innerText == 0){
            return screen.innerText = item;
        }
        return screen.innerText += item
    })
}

//let's user enter numbers that is stored in an array while also
//displaying the number onto the screen
let numberButtons = document.querySelectorAll(".number")
numberButtons.forEach(number =>{
    number.addEventListener('click', () =>{
        if(numbersArray.length < 15){
        numbersArray.push(number.innerText)
        displayScreen(numbersArray);
        }
    })
})

//if a user press an operator button, the operation is stored in
//an operator variable and the current numbers array is stored in num1
//if the user presses the operator while num1 exists and there are
//numbers in the numbers array, it will perform the existing operation
let operatorButton = document.querySelectorAll('.operator');
operatorButton.forEach(item =>{
    item.addEventListener('click',() =>{
        if(num1.length > 0 && numbersArray.length > 0){
            num2 = numbersArray.join('');
            result = operate(operator,num1,num2)
            displayScreen(result);
            num1 = result.join('');
            numbersArray = [];
            operator = item.innerText;
            decimal = false;
        }else if(num1.length > 0 && operator === ''){
            operator = item.innerText;
        }else{
            operator = item.innerText;
            num1 = numbersArray.join('');
            numbersArray = [];
            decimal = false;
        }
    })
})

//calculates and displays the results of the two numbers and the operator chosen
let equal = document.querySelector('.operate');
equal.addEventListener('click', () =>{
    if(num1.length > 0 && operator!== '' && numbersArray.length >0){
        num2 = numbersArray.join('');
        let result = operate(operator,num1,num2)
        if(result) displayScreen(result)
        num1 = result.join('');
        numbersArray = [];
        operator = '';
    }
})

const decimalButton = document.querySelector('.decimal');
    decimalButton.addEventListener('click',()=>{
    if(numbersArray.length < 15 && decimal === false){
        numbersArray.push(decimalButton.innerText)
        displayScreen(numbersArray)
    }
    decimal = true;
})