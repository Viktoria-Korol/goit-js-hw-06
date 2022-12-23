//! ЗАВДАННЯ 5
// currentTarget.value
//     ? (nameOutput.textContent = currentTarget.value)
//     : (nameOutput.textContent = "Anonimus");


const inputRef = document.querySelector(`#name-input`)
const spanRef = document.querySelector(`#name-output`)
inputRef.addEventListener(`input`, (event) => {
    if (event.currentTarget.value === ``) {
        return spanRef.textContent = `Anonymous`;
    }
    if (event)
    {return spanRef.textContent = event.currentTarget.value}
}) 