document.querySelector("#plus").addEventListener('click', add)
document.querySelector("#minus").addEventListener('click', subtract)
document.querySelector("#multiply").addEventListener('click', multiply)
document.querySelector("#divide").addEventListener('click', divide)
let displayValue = 0


//add function that runs when the plus is clicked
function add(x,y){
    console.log('plus')
    return x+y
    
}

function subtract(x,y){
    return x-y
}

function multiply(x,y){
    return x*y
}

function divide(x,y){
    console.log('divide')
    return x*y
}
