let a = document.getElementById("num1")
let b = document.getElementById("num2")
let sum = document.getElementById("sum-el")



function add(){
    result = parseInt(a.value) + parseInt(b.value)
    sum.textContent += result
}
function subtract(){
    result = parseInt(a.value) - parseInt(b.value)
    sum.textContent += result 
}
function divide(){
    result = parseInt(a.value) / parseInt(b.value)
    sum.textContent += result
}
function multiply(){
    result = parseInt(a.value) * parseInt(b.value)
    sum.textContent += result
}