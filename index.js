import {colors} from "./colors.js"
import {verbs} from './generator.js'



//Adding click event to button 
document.getElementById('btn').addEventListener('click',changeColor);

//This function changes the quote as well as changes the background color of the screen 
function changeColor(){
    let input = document.getElementById('name-input').value;
    let quote = document.getElementById('quote');
    let zodiac = document.getElementById('zodiac-input').value;
    quote.innerHTML = `Hello ${input}!  Since your Zodiac Sign is ${zodiac}, you will ${verbs[Math.floor(Math.random() * verbs.length)]} today!`;

    let body = document.querySelector("body");
    body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

}