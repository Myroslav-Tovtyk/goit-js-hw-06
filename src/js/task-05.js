const input = document.querySelector("#name-input");
const inputSpan = document.querySelector('#name-output');

function onInputAction(event) {
    const valueInput = event.currentTarget.value;

    if (valueInput.length === 0) {
        return inputSpan.textContent = "Anonymous";
    } inputSpan.textContent = valueInput;
};

input.addEventListener('input', onInputAction);
