window.addEventListener('keypress', keyboard);
const keys = document.querySelectorAll('.key');
const intro = document.querySelector('.intro');
const container = document.querySelector('.container');

let keyEvent = [];

function keyboard(event) {
  intro.classList.add('hide');
  a = event.key;
  b = event.keyCode;
  c = event.code;
  keyEvent.push(a, b, c);
  render();
}

function render() {
  keys.forEach((key, index) => {
    container.classList.remove('hide');
    key.textContent = keyEvent[index];
    console.log(keyEvent[index]);
  });
  keyEvent.splice(0, 3);
}
