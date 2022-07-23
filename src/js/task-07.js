const inputEl = document.querySelector('#font-size-control');

const spanEl = document.querySelector("#text");

inputEl.addEventListener('change', onRangeMove);

function onRangeMove(event) {
    console.log(event.currentTarget.checked);
}