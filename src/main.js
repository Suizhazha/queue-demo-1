const divScreen = document.querySelector(`#screen`);
const btnCreateNumber = document.querySelector(`#createNumber`);
const btnCallNumber = document.querySelector(`#callNumber`);
const spanNewNumber = document.querySelector(`#newNumber`);
const spanQueue = document.querySelector(`#queue`);

let n = 0;
let queue = [];
btnCreateNumber.onclick = () => {
  n += 1;
  //queue.push(n);
  queue.push.call(queue, n);
  spanNewNumber.innerText = n;
  spanQueue.innerText = JSON.stringify(queue);
  //将数组变成字符串，queue.toString()也可以，但不直观
};

btnCallNumber.onclick = () => {
  if (queue.length === 0) {
    alert("没号了还叫！");
    return;
  }
  //const m = queue.shift();
  const m = queue.shift.call(queue);
  divScreen.innerText = `请 ${m} 号就餐`;
  spanQueue.innerText = JSON.stringify(queue);
};
