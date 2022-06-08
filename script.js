let numbersArray = [];

function add (num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2
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
            return divide(num1,num2)
    }
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
let numberButtons = document.querySelectorAll(".number")
numberButtons.forEach(number =>{
    number.addEventListener('click', () =>{
        numbersArray.push(number.innerText)
        displayScreen(numbersArray);
    })
})
