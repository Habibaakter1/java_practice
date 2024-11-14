alert("The javascript file is loaded!!!!");

function showScripstLoadingStatus()
{
    console.log('Javascript file is loaded!!');
}
let count = 0;
const countElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

function increaseCount() {
  count = count + 1;
  countElement.innerText = count;
}

function decreaseCount() {
  count = count - 1;
  countElement.innerText = count;
}

incrementButton.addEventListener('click', increaseCount);
decrementButton.addEventListener('click', decreaseCount);
