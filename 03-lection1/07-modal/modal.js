const button = document.getElementById('modal-open');
const modal = document.getElementById('modal');
const cross = document.getElementById('modal-close');

button.addEventListener('click', () => {
  modal.classList.add('open');
});

cross.addEventListener('click', () => {
  modal.classList.remove('open');
});
