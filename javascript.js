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
const clear = document.querySelector("#clear");
const allClear = document.querySelector("#allclear");
const buttons = document.querySelectorAll("button");

let temp = [];
let num = 0;
let a = 0 
let sign = ""


    numbers.forEach((button) =>
    {
        button.addEventListener("click", () =>
        {
            if(sign === "" && !(num === 0))
                num = 0;
            temp.push(parseInt(button.id));
            console.log(button.id)
            display.textContent = temp.join("");
            
        })
    })



operators.forEach((button) =>
{
    button.addEventListener("click", () =>
    {
        if(sign === "" && num === 0)
            sign = button.textContent;
    

        if(button.id === "+")
        {
            calculate();
            sign = button.textContent;
        }

        if(button.id === "-")
        {
            calculate();
            sign = button.textContent;
        }

        if(button.id === "*")
        {
            if(temp.length === 0)
                temp.push(1)

            calculate();
            sign = button.textContent;
           
        }

        if(button.id === "/")
        {
            calculate();
    
            sign = button.textContent;
          
        }
     
    })
    
})

equal.addEventListener("click", () =>
{ 
    if(sign === "+")
        num = add(num, parseInt(temp.join("")));
 
    if(sign === "-")
        num = subtract(num, parseInt(temp.join("")));

    if(sign === "*")
        num = multiply(num, parseInt(temp.join("")));
    if(sign === "/")
        num = divide(num, parseInt(temp.join("")));
       
    display.textContent = num;
    sign = ""
    temp = []
});

clear.addEventListener("click", () =>
{
    temp = [];
    display.textContent = 0;
})

allClear.addEventListener("click", () =>
{
    num = 0;
    temp = [];
    sign = "";
    display.textContent = 0;
})



function calculate()
{
    if(sign === "+")
        if(!(temp.length === 0))
            num = add(num, parseInt(temp.join("")));
    
    if(sign === "-")
        if(!(temp.length === 0))
            num = Math.abs(subtract(num, parseInt(temp.join(""))));

    if(sign === "*")
    {
        if(!(temp.length === 0) && !(num === 0))
            num = multiply(num, parseInt(temp.join("")));
        else
            num = parseInt(temp.join(""))
    }

    if(sign === "/")
        if(!(temp.length === 0) && !(num === 0))
            num = divide(num, parseInt(temp.join("")));
        else
            num = parseInt(temp.join(""))

        
        

    console.log(num)
    display.textContent = num;
    temp = [];
        
}

function hover()
{
    buttons.forEach((button) => 
    {   
        button.addEventListener("mouseenter", () =>
        {
            button.style.background = "yellow";
        })

        button.addEventListener("mouseleave", () =>
        {
            button.style.background = "black";
        })

        button.addEventListener("mousedown", () =>
        {
            button.style.background = "green";
        })
    });
}

hover();

