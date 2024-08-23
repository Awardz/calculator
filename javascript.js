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
let num = 0;
let a = 0 
let sign = ""


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
        /*
            Where the majority of work needs to be added.
            Add if statements for the other operations.
            */
        if(button.id === "+")
        {
            if(!(temp.length === 0))
                num = add(num, parseInt(temp.join("")));
            display.textContent = num;
            console.log(num)
            console.log(button.textContent)
            sign = button.textContent;
            temp = [];
        }

        if(button.id === "-")
        {
            
            if(!(temp.length === 0))
                num = subtract(num, parseInt(temp.join("")));
    
            display.textContent = num;
            console.log(num)
            console.log(button.textContent)
            sign = button.textContent;
            temp = [];
        }

        if(button.id === "*")
        {
            if(!(num === 0) && !(temp.length === 0))
                num = multiply(num, parseInt(temp.join("")));
            else 
                num = parseInt(temp.join(""));
            console.log(num)
            console.log(button.textContent)
            sign = button.textContent;
            temp = [];
        }

        if(button.id === "/")
        {
            num = divide(num, parseInt(temp.join("")));
            console.log(num)
            console.log(button.textContent)
            sign = button.textContent;
            temp = [];
        }
     
    })
    
})
/*
    Update the display and variable after this event
*/
equal.addEventListener("click", () =>
{ 
    if(sign === "+")
    {
        num = add(num, parseInt(temp.join("")));
        display.textContent = num;
        sign = ""
        temp = []
    }

    if(sign === "-")
    {
        num = subtract(num, parseInt(temp.join("")));
        display.textContent = num;
        sign = ""
        temp = []
    }

    if(sign === "*")
    {
        num = multiply(num, parseInt(temp.join("")));
        display.textContent = num;
        sign = ""
        temp = []
    }

    if(sign === "+")
    {
        num = add(num, parseInt(temp.join("")));
        display.textContent = num;
        sign = ""
        temp = []
    }
});


