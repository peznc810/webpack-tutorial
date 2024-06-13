import './styles.css'

console.log('hello webpack');

const btn = document.getElementById('btn');
const num = document.getElementById('num');

btn.addEventListener('click', () => {
  const n = parseInt(num.innerText, 10);
  num.innerText = n + 1
})