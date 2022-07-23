let counterValue = 0;

const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector("#value");

const decrBtnClick = () => {
    counterValue -= 1;
    counter.textContent = counterValue;
};

const incrBtnClick = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};

decrBtn.addEventListener('click', decrBtnClick);
incrBtn.addEventListener('click', incrBtnClick);