//! 5 ЗАВДАННЯ 

// 1. Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
//     підставляє його поточне значення в span#name - output.
//  2. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

let input = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

input.oninput = function () {
    if (input.value === '') {
       nameOutput.innerHTML = 'Anonymous';
    } else{
    nameOutput.innerHTML = input.value;
    }
}