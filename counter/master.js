/*
* I am creating a program that increment by one whenever I click a button
*
* */

const counter = document.querySelector(".middle");
let counterContent = 0;
document.querySelector("#increment").addEventListener("click", function () {
    if(counterContent < 100){
        ++counterContent;
        counter.textContent = String(counterContent);
    }else if( counterContent === 100){
        counterContent = 0;
        counter.textContent = String(counterContent);
    }
});