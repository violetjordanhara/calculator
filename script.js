//event listeners for operator buttons
document.querySelector("#plus").addEventListener('click', add)
document.querySelector("#minus").addEventListener('click', subtract)
document.querySelector("#multiply").addEventListener('click', multiply)
document.querySelector("#divide").addEventListener('click', divide)

//event listeners for number buttons
document.querySelector("#zero").addEventListener('click', zero)

let displayValue = 0


//operator functions. returns the result and also adds operators to display
function add(x,y){
    console.log('plus')
    document.querySelector('h3').innerHTML="+"
    return x+y
    
}

function subtract(x,y){
    document.querySelector('h3').innerHTML="-"
    return x-y
}

function multiply(x,y){
    document.querySelector('h3').innerHTML="*"
    return x*y
}

function divide(x,y){
    console.log('divide')
    document.querySelector('h3').innerHTML="/"
    return x*y
}
