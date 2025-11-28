const guess = Number(prompt('Type number from 1 to 10'));
const result = document.querySelector('.result');
let arr = [];
let counter = 0;

for (let i = 0; i < 5; i += 1) {
  arr.push(Math.floor(Math.random() * 10) + 1);
}

for (i of arr) {
  if (guess === i) {
    counter += 1;
  }
}
console.log(arr);
console.log(counter);

result.innerHTML = counter;
