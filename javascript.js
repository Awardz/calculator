const add = function(a, b)
{
    return a + b;
}

const subtract = function(a, b)
{
    return a - b;
}

const multiply = function(a, b)
{
    return a * b;
}

const divide = function(a, b)
{
    return a / b;
}

const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const equal = document.querySelector("#equal");
let temp = [];
let b = 0;
let a = 0 
let sign = ""
let finalA = 0;

    numbers.forEach((button) =>
    {
        button.addEventListener("click", () =>
        {
            temp.push(parseInt(button.id));
            console.log(button.id)
            display.textContent = temp.join("");
            
        })
    })



operators.forEach((button) =>
{

    button.addEventListener("click", () =>
    {
        if(button.id === "+")
        {
            //finalA += parseInt(temp.join(""));
            finalA = add(finalA, parseInt(temp.join("")));
            console.log(finalA)
            console.log(button.textContent)
            sign = button.textContent;
            temp = [];
            
        }
       

        
    })
    
})
if(equal)
{

equal.addEventListener("click", () =>
{
    
    console.log(add(finalA, parseInt(temp.join(""))));
});
}

