let a = document.getElementById("num1")
let b = document.getElementById("num2")
let sum = document.getElementById("sum-el")



function add(){
    result = parseInt(a.value) + parseInt(b.value)
    sum.textContent += result
    a.value = ""
    b.value = ""
}
function subtract(){
    result = parseInt(a.value) - parseInt(b.value)
    sum.textContent += result 
    a.value = ""
    b.value = ""
}
function divide(){
    result = parseInt(a.value) / parseInt(b.value)
    sum.textContent += result
    a.value = ""
    b.value = ""
}
function multiply(){
    result = parseInt(a.value) * parseInt(b.value)
    sum.textContent += result
    a.value = ""
    b.value = ""
}