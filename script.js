let num1 = 10;
let num2 = 14;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sum = document.getElementById("sum-el");

function add(){
    let total = num1 + num2;
    sum.textContent = "Sum: " + total
}

function subtract(){
    let total = num1 - num2;
    sum.textContent = "Sum: " + total
}

function multiply(){
    let total = num1 * num2;
    sum.textContent = "Sum: " + total
}

function divide(){
    let total = num1 / num2;
    sum.textContent = "Sum: " + total
}