
const hamburgerBtn = document.getElementById('hammbuger');
const list = document.getElementById('hammbuger-list');
const hideElement = document.querySelectorAll('.card-1,.about,.speakers,.partners,container')
console.log(hideElement)
hamburgerBtn.addEventListener('click', () => {
list.style.display = 'flex'
hamburgerBtn.style.display = 'none';

for(let i =0 ;i < hideElement.length; i ++){
 hideElement[i].style.display = 'none';
}

});