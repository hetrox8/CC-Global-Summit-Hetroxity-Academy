const hamburgerBtn = document.getElementById('hammbuger');
const list = document.getElementById('hammbuger-list');
const hideElement = document.querySelectorAll('.card-1,.about,.speakers,.partners,container');
hamburgerBtn.addEventListener('click', () => {
  list.style.display = 'flex';
  hamburgerBtn.style.display = 'none';
  document.getElementById('x-icon').style.display = 'block';
  for (let i = 0; i < hideElement.length; i += 1) {
    hideElement[i].style.display = 'none';
  }
});

document.getElementById('x-icon').addEventListener('click', () => {
  list.style.display = '';
  hamburgerBtn.style.display = '';
  document.getElementById('x-icon').style.display = '';
  for (let i = 0; i < hideElement.length; i += 1) {
    hideElement[i].style.display = '';
  }
});
