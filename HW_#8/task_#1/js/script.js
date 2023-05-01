const button = document.querySelector('.button');
const icon = button.querySelector('.icon');

button.addEventListener('click', () => {
  icon.classList.toggle('icon_02');
});