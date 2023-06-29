
const hamburgerBtn = document.getElementById('hammbuger');
const list = document.getElementById('hammbuger-list');
const hideElement = document.querySelectorAll('.card-1,.about,.speakers,.partners,container')
console.log(hideElement)
hamburgerBtn.addEventListener('click', () => {
list.style.display = 'flex'
hamburgerBtn.style.display = 'none';
document.getElementById('x-icon').style.display = 'block';
for(let i =0 ;i < hideElement.length; i ++){
 hideElement[i].style.display = 'none';
}

});

document.getElementById('x-icon').addEventListener('click',() => {
    list.style.display = ''
hamburgerBtn.style.display = '';
document.getElementById('x-icon').style.display = '';
for(let i =0 ;i < hideElement.length; i ++){
 hideElement[i].style.display = '';
}

})

const speaker = [
    {
      speakerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRriiOkMsGax7txnLXH370xfbVkfhJDgQxaZg&usqp=CAU',
      speakerName: 'Elon musk',
      speakerTitle: 'a google cloud  computer engineer',
      sDetail: 'the founder  of tesla and space X . who invented elecetric vehicles and the first person to create reusable space craft',
    },
    {
        speakerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRriiOkMsGax7txnLXH370xfbVkfhJDgQxaZg&usqp=CAU',
        speakerName: 'Elon musk',
        speakerTitle: 'a google cloud  computer engineer',
        sDetail: 'the founder  of tesla and space X . who invented elecetric vehicles and the first person to create reusable space craft',
      },
      {
        speakerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRriiOkMsGax7txnLXH370xfbVkfhJDgQxaZg&usqp=CAU',
        speakerName: 'Elon musk',
        speakerTitle: 'a google cloud  computer engineer',
        sDetail: 'the founder  of tesla and space X . who invented elecetric vehicles and the first person to create reusable space craft',
      },
      {
        speakerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRriiOkMsGax7txnLXH370xfbVkfhJDgQxaZg&usqp=CAU',
        speakerName: 'Elon musk',
        speakerTitle: 'a google cloud  computer engineer',
        sDetail: 'the founder  of tesla and space X . who invented elecetric vehicles and the first person to create reusable space craft',
      },
      {
        speakerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRriiOkMsGax7txnLXH370xfbVkfhJDgQxaZg&usqp=CAU',
        speakerName: 'Elon musk',
        speakerTitle: 'a google cloud  computer engineer',
        sDetail: 'the founder  of tesla and space X . who invented elecetric vehicles and the first person to create reusable space craft',
      },
      {
        speakerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRriiOkMsGax7txnLXH370xfbVkfhJDgQxaZg&usqp=CAU',
        speakerName: 'Elon musk',
        speakerTitle: 'a google cloud  computer engineer',
        sDetail: 'the founder  of tesla and space X . who invented elecetric vehicles and the first person to create reusable space craft',
      },
     
  ];

  function showMoreCards() {
    const guest = document.getElementById('guest-menu');
    const seeMoreBtn = document.getElementById('seeMore');
  
    for (let i = 2; i < speaker.length; i += 1) {
      guest.innerHTML += `<article class="guest">
                              <div class="target"><img src="${speaker[i].speakerImage}" alt="card-singer-image"></div>
                              <div class="guest-det">
                                 <h2>${speaker[i].speakerName}</h3>
                                 <h3>${speaker[i].speakerTitle}</h4>
                                 <p>${speaker[i].sDetail}</p>
                              </div>
                           </article>`;
    }
  
    seeMoreBtn.style.display = 'none';
  }
  
  function createSingerCard() {
    const guest = document.getElementById('guest-menu');
    const seeMoreBtn = document.getElementById('seeMore');
    const maxIterations = (window.innerWidth < 768) ? 2 : speaker.length;
    for (let i = 0; i < maxIterations; i += 1) {
      guest.innerHTML += `<articile class="speaker">
                              <div class="target"><img src="${speaker[i].speakerImage}" alt="card-singer-image"></div>
                              <div class="guest-det">
                                 <h3>${speaker[i].speakerName}</h3>
                                 <h4>${speaker[i].speakerTitle}</h4>
                                 <p>${speaker[i].speakerDetail}</p>
                             </div>
                          </articile>`;
    }
    if (window.innerWidth < 768) {
      seeMoreBtn.style.display = 'block';
      seeMoreBtn.addEventListener('click', showMoreCards);
    } else {
      seeMoreBtn.style.display = 'none';
    }
  }
  
  createSingerCard();
  
  window.addEventListener('resize', () => {
    const guest = document.getElementById('guest-menu');
  
    guest.innerHTML = '';
  
    createSingerCard();
  });
  