// !ЗАВДАННЯ 6

//  1.  Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

//   2.  Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
//   3.  Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
//   4.  Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputEl = document.querySelector('input#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }
    else if (event.currentTarget.value.length !== Number(inputEl.dataset.length)) {
        
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid')
    }
}


